import React from "react";
import FeedbackItem from "./FeedbackItem";

function FeedbackList({ feedbacks, handleDelete }) {
  //   console.log(feedbacks.user);
  if (!feedbacks || feedbacks.length === 0) {
    return <p>No Feedback Posted Yet...</p>;
  }
  return (
    // Map an array to create card components
    <div className="feedback-list">
      {feedbacks.map((feedback) => (
        <FeedbackItem
          key={feedback.id}
          feedback={feedback}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
}

export default FeedbackList;
