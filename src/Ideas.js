import React from 'react';
import Card from './Card'
import './Ideas.css';

const Ideas = (props) => {
  const { name } = props;

  return (
    <div className='ideas-container'>
      <Card />
      <Card />
      <Card />
    </div>
  )
}

export default Ideas; 