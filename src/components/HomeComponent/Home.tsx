import React from 'react';
import Navbar from '../Navbar/Navbar';
import styles from './Home.module.css';

function Home() {
  return (
    <div className={styles.home}>
      <Navbar />
    </div>
  );
}

export default Home;
