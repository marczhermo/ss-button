<?php

namespace Marcz\SSButton\Forms;

use Marcz\SSButton\Admin\AdminController;
use SilverStripe\Control\HTTPRequest;
use SilverStripe\Control\HTTPResponse;
use SilverStripe\Forms\FormField;
use SilverStripe\ORM\DataObject;
use SilverStripe\ORM\SS_List;

/**
 * Represents a file upload field with ReactJS based frontend.
 *
 * Allows writing to a parent record with the following relation types:
 *   - has_one
 *   - has_many
 *   - many_many
 *
 * Additionally supports writing directly to the File table not attached
 * to any parent record.
 *
 * @skipUpgrade
 */
class SSButtonField extends FormField
{
    /**
     * @config
     * @var array
     */
    private static $allowed_actions = [
        'count'
    ];

    protected $schemaDataType = FormField::SCHEMA_DATA_TYPE_CUSTOM;

    protected $schemaComponent = 'SSButtonField';

    /**
     * Create a new file field.
     *
     * @param string $name The internal field name, passed to forms.
     * @param string $title The field label.
     * @param SS_List $items Items assigned to this field
     */
    public function __construct($name, $title = null, SS_List $items = null)
    {
        parent::__construct($name, $title);
        if ($items) {
            $this->setItems($items);
        }
    }

    public function getSchemaDataDefaults()
    {
        $defaults = parent::getSchemaDataDefaults();
        $uploadLink = $this->Link('count');
        $defaults['data']['createFileEndpoint'] = [
            'url' => $uploadLink,
            'method' => 'post',
            'payloadFormat' => 'urlencoded',
        ];

        return $defaults;
    }

    /**
     * Creates a single file based on a form-urlencoded upload.
     *
     * @param HTTPRequest $request
     * @return HTTPResponse
     */
    public function count(HTTPRequest $request)
    {
        if ($this->isDisabled() || $this->isReadonly()) {
            return $this->httpError(403);
        }

        // CSRF check
        $token = $this->getForm()->getSecurityToken();
        if (!$token->checkRequest($request)) {
            return $this->httpError(400);
        }

        $tmpFile = $request->postVar('count');
        /** @var File $file */
        $file = $this->saveTemporaryFile($tmpFile, $error);

        // Prepare result
        if ($error) {
            $result = [
                'message' => [
                    'type' => 'error',
                    'value' => $error,
                ]
            ];
            $this->getUpload()->clearErrors();
            return (new HTTPResponse(json_encode($result), 400))
                ->addHeader('Content-Type', 'application/json');
        }

        // Return success response
        $result = [
            AssetAdmin::singleton()->getObjectFromData($file)
        ];

        // Don't discard pre-generated client side canvas thumbnail
        if ($result[0]['category'] === 'image') {
            unset($result[0]['thumbnail']);
        }
        $this->getUpload()->clearErrors();
        return (new HTTPResponse(json_encode($result)))
            ->addHeader('Content-Type', 'application/json');
    }

    public function getSchemaStateDefaults()
    {
        $state = parent::getSchemaStateDefaults();
        $state['value'] = $this->Value() ?: [ 'values' => []];
        return $state;
    }

    /**
     * Encode selected values for react
     *
     * @return array
     */
    protected function getEncodedItems()
    {
        $adminController = AdminController::singleton();
        $fileData = [];
        foreach ($this->getItems() as $file) {
            $fileData[] = $adminController->getObjectFromData($file);
        }
        return $fileData;
    }

    public function getAttributes()
    {
        $attributes = array(
            'class' => $this->extraClass(),
            'type' => 'button',
            'id' => $this->ID(),
            'data-schema' => json_encode($this->getSchemaData()),
            'data-state' => json_encode($this->getSchemaState()),
        );

        $attributes = array_merge($attributes, $this->attributes);

        $this->extend('updateAttributes', $attributes);

        return $attributes;
    }

    public function Type()
    {
        return 'entwine-ss-button ss-button-field';
    }

    public function performReadonlyTransformation()
    {
        $clone = clone $this;
        $clone->setReadonly(true);
        return $clone;
    }

    public function performDisabledTransformation()
    {
        $clone = clone $this;
        $clone->setDisabled(true);
        return $clone;
    }
}
