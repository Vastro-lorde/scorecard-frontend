import React from 'react';
import styles from './Performance.module.css';

const PerformanceReport = () => {
  const data = [
    {
      th: '1st week',
      td1: '30',
      td2: '70',
      td3: '80',
      td4: '80',
    },
    {
      th: '2nd week',
      td1: '70',
      td2: '50',
      td3: '90',
      td4: '70',
    },
    {
      th: '3rd week',
      td1: '60',
      td2: '50',
      td3: '60',
      td4: '70',
    },
    {
      th: '4th week',
      td1: '70',
      td2: '50',
      td3: '90',
      td4: '70',
    },
  ];

  return (
    <div className={styles.performanceReport}>
      <div className={styles.container}>
        <h6>Scorecard</h6>
        <div className={styles.performanceReport_content}>
          <table className={styles.performanceReport_table}>
            <tr>
              <th>Month</th>
              <th>Algorithm</th>
              <th>Weekly Task</th>
              <th>Assessent Test</th>
              <th>Agile Test</th>
            </tr>
            {data.map((item) => (
              <tr className={styles.tr}>
                <td>{item.th}</td>
                <td>{item.td1}</td>
                <td>{item.td2}</td>
                <td>{item.td3}</td>
                <td>{item.td4}</td>
              </tr>
            ))}
          </table>
          <table className={styles.performanceReport_table}>
            <tr>
              <th>Month</th>
              <th>Algorithm</th>
              <th>Weekly Task</th>
              <th>Assessent Test</th>
              <th>Agile Test</th>
            </tr>
            {data.map((item) => (
              <tr className={styles.tr}>
                <td>{item.th}</td>
                <td>{item.td1}</td>
                <td>{item.td2}</td>
                <td>{item.td3}</td>
                <td>{item.td4}</td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default PerformanceReport;
