import React from "react";
import Feedback from "./Options";

const Options = ({ updateFeedback, resetReviews, totalFeedback }) => {
  return (
    <div>
      <button onClick={() => updateFeedback("good")}> Good </button>
      <button onClick={() => updateFeedback("neutral")}> Neutral </button>
      <button onClick={() => updateFeedback("bad")}> Bad </button>
      {totalFeedback > 0 && <button onClick={resetReviews}> Reset </button>}
    </div>
  );
};

export default Options;
