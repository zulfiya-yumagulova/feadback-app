import React, { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import FeedbackData from "../Data/FeedbackData";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: "This is feedback 1",
      rating: 10,
    },
    {
      id: 2,
      text: "This is feedback 2",
      rating: 4,
    },
    {
      id: 3,
      text: "This is feedback 3",
      rating: 5,
    },
    {
      id: 4,
      text: "This is feedback 4",
      rating: 9,
    },
  ]);

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edite: false,
  });
  //   Delete feedback function
  const deleteFeedback = (id) => {
    if (window.confirm("Are yousure you want to delete?")) {
      setFeedback(feedback.filter((feedback) => feedback.id !== id));
    }
  };

  //   Add feedback function
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  //   Set item to be updated function
  const editFeedback = (item) => {
    setFeedback({
      item,
      edite: true,
    });
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        deleteFeedback,
        addFeedback,
        editFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
