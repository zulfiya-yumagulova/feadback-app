import React from "react";
import FeedbackItem from "./FeedbackItem";

function FeedbackList({ feedbacks }) {
  //   console.log(feedbacks.user);
  if (!feedbacks || feedbacks.length === 0) {
    return <p>No Feedback Posted Yet...</p>;
  }
  return (
    <div className="feedback-list">
      {feedbacks.map((feedback) => (
        <FeedbackItem key={feedback.id} feedback={feedback} />
      ))}
    </div>
  );
}

export default FeedbackList;
