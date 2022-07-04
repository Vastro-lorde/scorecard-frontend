import React from 'react';
import styles from './SkillEvaluation.module.css';

const SkillEvaluation = () => {
  return (
    <div className={styles.skillEvaluation}>
      <div className={styles.skillEvaluation_container}>
        <h6>Self Evaluation</h6>
        <div className={styles.skillEvaluation_importantNotice}>
          <h6>Important to read</h6>
        </div>
      </div>
    </div>
  );
};

export default SkillEvaluation;
