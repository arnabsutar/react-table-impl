import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchListData = (state = {}) => async dispatch => {
  const response = await jsonPlaceholder.get('/users', {
    params: state
  });

  dispatch({ type: 'LIST_DATA_SUCCESS', payload: response.data });
};
