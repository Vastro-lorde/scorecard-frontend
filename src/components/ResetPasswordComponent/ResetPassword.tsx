import React from 'react';
import { Link } from 'react-router-dom';
import ResetPasswordCss from './ResetPassword.module.css';
import scoreLogo from '../../assets/scoreLogo.svg';
import bgImage from '../../assets/bgImage.svg';
import eyeShow from '../../assets/eyeShow.svg';
import { useRef } from 'react';

// import ResetPasswordCss from 'ResetPassword.module.css';
function ResetPassword() {
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
    <div className={ResetPasswordCss.body}>
      <div className={ResetPasswordCss.details}>
        <div className={ResetPasswordCss.logoContainer}>
          <Link to='/'>
            <img src={scoreLogo} alt='Score logo' />
          </Link>
        </div>
        <Link to='/login' className={ResetPasswordCss.backToLoginStyle}>
          Go back to Login
        </Link>
        <h1 className={ResetPasswordCss.altH1}>Reset Password</h1>
        <p className={ResetPasswordCss.sendLink}>Please choose your new password.</p>
        <form action='' method=''>
          <label htmlFor='password'>New Password</label>
          <div className={ResetPasswordCss.passwordInputContainer}>
            <input
              className={ResetPasswordCss.passwordInput}
              ref={passwordInput}
              type='password'
              name='password'
              id='password'
              placeholder='Enter new password'
              pattern='(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}'
              required
            />
            <div
              className={ResetPasswordCss.eyeShowContainer}
              onClick={() => {
                passwordShow(passwordInput);
              }}
            >
              <img src={eyeShow} alt='Score logo' />
            </div>
          </div>
          <label htmlFor='confirmPassword'>Confirm Password</label>
          <div className={ResetPasswordCss.passwordInputContainer}>
            <input
              className={ResetPasswordCss.passwordInput}
              ref={confirmPasswordInput}
              type='password'
              name='confirmPassword'
              placeholder='Confirm new password'
              pattern='(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}'
              required
            />
            <div
              className={ResetPasswordCss.eyeShowContainer}
              onClick={() => {
                passwordShow(confirmPasswordInput);
              }}
            >
              <img src={eyeShow} alt='Score logo' />
            </div>
          </div>
          <div className={ResetPasswordCss.paswordRequirements}>
            Your password must be at least 6 characters as well as contain at least one uppercase, one lowercase, and
            one number.
          </div>
          <input type='submit' className={ResetPasswordCss.button} value='Change Password' />
        </form>
      </div>
      <div className={ResetPasswordCss.imageContainer}>
        <img src={bgImage} alt='A young man typing on a computer' />
      </div>
    </div>
  );
}

export default ResetPassword;
