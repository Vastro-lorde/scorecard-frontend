import React from 'react';
import { Link } from 'react-router-dom';
import AuthCss from '../css-modules/Auth.module.css';
import bgImage from '../images/bgImage.png';
import scoreLogo from '../images/scoreLogo.png';

function Login() {
  return (
    <div className={AuthCss.body}>
      <div className={AuthCss.details}>
        <div className={AuthCss.logoContainer}>
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
          <div className={AuthCss.paswordRequirements}>
            Your password must be at least 6 characters as well as contain at least one uppercase, one lowercase, and
            one number.
          </div>
          <Link to='/ForgotPassword' className={AuthCss.forgotPasswordLink}>
            Forgot Password?
          </Link>
          <input type='submit' className={AuthCss.button} value='Login' />
        </form>
      </div>
      <div className={AuthCss.imageContainer}>
        <img src={bgImage} alt='A young man typing on a computer' />
      </div>
    </div>
  );
}

export default Login;
