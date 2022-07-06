import React from 'react';
import BarChart from '../BarChart/BarChart';
import DashboardScore from '../DashboardScore/DashboardScore';
import styles from './Dashboard.module.css';

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <div className={styles.dashboard_container}>
        <h6>Overview</h6>
        <div className={styles.review}>
          <DashboardScore text='1st assignment' score={70} percentage={0.006} />
          <DashboardScore text='2nd assignment' score={60} percentage={0.005} />
          <DashboardScore text='3rd assignment' score={90} percentage={0.009} />
          <DashboardScore text='4th assignment' score={80} percentage={0.008} />
        </div>
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
