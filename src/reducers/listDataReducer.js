const listDataReducer = (state = [], { type, payload }) => {
  switch (type) {
    case 'LIST_DATA_SUCCESS':
      return payload;
    default:
      return state;
  }
};

export default listDataReducer;