import React from "react";
import { useNavigate } from "react-router-dom";
import "./AssessmentSelector.css";

function AssessmentSelector() {
  const navigate = useNavigate();

  return (
    <div className="assessment-select">
      <h2>Choose Assessment Type</h2>
      <p>Select how you want to assess your career path</p>

      <div className="card-container">
        <div className="card" onClick={() => navigate("/assessment/manual")}>
          <h3>📝 Manual Assessment</h3>
          <p>Quick self-rating based assessment</p>
        </div>

        <div className="card" onClick={() => navigate("/assessment/full")}>
          <h3>🧠 Full Assessment</h3>
          <p>Detailed question-based assessment</p>
        </div>
      </div>
    </div>
  );
}

export default AssessmentSelector;
