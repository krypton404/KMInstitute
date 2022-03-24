import {STORE_EMAIL, STORE_DETAILS, STORE_TOKEN} from './constants';
const initialState = {
  email: '',
  name: '',
  number: '',
  token: undefined,
  isExist: false,
  isAdmin: true,
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case STORE_EMAIL:
      return {
        ...state,
        email: action.payload.email,
      };
    case STORE_DETAILS:
      return {
        ...state,
        name: action.payload.name,
        password: action.payload.password,
        number: action.payload.number,
        isAdmin: action.payload.isAdmin,
      };
    case STORE_TOKEN:
      return {
        ...state,
        token: action.payload.token,
      };
    default:
      return state;
  }
};
export default userReducer;
