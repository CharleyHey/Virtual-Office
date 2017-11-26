import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';
import reducers from '../client/reducers';

export default req => {
  const axiosInstance = axios.create({
    baseURL: 'localhost:3000',
    headers: { cookie: req.get('cookie') || ''}
  })

  const store = createStore(reducers, {auth: req.user}, applyMiddleware(thunk.withExtraArgument(axiosInstance)));
  return store;
}
