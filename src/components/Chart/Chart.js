import React from 'react';
import styles from './Chart.module.css';
import ChartBar from './ChartBar';
import { uid } from 'uid/secure';

const Chart = ({ dataPoints }) => {
  const dataPointValues = dataPoints.map(dataPoint => dataPoint.value);

  const totalMaximum = Math.max(...dataPointValues);

  return (
    <div className={styles.chart}>
      {dataPoints.map(dataPoint => (
        <ChartBar
          key={uid(4)}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
