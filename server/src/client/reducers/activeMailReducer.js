import { FETCH_ACTIVE_MAIL } from '../actions';

export default (state = {}, action) => {
  switch (action.type) {

    case FETCH_ACTIVE_MAIL:
      return action.payload;

    default:
      return state
  }
}
