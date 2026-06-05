import React, { useState } from "react";
import "./FullAssessment.css";
import { useNavigate } from "react-router-dom";

const questions = [
  {
    question: "I enjoy solving logical problems",
    category: "logic"
  },
  {
    question: "I like designing creative things",
    category: "creativity"
  },
  {
    question: "I am confident while speaking",
    category: "communication"
  },
  {
    question: "I enjoy working with data",
    category: "logic"
  }
];

function FullAssessment() {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState({});

  const handleChange = (index, value) => {
    setAnswers({ ...answers, [index]: Number(value) });
  };

  const handleSubmit = async () => {
    let score = { logic: 0, creativity: 0, communication: 0 };

    questions.forEach((q, i) => {
      score[q.category] += answers[i] || 0;
    });

    const payload = {
      logicScore: score.logic,
      creativityScore: score.creativity,
      communicationScore: score.communication,
      userId: JSON.parse(localStorage.getItem("user"))?.id
    };

    await fetch("http://localhost:8080/api/assessment/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    navigate("/dashboard");
  };

  return (
    <div className="full-assessment">
      <h2>Full Career Assessment</h2>

      {questions.map((q, i) => (
        <div key={i} className="question">
          <p>{q.question}</p>
          <select onChange={(e) => handleChange(i, e.target.value)}>
            <option value="">Select</option>
            <option value="10">Strongly Agree</option>
            <option value="7">Agree</option>
            <option value="4">Neutral</option>
            <option value="1">Disagree</option>
          </select>
        </div>
      ))}

      <button onClick={handleSubmit}>Submit Full Assessment</button>
    </div>
  );
}

export default FullAssessment;
