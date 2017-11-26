import mails from '../../dummyData/mails';

export const FETCH_USERS = 'fetch_users';
export const fetchUsers = () => async (dispatch, getState, api) => {
  const res = await api.get('/users');
  dispatch({
    type: FETCH_USERS,
    payload: res
  });
}

export const FETCH_CURRENT_USER = 'fetch_current_user';
export const fetchCurrentUser = () => async (dispatch, getState, api) => {
  const res = await api.get('/api/current_user');
  console.log(res);
  dispatch({
    type: FETCH_CURRENT_USER,
    payload: res
  });
}

export const FETCH_ADMINS = 'fetch_admins';
export const fetchAdmins = () => async (dispatch, getState, api) => {
  const res = await api.get('/admins');
  dispatch({
    type: FETCH_ADMINS,
    payload: res
  });
}

export const FETCH_MAILS = 'fetch_mails';
export const fetchMails = (mail) =>  {
  return {
    type: FETCH_MAILS,
    payload: mail
  }
}

export const FETCH_ACTIVE_MAIL = 'fetch_active_mail';
export const fetchActiveMail = (mail) => {
  return {
    type: FETCH_ACTIVE_MAIL,
    payload: mail
  }
}