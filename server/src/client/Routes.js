import React from 'react';
import App from './App';
import HomePage from './pages/HomePage';
import UsersListPage from './pages/UsersListPage';
import NotFoundPage from './pages/NotFoundPage';
import AdminsPage from './pages/AdminsPage';
import EmailToolPage from './pages/EmailToolPage';


export default [
  {
    ...App,
    routes: [
      {
        ...HomePage,
        path: '/',
        exact: true
      },
      {
        ...UsersListPage,
        path: '/users'
      },
      {
        ...AdminsPage,
        path: '/admins'
      },
      {
        ...EmailToolPage,
        path: '/email'
      },
      {
        ...NotFoundPage
      }
    ]
  }
];