import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Header = ({ auth }) => {
  console.log('My auth status is', auth);

  const authButton = auth ? (
    <a href="/api/logout">Logout</a>
  ) : (
      <a href="/api/auth/google">Login</a>
    );

  return (
    <nav>
      <div className="nav-wrapper green lighten-2">
        <Link to="/" className="brand-logo center">Virtual Office</Link>
        <ul className="right">
          <li><Link to="/users">Users</Link></li>
          <li><Link to="/email">eMail</Link></li>
          <li><Link to="/admins">Admins</Link></li>
          <li>{authButton}</li>
        </ul>
      </div>
    </nav>
  )
}

const mapStateToProps = ({ auth }) => ({
  auth
})

export default connect(mapStateToProps)(Header);