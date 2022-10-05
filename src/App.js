import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
// import FeedbackItem from "./Components/FeedbackItem";
import FeedbackData from "./Data/FeedbackData.js";
import FeedbackList from "./Components/FeedbackList";
import FeedbackStats from "./Components/FeedbackStats.jsx";
import FeedbackForm from "./Components/FeedbackForm";
import About from "./Components/pages/About";
import AboutIconLink from "./Components/AboutIconLink";
import { FeedbackProvider } from "./Context/Context";

function App() {
  // const [feedbacks, setFeedbacks] = useState(FeedbackData);

  // Delete Feedback Function
  // const deleteFeedback = (id) => {
  //   if (window.confirm("Are yousure you want to delete?")) {
  //     setFeedbacks(feedbacks.filter((feedback) => feedback.id !== id));
  //   }
  // };

  // Add feedback function moved to feedbackContext
  // const addFeedback = (newFeedback) => {
  //   newFeedback.id = uuidv4();
  //   setFeedbacks([newFeedback, ...feedbacks]);
  // };

  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                </>
              }
            ></Route>
            <Route path="/about" element={<About />}>
              This is the about page
            </Route>
          </Routes>
          <AboutIconLink />
        </div>
      </Router>
    </FeedbackProvider>
  );
}

export default App;
