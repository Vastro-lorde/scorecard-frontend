import React, { useState } from 'react';
import styles from './Navbar.module.css';
import { FaBars, FaTimes } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png';

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  const menuItems = [
    {
      title: 'Home',
      url: '/',
    },
    {
      title: 'About',
      url: '/about',
    },
    {
      title: 'Learnings',
      url: '/learning',
    },
    {
      title: 'Contact',
      url: '/contact',
    },
  ];

  return (
    <div className={styles.navbar}>
      <div className={styles.navbar__container}>
        <div className={styles.navbar_logo}>
          <img src={logo} alt='logo' />
          <h6>Scorecard</h6>
        </div>

        <div className={styles.menu_icon} onClick={handleClick}>
          {click ? <FaTimes className={styles.icons} /> : <FaBars className={styles.icons} />}
        </div>
        <div className={click ? `${styles.navbar_right} ${styles.active}` : `${styles.navbar_right}`}>
          <ul className={styles.nav_links}>
            {menuItems.map((item) => (
              <li key={item.title}>
                <NavLink className={styles.li} to={item.url}>
                  {item.title}
                </NavLink>
              </li>
            ))}
            <NavLink to='/login'>
              <button className={styles.btn}>Login</button>
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
