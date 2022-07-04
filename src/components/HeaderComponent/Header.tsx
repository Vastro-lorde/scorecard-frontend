import React from 'react';
import { Link } from 'react-router-dom';
import HeaderCss from './Header.module.css';
import scoreLogo from '../../assets/scoreLogo.svg';
import profilePlaceholder from '../../assets/profilePlaceholder.png';
import { GiHamburgerMenu } from 'react-icons/gi';
import Icon from '../IconComponent/Icon';

const Header = () => {
  return (
    <div className={HeaderCss.header}>
      <div className={HeaderCss.logoContainer}>
        <Link to='/'>
          <img src={scoreLogo} alt='Score logo' />
        </Link>
      </div>
      <div className={HeaderCss.profileMenu}>
        <Icon image={profilePlaceholder} name='Profile Name' link='' />
        <div className={HeaderCss.menuContainer}>
          <GiHamburgerMenu />
        </div>
      </div>
    </div>
  );
};

export default Header;
