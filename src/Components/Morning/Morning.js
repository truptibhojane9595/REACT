
import React from 'react';
import './Morning.css';

const Morning = ({ mealItem }) => {
  return (
    <div className="morning">
      <h1>Good Morning!</h1>
      <p>Breakfast item: {mealItem}</p>
      <time>{new Date().toLocaleTimeString()}</time>
    </div>
  );
};

export default Morning;
