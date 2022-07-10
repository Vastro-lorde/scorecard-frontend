import React from 'react';
import Navbar from '../Navbar/Navbar';
import Test from '../TestComponent/Test';
import styles from './Home.module.css';
import img1 from '../../assets/test1.png';
import img2 from '../../assets/test2.png';
import img3 from '../../assets/test3.png';
import img4 from '../../assets/Union.png';
import abeg from '../../assets/abeg.png';
import access from '../../assets/access_bank.png';
import bolt from '../../assets/bolt.png';
import first from '../../assets/first_bank.png';
import airtel from '../../assets/airtel.png';
import { Link, NavLink } from 'react-router-dom';
import { BsInstagram } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import { BsYoutube } from 'react-icons/bs';

function Home() {
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
    <div className={styles.home}>
      <Navbar />
      <section className={styles.banner}>
        <div className={styles.banner_container}>
          <div className={styles.banner_content}>
            <h6>Keep track of your progress level as you learn </h6>
            <p>Tracking your growth is a very important part of the learning process</p>
            <Link to='/signup'>
              <button className={styles.btn}>Get Started</button>
            </Link>
          </div>
        </div>
      </section>
      <section className={styles.banner_test_section}>
        <div className={styles.banner_test_container}>
          <h6>Take a skill proficiency test</h6>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat eget ipsum, <br /> sed praesent.
          </p>
          <div className={styles.banner_test_content}>
            <Test
              img={img1}
              title='Javascript & frameworks'
              text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat eget ipsum, sed praesent.'
            />
            <Test
              img={img2}
              title='React & Framework'
              text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat eget ipsum, sed praesent.'
            />
            <Test
              img={img3}
              title='C++ & Framework'
              text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat eget ipsum, sed praesent.'
            />
            <Test
              img={img1}
              title='Javascript & frameworks'
              text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat eget ipsum, sed praesent.'
            />
            <Test
              img={img2}
              title='React & Framework'
              text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat eget ipsum, sed praesent.'
            />
            <Test
              img={img3}
              title='C++ & Framework'
              text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat eget ipsum, sed praesent.'
            />
          </div>
        </div>
      </section>
      <section className={styles.trust}>
        <div className={styles.trust__content}>
          <h6>Trusted by over 1,500 Students</h6>
          <button className={styles.trust_btn}>Get Started</button>
        </div>
      </section>
      <section className={styles.track}>
        <div className={styles.track_container}>
          <div className={styles.track_left}>
            <h6>Track your weekly assesment</h6>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat eget ipsum, sed praesent.</p>
            <button className={styles.track_btn}>Get Started</button>
          </div>
          <div className={styles.track_right}>
            <div className={styles.track_imgBg}>
              <img src={img4} alt='friends' />
            </div>
          </div>
        </div>
      </section>
      <section className={styles.partners}>
        <div className={styles.partners_container}>
          <h6>Our Partners</h6>
          <div className={styles.ourPartners}>
            <img src={abeg} alt='abeg_logo' />
            <img src={access} alt='accessBank_logo' />
            <img src={bolt} alt='bolt_logo' />
            <img src={first} alt='firstBank_logo' />
            <img src={airtel} alt='airtel_logo' />
          </div>
        </div>
      </section>
      <footer>
        <div className={styles.footer_container}>
          <h6>
            Score<span>card</span>
          </h6>
          <ul className={styles.nav_links}>
            {menuItems.map((item) => (
              <li key={item.title}>
                <NavLink className={styles.li} to={item.url}>
                  {item.title}
                </NavLink>
              </li>
            ))}
          </ul>
          <hr />
          <div className={styles.footer_bottom}>
            <p>© 2022 Scorecard. All rights reserved</p>
            <div className={styles.footer_icons}>
              <BsInstagram className={styles.icon} />
              <BsTwitter className={styles.icon} />
              <BsYoutube className={styles.icon} />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
