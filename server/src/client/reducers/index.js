import { combineReducers } from 'redux';
import usersReducer from './usersReducer';
import authReducer from './authReducer';
import adminsReducer from './adminsReducer';
import MailListReducer from './mailListReducer';
import ActiveMailReducer from './activeMailReducer';

export default combineReducers({
  users: usersReducer,
  auth: authReducer,
  admins: adminsReducer,
  mailList: MailListReducer,
  activeMail: ActiveMailReducer
});