import React, { useState } from 'react';
import styles from './ExpenseItem.module.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

const ExpenseItem = ({ title, amount, date }) => {
  const [titlee] = useState(title);

  return (
    <Card className={styles['expense-item']}>
      <ExpenseDate date={date} />
      <div className={styles['expense-item__description']}>
        <h2>{titlee}</h2>
        <div className={styles['expense-item__price']}>$ {amount}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
