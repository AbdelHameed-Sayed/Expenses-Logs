import React from 'react';
import styles from './Card.module.css';

const Card = props => {
  const clsses = `${styles.card} ${props.className}`;

  // {props.children} to get all elements as children during setting the Card as a wrapper container:
  return <div className={clsses}>{props.children}</div>;
};

export default Card;
