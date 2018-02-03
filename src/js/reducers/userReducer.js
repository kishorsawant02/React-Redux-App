const initialState = {
  user: null,
  fetching: false,
  fetched: false,
  error: null
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_USER': {
      return {...state, fetching: true};
    }
    case 'FETCH_USER_REJECTED': {
      return {...state, fetched: false, fetching: false, error: action.payload};
    }
    case 'FETCH_USER_FULFILED': {
      return {...state, fetched: true, user: action.payload};
    }
  }
  return state;
}
export default userReducer;
