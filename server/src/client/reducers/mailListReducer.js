import { FETCH_MAILS } from '../actions';

// If you want to test the functionality of the mail tool
// and don't want to wait for the timer uncomment the import
// below and set initial state equal to data
// import data from '../../dummyData/mails';

const initialState = []; //const initialState = data;

export default (state = initialState, action) => {
  switch (action.type) {

  case FETCH_MAILS:
    return [ ...state, action.payload ]

  default:
    return state
  }
}
