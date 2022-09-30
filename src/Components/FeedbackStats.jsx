import React from "react";

export default function feedbackStats({ feedbacks }) {
  // Calcute Ratings average
  let average =
    feedbacks.reduce((acc, cur) => {
      return acc + cur.rating;
    }, 0) / feedbacks.length;

  average = average.toFixed(1).replace(/[.,]0$/, "");

  console.log(average);

  return (
    <div className="feedback-stats">
      <h4>{feedbacks.length} Reviews</h4>
      <h4>Average Raiting: {isNaN(average) ? 0 : average}</h4>
    </div>
  );
}
