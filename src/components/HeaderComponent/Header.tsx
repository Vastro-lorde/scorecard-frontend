import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import HeaderCss from './Header.module.css';
import scoreLogo from '../../assets/scoreLogo.svg';
import profilePlaceholder from '../../assets/profilePlaceholder.png';
import { GiHamburgerMenu } from 'react-icons/gi';
import Icon from '../IconComponent/Icon';
import DropDown from '../DropDownComponent/DropDown';

const Header = () => {
  const iconsContainer = useRef<HTMLDivElement>(null);

  const showMenu = () => {
    if (iconsContainer.current?.style.display === 'inline') {
      iconsContainer.current.style.display = 'none';
    } else if (iconsContainer.current?.style.display === '' || iconsContainer.current?.style.display === 'none') {
      iconsContainer.current.style.display = 'inline';
    }
  };

  return (
    <div className={HeaderCss.header}>
      <div className={HeaderCss.logoContainer}>
        <Link to='/'>
          <img src={scoreLogo} alt='Score logo' />
        </Link>
      </div>
      <div className={HeaderCss.profileMenu}>
        <Icon image={profilePlaceholder} name='Profile Name' link='' />
        <div className={HeaderCss.menuContainer} onClick={showMenu}>
          <GiHamburgerMenu />
        </div>
        <div ref={iconsContainer}>
          <DropDown />
        </div>
      </div>
    </div>
  );
};

export default Header;
