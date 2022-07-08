import React from 'react';
import styles from './DashboardScore.module.css';
import { HiArrowNarrowUp } from 'react-icons/hi';

interface PROP {
  text: string;
  score: number;
  percentage: number;
}
const DashboardScore = ({ text, score, percentage }: PROP) => {
  return (
    <div className={styles.dashboard_score}>
      <p>{text}</p>
      <div className={styles.dashboard_bottom}>
        <h5>{score}</h5>
        <div className={styles.right}>
          <HiArrowNarrowUp className={styles.icon} />
          <p>{percentage}%</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardScore;
