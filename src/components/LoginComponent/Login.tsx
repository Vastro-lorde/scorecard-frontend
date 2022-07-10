import React from 'react';
import { Link } from 'react-router-dom';
import LoginCss from './Login.module.css';
import scoreLogo from '../../assets/scoreLogo.svg';
import bgImage from '../../assets/bgImage.svg';
import { useRef } from 'react';
import eyeShow from '../../assets/eyeShow.svg';

function Login() {
  const passwordInput = useRef<HTMLInputElement>(null);

  function showInput() {
    if (passwordInput.current!.type === 'password') {
      passwordInput.current!.type = 'text';
    } else {
      passwordInput.current!.type = 'password';
    }
  }

  return (
    <div className={LoginCss.body}>
      <div className={LoginCss.details}>
        <div className={LoginCss.logoContainer}>
          <Link to='/'>
            <img src={scoreLogo} alt='Score logo' />
          </Link>
        </div>
        <h1 className={LoginCss.h1}>Login to your account</h1>
        <form action=''>
          <label htmlFor='email'>Email address</label>
          <input
            type='email'
            name='email'
            id='email'
            placeholder='Enter email address'
            className={LoginCss.input}
            required
          />
          <label htmlFor='password'>Password</label>
          <div className={LoginCss.passwordInputContainer}>
            <input
              className={LoginCss.passwordInput}
              ref={passwordInput}
              type='password'
              name='password'
              id='password'
              placeholder='Enter password'
              required
            />
            <div onClick={showInput} className={LoginCss.eyeshowContainer}>
              <img src={eyeShow} alt='' />
            </div>
          </div>
          <p className={LoginCss.passwordError}>Incorrect email or password</p>
          <div className={LoginCss.paswordRequirements}>
            Your password must be at least 6 characters as well as contain at least one uppercase, one lowercase, and
            one number.
          </div>
          <Link to='/ForgotPassword' className={LoginCss.forgotPasswordLink}>
            Forgot Password?
          </Link>
          <input type='submit' className={LoginCss.button} value='Login' />
        </form>
        <Link to='/signup' className={LoginCss.signUpLink}>
          Signup new account?
        </Link>
      </div>
      <div className={LoginCss.imageContainer}>
        <img src={bgImage} alt='A young man typing on a computer' />
      </div>
    </div>
  );
}

export default Login;
