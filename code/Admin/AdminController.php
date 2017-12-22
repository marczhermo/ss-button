<?php

namespace Marcz\SSButton\Admin;

use Silverstripe\Admin\LeftAndMain;
use SilverStripe\Control\Director;
use SilverStripe\Control\HTTPRequest;
use SilverStripe\Control\HTTPResponse;
use SilverStripe\Control\Controller;
use SilverStripe\Core\Config\Config;
use SilverStripe\Core\Convert;
use SilverStripe\Core\Injector\Injector;
use SilverStripe\Core\Manifest\ModuleLoader;
use SilverStripe\ORM\DataModel;
use SilverStripe\View\TemplateGlobalProvider;
use SilverStripe\Forms\Form;
use SilverStripe\Forms\FieldList;
use SilverStripe\Forms\TextField;
use SilverStripe\Forms\LiteralField;
use SilverStripe\Forms\FormAction;
use SilverStripe\Forms\OptionsetField;
use SilverStripe\View\Requirements;
use Exception;
use SilverStripe\Security\PermissionProvider;
use Marcz\SSButton\Forms\SSButtonField;

class AdminController extends LeftAndMain implements PermissionProvider
{
    private static $url_segment = 'ss-button-admin';

    private static $url_rule = '/$Action/$ID';

    private static $menu_title = 'SS-Button Admin';

    /**
     * Set up the controller
     */
    public function init()
    {
        parent::init();

        $module = ModuleLoader::getModule('marcz/ss-button');
        Requirements::javascript($module->getRelativeResourcePath("client/dist/js/bundle.js"));
        Requirements::css($module->getRelativeResourcePath("client/dist/styles/bundle.css"));
    }


    public function index($request)
    {
        return parent::index($request);
    }

    public function getEditForm($id = null, $fields = null)
    {
        // Create fields
        $fields = new FieldList(
            new TextField('Name'),
            new SSButtonField('SSButton')
        );

        // Create actions
        $actions = new FieldList(
            new FormAction('doBrowserPoll', 'Submit')
        );


        $form = Form::create(
            $this,
            "EditForm",
            $fields,// new FieldList(),    //for empty
            new FieldList()
        )->setHTMLID('Form_EditForm');
        $form->unsetValidator();
        $form->addExtraClass('cms-edit-form');
        $form->addExtraClass('root-form');
        $form->setTemplate($this->getTemplatesWithSuffix('_EditForm'));
        $form->setAttribute('data-pjax-fragment', 'CurrentForm');

        return $form;
    }


}
