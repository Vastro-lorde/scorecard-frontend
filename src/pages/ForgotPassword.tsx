import React from 'react';
import { Link } from 'react-router-dom';

function ForgotPassword() {
  return (
    <div>
      <small>This is the forgot password</small>
      <Link to='/ResetPassword'>Reset Password</Link>
    </div>
  );
}

export default ForgotPassword;
