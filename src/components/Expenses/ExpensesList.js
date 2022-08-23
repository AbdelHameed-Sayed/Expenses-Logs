import React from 'react';
import ExpenseItem from './ExpenseItem';
import styles from './ExpensesList.module.css';
const ExpensesList = ({ filteredYear, expensesArr, filteredExpensesArr }) => {
  if (filteredExpensesArr.length === 0 && filteredYear !== '') {
    return (
      <h2 className={styles['expenses-list__fallback']}>No Expenses found!</h2>
    );
  }

  const filteredItems = (
    filteredYear === '' ? expensesArr : filteredExpensesArr
  ).map(el => (
    <ExpenseItem
      title={el.title}
      amount={el.amount}
      date={el.date}
      key={el.id}
    />
  ));

  return <ul className={styles['expenses-list']}>{filteredItems}</ul>;
};

export default ExpensesList;
