import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import Header from "./Components/Header";
import FeedbackItem from "./Components/FeedbackItem";
import FeedbackData from "./Data/FeedbackData.js";
import FeedbackList from "./Components/FeedbackList";
import FeedbackStats from "./Components/FeedbackStats.jsx";
import FeedbackForm from "./Components/FeedbackForm";

function App() {
  const [feedbacks, setFeedbacks] = useState(FeedbackData);

  // Delete Feedback Function
  const deleteFeedback = (id) => {
    if (window.confirm("Are yousure you want to delete?")) {
      setFeedbacks(feedbacks.filter((feedback) => feedback.id !== id));
    }
  };

  // Add feedback function
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedbacks([newFeedback, ...feedbacks]);
  };

  return (
    <>
      <Header />
      <div className="container">
        <FeedbackForm handleAdd={addFeedback} />
        <FeedbackStats feedbacks={feedbacks} />
        <FeedbackList feedbacks={feedbacks} handleDelete={deleteFeedback} />
      </div>
    </>
  );
}

export default App;
