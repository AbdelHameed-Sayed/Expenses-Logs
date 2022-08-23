import React, { useState } from 'react';
import styles from './Expenses.module.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = ({ expensesArr }) => {
  const [filteredExpensesArr, setFilteredExpensesArr] = useState(expensesArr);

  const [filteredYear, setFilteredYear] = useState('');

  const filterHandler = selectedYear => {
    console.log(selectedYear);

    setFilteredYear(selectedYear);

    setFilteredExpensesArr(
      expensesArr.filter(el => +selectedYear === el.date.getFullYear())
    );
  };

  return (
    <li>
      <Card className={styles.expenses}>
        <ExpensesFilter selected={filteredYear} onFilter={filterHandler} />
        <ExpensesChart
          expenses={filteredYear === '' ? expensesArr : filteredExpensesArr}
        />
        <ExpensesList
          filteredYear={filteredYear}
          expensesArr={expensesArr}
          filteredExpensesArr={filteredExpensesArr}
        />
      </Card>
    </li>
  );
};

export default Expenses;
