import React from "react";
import { Link } from "react-router-dom";
import Card from "../shared/Card";

function About() {
  return (
    <Card>
      <div className="about">
        <h1>About This Project</h1>
        <p>This isnanReact app to leave a feedback for a product or service </p>
        <p>
          <Link to="/">Back To Home</Link>
        </p>
      </div>
    </Card>
  );
}

export default About;
