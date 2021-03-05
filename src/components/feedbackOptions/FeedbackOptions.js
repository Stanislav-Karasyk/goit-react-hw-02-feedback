import React from 'react';

const FeedbackOptions = ({onLeaveFeedback, onHandleClick}) => {
  return (
    <div className="container">
      <h2>{onLeaveFeedback}</h2>
      <button name='good' onClick={onHandleClick}>Good</button>
      <button name='neutral' onClick={onHandleClick}>Neutral</button>
      <button name='bad' onClick={onHandleClick}>Bad</button>
    </div>
  );
};

export default FeedbackOptions;

