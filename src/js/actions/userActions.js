import userList from './userJson.js';

export const fetchUser = () => (
  {
    type: 'FETCH_USER_FULFILED',
    payload: userList
  }
)

