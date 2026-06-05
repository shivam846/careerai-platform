import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


const questions = [
  "Software Development","Data Science","Artificial Intelligence","Cyber Security","Cloud Computing",
  "Data Analysis","Product Management","UI/UX Design","Digital Marketing","Content Writing",
  "Graphic Design","Video Editing","Business Analysis","Finance & Accounting","Investment Banking",
  "Entrepreneurship","Human Resources","Public Relations","Sales & Business Dev.","Operations Management",
  "Supply Chain Management","Civil Engineering","Mechanical Engineering","Electrical Engineering",
  "Biotechnology","Medical & Healthcare","Pharmacy","Psychology","Teaching & Education","Law",
  "Journalism","Fashion Design","Animation & VFX","Game Development","Hospitality Management","Aviation",
];


const careerData = {
  "Business Analyst": {
    description: "Analyze business problems and provide solutions using data.",
    skills: ["SQL", "Excel", "Communication"],
    roadmap: ["Learn SQL", "Learn Excel", "Practice case studies"]
  },
  "Software Development": {
    description: "Build software applications and systems.",
    skills: ["Java", "DSA", "React"],
    roadmap: ["Learn Java", "Build Projects", "Practice DSA"]
  }
};



function AssessmentPage() {
  const navigate = useNavigate();

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});


  const handleAnswer = (value) => {
    const updated = {
      ...answers,
      [questions[currentQuestion]]: value,
    };
    setAnswers(updated);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      submitAssessment(updated);
    }
  };

  // ✅ top 3 ke liy
  const submitAssessment = async (finalAnswers) => {
  try {
    const user = JSON.parse(localStorage.getItem("user"));

    const payload = {
      ...finalAnswers,
      email: user?.email || "guest"
    };

    const res = await axios.post(
      "http://localhost:5000/predict",
      payload
    );

    console.log("ML RESPONSE:", res.data);

    const top3 = res.data?.top_3_careers;

    if (!top3 || top3.length === 0) {
      alert("No result from ML");
      return;
    }

    console.log("TOP3:", top3);

// 🔥 IMPORTANT
    localStorage.setItem("top3", JSON.stringify(top3));

    // ✅ Result page पर भेजो
    navigate("/result", {
      state: { top3 }
    });

  } catch (err) {
    console.error(err);
    alert("Backend error");
  }
};

  return (
    <div className="min-h-screen bg-white">

      {/* ===== TOP BG SECTION ===== */}
      <div
        className="relative pt-12 pb-40 min-h-[420px]"
        style={{
          backgroundImage: "url('/bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "top center",
        }}
      >
        {/* light overlay */}
        <div className="absolute inset-0 bg-white/20"></div>

        <div className="relative z-10 max-w-5xl mx-auto px-6">

          {/* Title */}
          <h1 className="text-4xl font-bold text-center text-indigo-600">
            Career Assessment
          </h1>
          <p className="text-center text-gray-600 mt-2">
            Discover the careers that match your interests and strengths
          </p>

          {/* Progress */}
          <div className="mt-6 bg-white/80 rounded-2xl p-4 shadow-md">
            <div className="flex justify-between text-sm mb-2">
              <span>Progress</span>
              <span>{currentQuestion + 1} of 36</span>
            </div>
            <div className="w-full bg-gray-200 h-2 rounded-full">
              <div
                className="bg-gradient-to-r from-indigo-500 to-purple-500 h-2 rounded-full"
                style={{
                  width: `${((currentQuestion + 1) / 36) * 100}%`,
                }}
              />
            </div>
          </div>

          {/* How it works */}
          <div className="mt-6 bg-white/90 rounded-2xl p-6 shadow-md flex gap-4 items-center">
            <img src="/target.png" alt="target" className="w-14 h-14" />
            <div>
              <h3 className="font-semibold text-lg">How it works</h3>
              <p className="text-gray-600 text-sm">
                Answer each question with Yes or No based on your interest.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* ===== CONTENT SECTION ===== */}
      <div className="max-w-5xl mx-auto px-6 -mt-28 relative z-20">

        {/* Question Card */}
        <div className="bg-white rounded-2xl p-6 shadow-xl flex justify-between items-center">
          <div className="flex items-center gap-4">
            <img src="/bag.png" alt="msg" className="w-12 h-12" />
            <div>
              <p className="text-sm text-gray-500">
                Question {currentQuestion + 1} of 36
              </p>
              <h2 className="text-lg font-semibold">
                Are you interested in{" "}
                <span className="text-indigo-600">
                  {questions[currentQuestion]}
                </span>
                ?
              </h2>
            </div>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => handleAnswer(1)}
              className="px-6 py-2 rounded-xl bg-green-100 text-green-600 hover:bg-green-200 transition"
            >
              Yes
            </button>
            <button
              onClick={() => handleAnswer(0)}
              className="px-6 py-2 rounded-xl bg-red-100 text-red-600 hover:bg-red-200 transition"
            >
              No
            </button>
          </div>
        </div>

        {/* Career Grid */}
        <div className="mt-6 bg-white rounded-2xl p-6 shadow-xl">
          <div className="flex justify-between mb-4">
            <h3 className="text-lg font-semibold text-indigo-600">
              All 36 Career Areas
            </h3>
            <span className="text-sm text-gray-500">
              {Object.keys(answers).length} of 36 answered
            </span>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {questions.map((q, i) => (
              <div
                key={i}
                className={`flex justify-between items-center bg-gray-50 border border-gray-200 rounded-xl px-4 py-2 transition ${
                  answers[q] === 1 ? "bg-green-50 border-green-300" : ""
                }`}
              >
                <span className="text-sm">
                  {i + 1}. {q}
                </span>
                <input
                  type="radio"
                  checked={answers[q] === 1}
                  readOnly
                />
              </div>
            ))}
          </div>
        </div>

  

      </div>
    </div>
  );
}

export default AssessmentPage;