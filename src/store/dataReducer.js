import {STORE_NOTICES} from './constants';
const initialState = {
  notices: [],
};
const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case STORE_NOTICES:
      return {...state, notices: action.payload.notices};
    default:
      return state;
  }
};
export default dataReducer;
