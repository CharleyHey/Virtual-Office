import 'babel-polyfill';
import express from 'express';
import { matchRoutes } from 'react-router-config';
import proxy from 'express-http-proxy';
import mongoose from 'mongoose';
import cookieSession from 'cookie-session';
import passport from 'passport';
import bodyParser from 'body-parser';
import keys from './config/keys';
import Routes from './client/Routes';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';
import {authroutes}from './routes/authroutes';
import './models/User';
import './services/passport';

mongoose.connect(keys.mongoURI);

const app = express();

app.use(bodyParser.json());

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());


// app.use('/api', proxy('http://localhost:3000', {
//   //   proxyReqOptDecorator(opts) {
//     //     opts.headers['x-forwarded-host'] = 'localhost:3000';
//     //     return opts;
//     //  }
//   }));
  
authroutes(app);



app.use(express.static('public'));

app.get('*', (req, res) => {
  const store = createStore(req);
  // take the request path and look at the routes-config 
  // file to see which component needs to be loaded
  const promises = matchRoutes(Routes, req.path).map(({ route }) => {
    return route.loadData ? route.loadData(store) : null;
  }).map(promise => {
    if (promise) {
      return new Promise((resolve, reject) => {
        promise.then(resolve).catch(resolve);
      });
    }
  });

  Promise.all(promises)
    .then(() => {
      const context = {};
      const content = renderer(req, store, context);
      if(context.url) {
        return res.redirect(301, context.url);
      }
      if (context.notFound) {
        res.status(404);
      }
      res.send(content);
    });
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});