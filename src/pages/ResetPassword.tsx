import React from 'react';
import { Link } from 'react-router-dom';
import AuthCss from '../css-modules/Auth.module.css';
import bgImage from '../images/bgImage.png';
import scoreLogo from '../images/scoreLogo.png';

function ResetPassword() {
  return (
    <div className={AuthCss.body}>
      <div className={AuthCss.details}>
        <div className={AuthCss.logoContainer}>
          <Link to='/'>
            <img src={scoreLogo} alt='Score logo' />
          </Link>
        </div>
        <Link to='/login' className={AuthCss.backToLoginStyle}>
          Go back to Login
        </Link>
        <h1 className={AuthCss.altH1}>Login to your account</h1>
        <p className={AuthCss.sendLink}>Send a link to your email to reset your password.</p>
        <form action=''>
          <label htmlFor='newPassword'>New Password</label>
          <input
            type='password'
            name='newPassword'
            placeholder='Enter password'
            pattern='(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}'
            required
          />
          <label htmlFor='confirmPassword'>Confirm Password</label>
          <input
            type='password'
            name='confirmPassword'
            placeholder='Confirm password'
            pattern='(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}'
            required
          />
          <input type='submit' className={AuthCss.button} value='Change Password' />
        </form>
        <Link to='/login'>Login</Link>
      </div>
      <div className={AuthCss.imageContainer}>
        <img src={bgImage} alt='A young man typing on a computer' />
      </div>
    </div>
  );
}

export default ResetPassword;
