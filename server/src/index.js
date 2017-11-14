import 'babel-polyfill';
import express from 'express';
import { matchRoutes } from 'react-router-config';
import Routes from './client/Routes';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';

const app = express();

app.use(express.static('public'));

app.get('*', (req, res) => {
  const store = createStore();
  // take the request path and look at the routes-config 
  // file to see which component needs to be loaded
  const promises = matchRoutes(Routes, req.path).map(({ route }) => {
    return route.loadData ? route.loadData(store) : null;
   });
   Promise.all(promises).then(() => {
     res.send(renderer(req, store));
   });
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});