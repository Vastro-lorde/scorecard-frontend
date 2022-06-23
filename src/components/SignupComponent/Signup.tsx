import React from 'react';
import { Link } from 'react-router-dom';
import SignupCss from './Signup.module.css';
import scoreLogo from '../../assets/scoreLogo.svg';
import bgImage from '../../assets/bgImage.svg';
import eyeShow from '../../assets/eyeShow.svg';
import { useRef } from 'react';

function Signup() {
  const passwordInput = useRef<HTMLInputElement>(null);
  const confirmPasswordInput = useRef<HTMLInputElement>(null);

  function passwordShow(passwordInput: React.RefObject<HTMLInputElement>) {
    if (passwordInput.current!.type === 'password') {
      passwordInput.current!.type = 'text';
    } else {
      passwordInput.current!.type = 'password';
    }
  }
  return (
    <div className={SignupCss.body}>
      <div className={SignupCss.details}>
        <div className={SignupCss.logoContainer}>
          <Link to='/'>
            <img src={scoreLogo} alt='Score logo' />
          </Link>
        </div>
        <Link to='/login' className={SignupCss.backToLoginStyle}>
          Go back to Login
        </Link>
        <h1 className={SignupCss.altH1}>Sign-Up account</h1>
        <form action='' method=''>
          <label htmlFor='firstname'>First Name</label>
          <input type='text' name='firstname' id='firstname' placeholder='Enter your firstname' required />
          <label htmlFor='lastname'>Last Name</label>
          <input type='text' name='lastname' id='lastname' placeholder='Enter your lastname' required />
          <label htmlFor='email'>Email address</label>
          <input type='email' name='email' id='email' placeholder='Enter email address' required />
          <label htmlFor='password'>Password</label>
          <div className={SignupCss.passwordInputContainer}>
            <input
              className={SignupCss.passwordInput}
              ref={passwordInput}
              type='password'
              name='password'
              id='password'
              placeholder='Enter password'
              pattern='(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}'
              required
            />
            <div
              className={SignupCss.eyeShowContainer}
              onClick={() => {
                passwordShow(passwordInput);
              }}
            >
              <img src={eyeShow} alt='Score logo' />
            </div>
          </div>
          <label htmlFor='confirmPassword'>Confirm Password</label>
          <div className={SignupCss.passwordInputContainer}>
            <input
              className={SignupCss.passwordInput}
              ref={confirmPasswordInput}
              type='password'
              name='confirmPassword'
              placeholder='Confirm password'
              pattern='(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}'
              required
            />
            <div
              className={SignupCss.eyeShowContainer}
              onClick={() => {
                passwordShow(confirmPasswordInput);
              }}
            >
              <img src={eyeShow} alt='Score logo' />
            </div>
          </div>
          <div className={SignupCss.paswordRequirements}>
            Your password must be at least 6 characters as well as contain at least one uppercase, one lowercase, and
            one number.
          </div>
          <input type='submit' className={SignupCss.button} value='Register' />
        </form>
      </div>
      <div className={SignupCss.imageContainer}>
        <img src={bgImage} alt='A young man typing on a computer' />
      </div>
    </div>
  );
}

export default Signup;
