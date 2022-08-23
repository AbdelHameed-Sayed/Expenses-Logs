import React from 'react';
import styles from './ExpenseDate.module.css';

const ExpenseDate = ({ date }) => {
  const month = date.toLocaleString('en-UK', { month: 'long' });
  const year = date.getFullYear();
  const day = date.toLocaleString('en-UK', { day: '2-digit' });

  return (
    <div className={styles['expense-date']}>
      <div className={styles['expense-date__month']}>{month}</div>
      <div className={styles['expense-date__year']}>{year}</div>
      <div className={styles['expense-date__day']}>{day}</div>
    </div>
  );
};

export default ExpenseDate;
