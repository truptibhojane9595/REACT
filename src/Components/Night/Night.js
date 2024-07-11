

import React from 'react';
import './Night.css';

const Night = ({ mealItem }) => {
  return (
    <div className="night">
      <h1>Good Night!</h1>
      <p>Dinner item: {mealItem}</p>
      <time>{new Date().toLocaleTimeString()}</time>
    </div>
  );
};

export default Night;
