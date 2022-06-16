import React from 'react';
import { Link } from 'react-router-dom';

function ResetPassword() {
  return (
    <div>
      <small>This is the ResetPassword</small>
      <Link to='/login'>Login</Link>
    </div>
  );
}

export default ResetPassword;
