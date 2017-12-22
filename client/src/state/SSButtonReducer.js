import ACTION_TYPES from './SSButtonActionTypes';
import dataStructure from './SSButtonDataStructure';
import getFieldReducer from 'lib/reduxFieldReducer';

/**
 * Initial base state
 * @type {{fields: {}}}
 */
const initialState = {
  fields: {},
};

/**
 * Default object for an empty field state
 * @type {{files: Array}}
 */
const initialFieldState = { values: [] };

function ssButtonReducer(state = initialState, action) {
  // Get field reducer
  const reduceField = getFieldReducer(state, action, initialFieldState);

  // Update state for this field
  switch (action.type) {
    case ACTION_TYPES.CLICK_COUNT:
      return reduceField((field) => ({
        values: [
          ...(field.values),
          Object.assign({}, dataStructure, action.payload.currentData),
        ],
      }));

    default:
      return state;
  }
}

export default ssButtonReducer;
