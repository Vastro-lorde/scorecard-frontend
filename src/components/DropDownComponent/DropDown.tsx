import React from 'react';
import Icon from '../IconComponent/Icon';
import profileIcon from '../../assets/profileIcon.svg';
import logOutRoundIcon from '../../assets/logOutRoundIcon.svg';
import DropDownCss from './DropDown.module.css';

const DropDown = (ref: any) => {
  return (
    <div className={DropDownCss.iconsContainer}>
      <Icon name='Profile' image={profileIcon} link='/Dashboard/Overview' className={DropDownCss.icons} />
      <Icon name='Log Out' image={logOutRoundIcon} link='/Dashboard/Overview' className={DropDownCss.icons} />
    </div>
  );
};

export default DropDown;
