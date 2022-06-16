import React from 'react';
import { Link } from 'react-router-dom';
import LoginCss from '../css-modules/Login.module.css';

function Login() {
  return (
    <div className={LoginCss.body}>
      <small>This is the Login</small>
      <Link to='/ForgotPassword'>Forgot Password</Link>
    </div>
  );
}

export default Login;
