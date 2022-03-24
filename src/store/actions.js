import {STORE_EMAIL, STORE_DETAILS, STORE_TOKEN} from './constants';
export function storeEmail(email) {
  return {
    type: STORE_EMAIL,
    payload: {email: email},
  };
}
export function storeDetails(details) {
  return {
    type: STORE_DETAILS,
    payload: {...details},
  };
}
export function storeToken(token) {
  return {
    type: STORE_TOKEN,
    payload: {token: token},
  };
}
