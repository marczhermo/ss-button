import i18n from 'i18n';
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SilverStripeComponent from 'lib/SilverStripeComponent';
import fieldHolder from 'components/FieldHolder/FieldHolder';
import * as ssButtonActions from '../state/SSButtonActions';

class SSButtonField extends SilverStripeComponent {

  constructor(props) {
    super(props);

    this.handleItemClick = this.handleItemClick.bind(this);

    this.state = {
      marcz: 'hermo',
    };
  }

  componentDidMount() {
    // Copy form schema data into redux and then ignore it
    console.log(['componentDidMount', this.props.actions]);
  }

  componentWillReceiveProps(nextProps) {
    // Propegate redux state changes to redux-from value for this field
    console.log(['componentWillReceiveProps', this.props, nextProps]);
  }

  /**
   * Handles click of an item
   *
   * @param {Object} event
   */
  handleItemClick(event) {
    event.preventDefault();
    console.log(['handleItemClick', this.props]);
    this.props.actions.ssbutton.fireClick(this.props.values);
  }

  render() {
    return (
      <div className="ssButtonfield">
        <button onClick={this.handleItemClick}>0</button>
      </div>
    );
  }
}

SSButtonField.propTypes = {
  extraClass: React.PropTypes.string,
  id: React.PropTypes.string.isRequired,
  disabled: React.PropTypes.bool,
};

function mapStateToProps(state, ownprops) {
  const id = ownprops.id;
  let values = [];
  if (state.ssbutton
    && state.ssbutton
    && state.ssbutton.fields
    && state.ssbutton.fields[id]
  ) {
    values = state.ssbutton.fields[id].values || [];
  }
  const securityId = state.config.SecurityID;
  return { values, securityId };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      ssbutton: bindActionCreators(ssButtonActions, dispatch),
    },
  };
}

const ConnectedSSButtonField = connect(mapStateToProps, mapDispatchToProps)(SSButtonField);

export { SSButtonField, ConnectedSSButtonField };

export default fieldHolder(ConnectedSSButtonField);
