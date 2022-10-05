import React, { useContext } from "react";
import FeedbackContext from "../Context/Context";

export default function FeedbackStats() {
  const { feedback } = useContext(FeedbackContext);

  // Calcute Ratings average
  let average =
    feedback.reduce((acc, cur) => {
      return acc + cur.rating;
    }, 0) / feedback.length;

  average = average.toFixed(1).replace(/[.,]0$/, "");

  // console.log(average);

  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Raiting: {isNaN(average) ? 0 : average}</h4>
    </div>
  );
}
