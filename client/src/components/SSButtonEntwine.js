import jQuery from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import { schemaMerge } from 'lib/schemaFieldValues';
import { ConnectedSSButtonField } from './SSButtonField';
import { provideInjector } from 'lib/Injector';

const InjectableSSButtonField = provideInjector(ConnectedSSButtonField);

/**
 * Shiv for inserting react Field into entwine forms
 */
jQuery.entwine('ss', ($) => {
  /**
   * See boot/index.js for `.react-boot` bootstrap
   */
  $('.entwine-ss-button').entwine({

    onunmatch() {
      this._super();
      // solves errors given by ReactDOM "no matched root found" error.
      ReactDOM.unmountComponentAtNode(this[0]);
    },

    onmatch() {
      this._super();
      this.refresh();
    },

    refresh() {
      const store = window.ss.store;
      const client = window.ss.apolloClient;
      const props = this.getAttributes();
      const form = $(this).closest('form');
      const onChange = () => {
        // Trigger change detection (see jquery.changetracker.js)
        setTimeout(() => {
          form.trigger('change');
        }, 0);
      };

      ReactDOM.render(
        <ApolloProvider store={store} client={client}>
          <InjectableSSButtonField {...props} onChange={onChange} />
        </ApolloProvider>,
        this.parent()[0]
      );
    },

    /**
     * Find the selected node and get attributes associated to attach the data to the form
     *
     * @returns {Object}
     */
    getAttributes() {
      const state = $(this).data('state');
      const schema = $(this).data('schema');
      return schemaMerge(schema, state);
    },
  });
});
