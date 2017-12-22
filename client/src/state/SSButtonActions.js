import ACTION_TYPES from './SSButtonActionTypes';

export function fireClick(currentData) {
  return (dispatch) =>
    dispatch({
      type: ACTION_TYPES.CLICK_COUNT,
      payload: { currentData },
    });
}
