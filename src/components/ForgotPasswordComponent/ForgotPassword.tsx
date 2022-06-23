import React from 'react';
import { Link } from 'react-router-dom';
import ForgotpasswordCss from './ForgotPassword.module.css';
import scoreLogo from '../../assets/scoreLogo.svg';
import bgImage from '../../assets/bgImage.svg';
function ForgotPassword() {
  return (
    <div className={ForgotpasswordCss.body}>
      <div className={ForgotpasswordCss.details}>
        <div className={ForgotpasswordCss.logoContainer}>
          <Link to='/'>
            <img src={scoreLogo} alt='Score logo' />
          </Link>
        </div>
        <Link to='/login' className={ForgotpasswordCss.backToLoginStyle}>
          Go back to Login
        </Link>
        <h1 className={ForgotpasswordCss.altH1}>Forgot Password?</h1>
        <p className={ForgotpasswordCss.sendLink}>Send a link to your email to reset your password.</p>
        <form action=''>
          <label htmlFor='email'>Email address</label>
          <input type='email' name='email' id='email' placeholder='Enter email address' required />
          <input type='submit' className={ForgotpasswordCss.button} value='Send reset link' />
        </form>
      </div>
      <div className={ForgotpasswordCss.imageContainer}>
        <img src={bgImage} alt='A young man typing on a computer' />
      </div>
    </div>
  );
}

export default ForgotPassword;
