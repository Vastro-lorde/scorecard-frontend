import React from 'react';
import BarChart from '../BarChart/BarChart';
import styles from './Dashboard.module.css';

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <div className={styles.dashboard_container}>
        <div className={styles.chart_text}>
          <div className={styles.dashboard_graph}>
            <div className={styles.dashboard_graph_top}>
              <p>
                Weekly Performance <br /> Score
              </p>
              <div className={styles.colors}>
                <div className={styles.color_red} />
                <div className={styles.color_lightGreen} />
                <div className={styles.color_yellow} />
                <div className={styles.color_green} />
              </div>
            </div>
          </div>
          <div style={{ width: '80%', margin: 'auto' }}>
            <BarChart />
          </div>
        </div>
        <div className={styles.colors}>
          <div className={styles.flex}>
            <div className={styles.color_red} />
            <p>Algorithmn</p>
          </div>
          <div className={styles.flex}>
            <div className={styles.color_lightGreen} />
            <p>Weekly Task</p>
          </div>
          <div className={styles.flex}>
            <div className={styles.color_yellow} />
            <p>Assessment Test</p>
          </div>
          <div className={styles.flex}>
            <div className={styles.color_green} />
            <p>Agile Test</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
