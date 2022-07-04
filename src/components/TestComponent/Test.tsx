import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Test.module.css';

interface PROP {
  img: string;
  title: string;
  text: string;
}

const Test = ({ img, title, text }: PROP) => {
  return (
    <div className={styles.test}>
      <img src={img} alt='javascript framework' />
      <Link to='#'>
        <h6>{title}</h6>
      </Link>
      <p>{text}</p>
    </div>
  );
};

export default Test;
