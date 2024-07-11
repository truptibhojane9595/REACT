
import React from 'react';
import Morning from './Morning/Morning.js';
import Afternoon from './Afternoon/Afternoon.js';
import Night from './Night/Night.js';

const TimeOfDay = ({ currentHour, breakfast, lunch, dinner }) => {
  let CurrentComponent;
  let mealItem;

  if (currentHour >= 5 && currentHour < 12) {
    CurrentComponent = Morning;
    mealItem = breakfast;
  } else if (currentHour >= 12 && currentHour < 18) {
    CurrentComponent = Afternoon;
    mealItem = lunch;
  } else {
    CurrentComponent = Night;
    mealItem = dinner;
  }

  return <CurrentComponent mealItem={mealItem} />;
};

export default TimeOfDay;
