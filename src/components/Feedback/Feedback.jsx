import React from "react";

const Feedback = ({ reviews, totalFeedback, positiveFeedback }) => {
  return (
    <ul>
      <li>Good: {reviews.good}</li>
      <li>Neutral: {reviews.neutral}</li>
      <li>Bad: {reviews.bad}</li>
      <li>total: {totalFeedback}</li>
      <li>positive: {positiveFeedback}%</li>
    </ul>
  );
};

export default Feedback;
