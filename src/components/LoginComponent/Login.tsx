import React from 'react';
import { Link } from 'react-router-dom';
import LoginCss from './Login.module.css';
import scoreLogo from '../../assets/scoreLogo.svg';
import bgImage from '../../assets/bgImage.svg';
function Login() {
  return (
    <div className={LoginCss.body}>
      <div className={LoginCss.details}>
        <div className={LoginCss.logoContainer}>
          <Link to='/'>
            <img src={scoreLogo} alt='Score logo' />
          </Link>
        </div>
        <h1>Login to your account</h1>
        <form action=''>
          <label htmlFor='email'>Email address</label>
          <input type='email' name='email' id='email' placeholder='Enter email address' required />
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            name='password'
            id='password'
            placeholder='Enter password'
            pattern='(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}'
            required
          />
          <div className={LoginCss.paswordRequirements}>
            Your password must be at least 6 characters as well as contain at least one uppercase, one lowercase, and
            one number.
          </div>
          <Link to='/ForgotPassword' className={LoginCss.forgotPasswordLink}>
            Forgot Password?
          </Link>
          <input type='submit' className={LoginCss.button} value='Login' />
        </form>
      </div>
      <div className={LoginCss.imageContainer}>
        <img src={bgImage} alt='A young man typing on a computer' />
      </div>
    </div>
  );
}

export default Login;
