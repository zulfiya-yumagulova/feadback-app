import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import FeedbackItem from "./FeedbackItem";

function FeedbackList({ feedbacks, handleDelete }) {
  //   console.log(feedbacks.user);
  if (!feedbacks || feedbacks.length === 0) {
    return <p>No Feedback Posted Yet...</p>;
  }
  return (
    // Map an array to create card components

    <div className="feedback-list">
      <AnimatePresence>
        {feedbacks.map((feedback) => (
          <motion.div
            key={feedback.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedbackItem
              key={feedback.id}
              feedback={feedback}
              handleDelete={handleDelete}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>

    // <div className="feedback-list">
    //   {feedbacks.map((feedback) => (
    //     <FeedbackItem
    //       key={feedback.id}
    //       feedback={feedback}
    //       handleDelete={handleDelete}
    //     />
    //   ))}
    // </div>
  );
}

export default FeedbackList;
