
import React from 'react';
import './Afternoon.css';

const Afternoon = ({ mealItem }) => {
  return (
    <div className="afternoon">
      <h1>Good Afternoon!</h1>
      <p>Lunch item: {mealItem}</p>
      <time>{new Date().toLocaleTimeString()}</time>
    </div>
  );
};

export default Afternoon;
