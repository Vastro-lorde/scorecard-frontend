import React from 'react';
import Styles from './ProfileSettings.module.css';

const ProfileSettings = () => {
  return (
    <div className={Styles.profileSettings}>
      <div className={Styles.profileSettings_container}>
        <h6>Profile Settings</h6>
        <div className={Styles.profileSettings_content}>
          <h6>BASIC INFORMATION</h6>
          <p>Only you can view and edit your information</p>
          <form action=''>
            <div className={Styles.formGroup}>
              <label>First Name</label>
              <input type='text' />
            </div>
            <div className={Styles.formGroup}>
              <label>Last Name</label>
              <input type='text' />
            </div>
            <div className={Styles.formGroup}>
              <label>Phone</label>
              <input type='number' />
            </div>
            <div className={Styles.formGroup}>
              <label>Email</label>
              <input type='email' />
            </div>
            <button type='submit'>Save</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfileSettings;
