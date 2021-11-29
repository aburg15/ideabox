import React from 'react';
import './Ideas.css';

const Ideas = (props) => {
  const { name } = props;
  return (
    <h2>Hello, {name}!</h2>
  )
}

export default Ideas;