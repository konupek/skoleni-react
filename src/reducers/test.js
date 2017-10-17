import { FB_LOGIN } from '../types/constants';

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case FB_LOGIN:
      console.log('login attemp');
      return state;
    default:
      return state;
  }
}
