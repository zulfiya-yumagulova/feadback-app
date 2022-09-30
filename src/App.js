import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import FeedbackItem from "./Components/FeedbackItem";
import FeedbackData from "./Data/FeedbackData.js";
import FeedbackList from "./Components/FeedbackList";
import FeedbackStats from "./Components/FeedbackStats.jsx";

function App() {
  const [feedbacks, setFeedbacks] = useState(FeedbackData);

  // Delete Feedback Function
  const deleteFeedback = (id) => {
    if (window.confirm("Are yousure you want to delete?")) {
      setFeedbacks(feedbacks.filter((feedback) => feedback.id !== id));
    }
  };

  return (
    <>
      <Header />
      <div className="container">
        <FeedbackStats feedbacks={feedbacks} />
        <FeedbackList feedbacks={feedbacks} handleDelete={deleteFeedback} />
      </div>
    </>
  );
}

export default App;
