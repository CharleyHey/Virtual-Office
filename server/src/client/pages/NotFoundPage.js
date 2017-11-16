import React from 'react';

const NotFoundPage = ({ staticContext = {} }) => {
  staticContext.notFound = true;
  return (
    <div className="center-align" style={{marginTop: '200px' }}>
      <h3>Oops!</h3>
      <p>Seems like we don't have what you asked for in store.</p>
    </div>
  );
}

export default {
  component: NotFoundPage 
};