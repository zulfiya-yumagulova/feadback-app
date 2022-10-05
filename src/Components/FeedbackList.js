import React, { useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FeedbackItem from "./FeedbackItem";
import FeedbackContext from "../Context/Context";

function FeedbackList() {
  const { feedback } = useContext(FeedbackContext);

  //   console.log(feedbacks.user);
  if (!feedback || feedback.length === 0) {
    return <p>No Feedback Posted Yet...</p>;
  }
  return (
    // Map an array to create card components

    <div className="feedback-list">
      <AnimatePresence>
        {feedback.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedbackItem key={item.id} item={item} />
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
