import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Description from "./components/Description/Description";
import Notification from "./components/Notification/Notification";

function App() {
  const [reviews, setReviews] = useState(() => {
    const savedFeedback = JSON.parse(localStorage.getItem("reviews"));
    return (
      savedFeedback || {
        good: 0,
        neutral: 0,
        bad: 0,
      }
    );
  });

  useEffect(() => {
    localStorage.setItem("reviews", JSON.stringify(reviews));
  }, [reviews]);

  const updateFeedback = (feedbackType) => {
    setReviews((prevReviews) => {
      return {
        ...prevReviews,
        [feedbackType]: prevReviews[feedbackType] + 1,
      };
    });
  };

  const resetReviews = () => {
    setReviews({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const totalFeedback = reviews.good + reviews.neutral + reviews.bad;
  const positiveFeedback =
    Math.round((reviews.good / totalFeedback) * 100) || 0;

  return (
    <div>
      <Description />
      <Options
        totalFeedback={totalFeedback}
        updateFeedback={updateFeedback}
        resetReviews={resetReviews}
      />
      {totalFeedback > 0 ? (
        <Feedback
          reviews={reviews}
          positiveFeedback={positiveFeedback}
          totalFeedback={totalFeedback}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
}

export default App;
