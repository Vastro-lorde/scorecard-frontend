import React from 'react';
import styles from './SkillEvaluation.module.css';
import { MdWarningAmber } from 'react-icons/md';
import { BiSearch } from 'react-icons/bi';
import img1 from '../../assets/js.png';
import img2 from '../../assets/react.png';
import TypeTest from '../TypeTest/TypeTest';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const SkillEvaluation = () => {
  return (
    <div className={styles.skillEvaluation}>
      <div className={styles.skillEvaluation_container}>
        <h6>Self Evaluation</h6>
        <div className={styles.skillEvaluation_importantNotice}>
          <div className={styles.importantNotice_top}>
            <MdWarningAmber className={styles.icon} />
            <h6>Important to read</h6>
          </div>
          <p>
            Each quiz must be completed in one session; make sure you're finished before exiting. See List of{' '}
            <strong> Skill Test and Level. </strong>
          </p>
        </div>
        <div className={styles.inputContainer}>
          <BiSearch />
          <input placeholder='Search all Assessments' type='text' />
        </div>
        <hr />
        <div className={styles.skillEvaluation_content}>
          <TypeTest
            img={img1}
            title='JavaScript'
            text="JavaScript is the world's most popular programming language. JavaScript is the programming language of the Web"
            btn='Begin Test'
          />
          <TypeTest
            img={img1}
            title='JavaScript'
            text="JavaScript is the world's most popular programming language. JavaScript is the programming language of the Web"
            btn='Begin Test'
          />
          <TypeTest
            img={img1}
            title='JavaScript'
            text="JavaScript is the world's most popular programming language. JavaScript is the programming language of the Web"
            btn='Begin Test'
          />

          <TypeTest
            img={img2}
            title='React'
            text='React makes it painless to create interactive UIs. Build encapsulated components that manage their own state.'
            btn='Begin Test'
          />
          <TypeTest
            img={img2}
            title='React'
            text='React makes it painless to create interactive UIs. Build encapsulated components that manage their own state.'
            btn='Begin Test'
          />
          <TypeTest
            img={img2}
            title='React'
            text='React makes it painless to create interactive UIs. Build encapsulated components that manage their own state.'
            btn='Begin Test'
          />
        </div>
        <div className={styles.footer}>
          <IoIosArrowBack className={styles.prev} />
          <p className={styles.prev}>Prev</p>
          <p className={styles.active}>1</p>
          <p>2</p>
          <p>3</p>
          <p>...</p>
          <p>10</p>
          <p>Next</p>
          <IoIosArrowForward />
        </div>
      </div>
    </div>
  );
};

export default SkillEvaluation;
