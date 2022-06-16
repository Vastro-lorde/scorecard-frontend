import React from 'react';
import { Link } from 'react-router-dom';
import AuthCss from '../css-modules/Auth.module.css';
import scoreLogo from '../images/scoreLogo.png';
import bgImage from '../images/bgImage.png';

function ForgotPassword() {
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
        <h1 className={AuthCss.altH1}>Forgot Password?</h1>
        <p className={AuthCss.sendLink}>Send a link to your email to reset your password.</p>
        <form action=''>
          <label htmlFor='email'>Email address</label>
          <input type='email' name='email' id='email' placeholder='Enter email address' required />
          <input type='submit' className={AuthCss.button} value='Send reset link' />
        </form>

        <Link to='/ResetPassword'>Reset Password</Link>
      </div>
      <div className={AuthCss.imageContainer}>
        <img src={bgImage} alt='A young man typing on a computer' />
      </div>
    </div>
  );
}

export default ForgotPassword;
