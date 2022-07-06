import React from 'react';
import styles from './TypeTest.module.css';

interface PROP {
  img: string;
  title: string;
  text: string;
  btn: string;
}

const TypeTest = ({ img, title, text, btn }: PROP) => {
  return (
    <div className={styles.typeTest}>
      <div className={styles.typeTest_imgTitle}>
        <img src={img} alt={title} />
        <p>{title}</p>
      </div>
      <p className={styles.p}>{text}</p>
      <button>{btn}</button>
    </div>
  );
};

export default TypeTest;
