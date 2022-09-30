import React from "react";
import { FaTimes } from "react-icons/fa";
import Card from "./shared/Card";
import PropTypes from "prop-types";

function FeedbackItem({ feedback, handleDelete }) {
  return (
    <Card>
      <div className="num-display">{feedback.rating}</div>
      <button className="close" onClick={() => handleDelete(feedback.id)}>
        <FaTimes color="purple" />
      </button>
      <div className="user-display">{feedback.user}</div>
      <div className="text-display">{feedback.text}</div>
    </Card>
  );
}

FeedbackItem.propTypes = {
  feedback: PropTypes.object.isRequired,
};

export default FeedbackItem;
