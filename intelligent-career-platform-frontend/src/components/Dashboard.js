// import React, { useState } from "react";
// import "./Dashboard.css";
// import { useNavigate } from "react-router-dom";
// import {
//   LogOut,
//   Moon,
//   Sun,
//   MessageSquare,
//   Book,
//   Target,
//   Settings,
// } from "lucide-react";

// function Dashboard() {
//   const navigate = useNavigate();
//   const [darkMode, setDarkMode] = useState(true);
//   const [message, setMessage] = useState("");
//   const [chat, setChat] = useState([]);

//   // ✅ Logged-in user
//   const user = JSON.parse(localStorage.getItem("user")) || { name: "Student" };
//   const userName = user.name || "Student";

//   // ✅ Career assessment result
//   const careerResult = JSON.parse(localStorage.getItem("careerResult"));

//   // ✅ Logout
//   const handleLogout = () => {
//     localStorage.removeItem("user");
//     localStorage.removeItem("careerResult");
//     navigate("/");
//   };

//   // ✅ Chat (demo)
//   const handleSend = (e) => {
//     e.preventDefault();
//     if (!message.trim()) return;

//     setChat([
//       ...chat,
//       { sender: "user", text: message },
//       { sender: "ai", text: "Got it! Keep learning 🚀" },
//     ]);

//     setMessage("");
//   };

//   return (
//     <div className={darkMode ? "dashboard dark" : "dashboard light"}>
//       {/* HEADER */}
//       <header className="dashboard-header">
//         <h2>CareerAI Dashboard</h2>

//         <div className="header-actions">
//           <button className="theme-btn" onClick={() => setDarkMode(!darkMode)}>
//             {darkMode ? <Sun size={18} /> : <Moon size={18} />}
//             <span>{darkMode ? " Light Mode" : " Dark Mode"}</span>
//           </button>

//           <button className="logout-btn" onClick={handleLogout}>
//             <LogOut size={18} /> <span>Logout</span>
//           </button>
//         </div>
//       </header>

//       {/* BODY */}
//       <div className="dashboard-body">
//         {/* SIDEBAR */}
//         <aside className="sidebar">
//           <h3>Menu</h3>
//           <ul>
//             <li>
//               <Target size={16} /> Overview
//             </li>
//             <li>
//               <Book size={16} /> Goals
//             </li>
//             <li>
//               <MessageSquare size={16} /> AI Chat
//             </li>
//             <li>
//               <Settings size={16} /> Settings
//             </li>
//           </ul>
//         </aside>

//         {/* MAIN CONTENT */}
//         <main className="main-content">
//           {/* WELCOME */}
//           <section className="welcome-box">
//             <h2>Welcome Back, {userName} 👋</h2>
//             <p>
//               This is your personalized AI-powered dashboard. Track your goals,
//               complete daily tasks, and chat with your AI mentor.
//             </p>
//           </section>

//           {/* STATS */}
//           <section className="stats-grid">
//             <div className="stat-card">
//               <h3>Career Recommendation</h3>

//               <p>
//                 <b>
//                   {careerResult?.recommendedCareer ||
//                     careerResult?.career ||
//                     "Not assessed yet"}
//                 </b>
//               </p>

//               <p className="subtext">
//                 {careerResult
//                   ? "Suggested by AI based on your assessment"
//                   : "Complete assessment to get personalized recommendation"}
//               </p>

//               {/* ✅ Show button ONLY if not assessed */}
//               {!careerResult && (
//                 <button
//                   className="primary-btn"
//                   onClick={() => navigate("/assessment")}
//                 >
//                   Start Assessment
//                 </button>
//               )}
//             </div>


//             <div className="stat-card">
//               <h3>Today's Progress</h3>
//               <div className="progress-bar">
//                 <div className="progress" style={{ width: "70%" }}></div>
//               </div>
//               <p>70% Completed</p>
//             </div>

//             <div className="stat-card">
//               <h3>Next Task</h3>
//               <p>Build a React project and revise SQL joins 🔥</p>
//             </div>
//           </section>

//           {/* CHAT */}
//           <section className="chat-section">
//             <h3>Chat with CareerAI 🤖</h3>

//             <div className="chat-box">
//               {chat.map((c, i) => (
//                 <div key={i} className={`chat-msg ${c.sender}`}>
//                   {c.text}
//                 </div>
//               ))}
//             </div>

//             <form onSubmit={handleSend} className="chat-input">
//               <input
//                 type="text"
//                 placeholder="Type your message..."
//                 value={message}
//                 onChange={(e) => setMessage(e.target.value)}
//               />
//               <button type="submit">Send</button>
//             </form>
//           </section>
//         </main>
//       </div>
//     </div>
//   );
// }

// export default Dashboard;
// ------
// import React, { useState, useEffect } from "react";
// import "./Dashboard.css";

// import { useNavigate } from "react-router-dom";
// import {
//   LogOut,
//   Moon,
//   Sun,
//   MessageSquare,
//   Book,
//   Target,
//   Settings,
// } from "lucide-react";

// function Dashboard({ setUser, user }) {
//   const navigate = useNavigate();

//   const [career, setCareer] = useState("");

//   const [darkMode, setDarkMode] = useState(true);
//   const [message, setMessage] = useState("");
//   const [chat, setChat] = useState([]);

//   useEffect(() => {
//   const savedCareer = localStorage.getItem("career");

//   console.log("FROM LOCALSTORAGE:", savedCareer); // 🔍 debug

//   if (savedCareer) {
//     setCareer(savedCareer);
//   }
//   }, []);

//   // ✅ User name (NO localStorage)
//   const userName = user?.name || "Student";

//   // ❌ REMOVE localStorage careerResult (temporary static)
//   const careerResult = null;

//   // ✅ Logout
//   const handleLogout = () => {
//     setUser(null);
//     navigate("/", { replace: true });
//   };

//   // ✅ Chat
//   const handleSend = (e) => {
//     e.preventDefault();
//     if (!message.trim()) return;

//     setChat([
//       ...chat,
//       { sender: "user", text: message },
//       { sender: "ai", text: "Nice! Keep going 🚀" },
//     ]);

//     setMessage("");
//   };

//   return (
//     <div className={darkMode ? "dashboard dark" : "dashboard light"}>
      
//       {/* HEADER */}
//       <header className="dashboard-header">
//         <h2>CareerAI Dashboard</h2>

//         <div className="header-actions">
//           <button
//             className="theme-btn"
//             onClick={() => setDarkMode(!darkMode)}
//           >
//             {darkMode ? <Sun size={18} /> : <Moon size={18} />}
//             <span>{darkMode ? " Light Mode" : " Dark Mode"}</span>
//           </button>

//           <button className="logout-btn" onClick={handleLogout}>
//             <LogOut size={18} /> <span>Logout</span>
//           </button>
//         </div>
//       </header>

//       {/* BODY */}
//       <div className="dashboard-body">
        
//         {/* SIDEBAR */}
//         <aside className="sidebar">
//           <h3>Menu</h3>
//           <ul>
//             <li>
//               <Target size={16} /> Overview
//             </li>

//             <li onClick={() => navigate("/assessment")}>
//               <Book size={16} /> Goals
//             </li>

//             <li>
//               <MessageSquare size={16} /> AI Chat
//             </li>

//             <li>
//               <Settings size={16} /> Settings
//             </li>
//           </ul>
//         </aside>

//         {/* MAIN */}
//         <main className="main-content">
          
//           {/* WELCOME */}
//           <section className="welcome-box">
//             <h2>Welcome Back, {userName} 👋</h2>
//             <p>
//               This is your personalized AI-powered dashboard. Track your goals,
//               complete daily tasks, and chat with your AI mentor.
//             </p>
//           </section>

//           {/* CARDS */}
//           <section className="stats-grid">
            
//             {/* CARD 1 */}
//             <div className="stat-card">
//               <h3>Career Recommendation</h3>

//               <p><b>{career || "Not assessed yet"}</b></p>

//               <p className="subtext">
//                 Complete assessment to get personalized recommendation
//               </p>

//               <button
//                 className="primary-btn"
//                 onClick={() => navigate(career ? "/result" : "/assessment")}
//               >
//                 {career ? "View Result" : "Start Assessment"}
//               </button>
//             </div>

//             {/* CARD 2 */}
//             <div className="stat-card">
//               <h3>Today's Progress</h3>

//               <div className="progress-bar">
//                 <div className="progress"></div>
//               </div>

//               <p>70% Completed</p>
//             </div>

//             {/* CARD 3 */}
//             <div className="stat-card">
//               <h3>Next Task</h3>
//               <p>Build a React project and revise SQL joins 🔥</p>
//             </div>

//           </section>

//           {/* CHAT */}
//           <section className="chat-section">
//             <h3>Chat with CareerAI 🤖</h3>

//             <div className="chat-box">
//               {chat.map((c, i) => (
//                 <div key={i} className={`chat-msg ${c.sender}`}>
//                   {c.text}
//                 </div>
//               ))}
//             </div>

//             <form onSubmit={handleSend} className="chat-input">
//               <input
//                 type="text"
//                 placeholder="Type your message..."
//                 value={message}
//                 onChange={(e) => setMessage(e.target.value)}
//               />

//               <button type="submit">Send</button>
//             </form>
//           </section>

//         </main>
//       </div>
//     </div>
//   );
// }

// export default Dashboard;


import React, { useState, useEffect } from "react";
import "./Dashboard.css";

import { useNavigate } from "react-router-dom";
import {
  LogOut,
  Moon,
  Sun,
  MessageSquare,
  Book,
  Target,
  Settings,
} from "lucide-react";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis
} from "recharts";

function Dashboard({ setUser, user }) {
  const navigate = useNavigate();

  const [top3, setTop3] = useState([]);
  const [career, setCareer] = useState("");

  const [darkMode, setDarkMode] = useState(true);
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);
  const [chatLoading, setChatLoading] = useState(false);
  const [chatError, setChatError] = useState("");

  const [activeTab, setActiveTab] = useState("overview");

  const [history, setHistory] = useState([]);
  const [jobRecs, setJobRecs] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [mood, setMood] = useState({ mood: "Neutral", score: 5, emoji: "😐", recommendation: "" });
  const [completedTasks, setCompletedTasks] = useState({});
  const [settingsSaved, setSettingsSaved] = useState(false);
  const [settingsForm, setSettingsForm] = useState(() => {
    const storedSettings = localStorage.getItem("dashboardSettings");
    if (storedSettings) {
      return JSON.parse(storedSettings);
    }

    const storedUser = JSON.parse(localStorage.getItem("user")) || {};
    return {
      name: storedUser.name || "",
      email: storedUser.email || "",
      phone: storedUser.phone || "",
      education: "",
      skills: "",
      careerGoal: "",
      preferredField: "",
      jobLocation: "",
      workMode: "Hybrid",
      learningDifficulty: "Beginner",
      dailyStudyHours: "1 hour",
      emailReminders: true,
      deadlineReminders: true,
      weeklyReport: false,
      jobAlerts: true,
      aiResponseStyle: "Simple",
      aiRole: "Mentor",
      saveChatHistory: true,
      compactMode: false,
    };
  });

 useEffect(() => {
  // ===== LOCAL STORAGE =====
  const savedCareer = localStorage.getItem("career");
  console.log("FROM LOCALSTORAGE:", savedCareer);

  if (savedCareer) {
    setCareer(savedCareer);

    // Fetch job recommendations from backend API
    fetch(`http://localhost:8080/api/jobs?query=${encodeURIComponent(savedCareer)}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("JOB RECS:", data);
        setJobRecs(data);
      })
      .catch((err) => console.error("Job Recs Error:", err));

    // Fetch tasks for this career
    console.log("Fetching tasks for career:", savedCareer);
    fetch(`http://localhost:8080/api/tasks?career=${encodeURIComponent(savedCareer)}`)
      .then((res) => {
        console.log("Task response status:", res.status);
        return res.json();
      })
      .then((data) => {
        console.log("TASKS FULL RESPONSE:", data);
        console.log("TASKS ARRAY:", data.tasks);
        setTasks(data.tasks || []);
      })
      .catch((err) => console.error("Tasks Error:", err));
  }

  const storedTop3 = localStorage.getItem("top3");
  if (storedTop3) {
    setTop3(JSON.parse(storedTop3));
  }

  console.log("TOP3 DASHBOARD:", storedTop3);

  // ===== USER HISTORY FETCH =====
  const user = JSON.parse(localStorage.getItem("user"));
  console.log("USER DASHBOARD:", user);

  if (user?.email) {
    fetch(`http://localhost:5000/history/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("HISTORY DATA:", data);
        setHistory(data);
      })
      .catch((err) => console.error("History Error:", err));
  }

}, []);

  const userName = user?.name || "Student";

  // ✅ Logout
  const handleLogout = () => {
    setUser(null);
    navigate("/", { replace: true });
  };

  // ✅ Chat
  const handleSend = async (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    const userMessage = { sender: "user", text: message };
    setChat((prevChat) => [...prevChat, userMessage]);
    setMessage("");
    setChatLoading(true);
    setChatError("");

    try {
      const historyPayload = settingsForm.saveChatHistory ? chat.map((item) => ({
        role: item.sender === "ai" ? "assistant" : "user",
        content: item.text,
      })) : [];
      historyPayload.unshift({
        role: "system",
        content: `You are CareerAI, acting as a ${settingsForm.aiRole}. Use a ${settingsForm.aiResponseStyle.toLowerCase()} response style. The user's career goal is ${settingsForm.careerGoal || career || "not set"}. Their skill level is ${settingsForm.learningDifficulty}.`,
      });
      historyPayload.push({ role: "user", content: message });

      const response = await fetch("http://localhost:8080/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ history: historyPayload }),
      });

      if (!response.ok) {
        let errorMessage = `Chat API error ${response.status}`;
        try {
          const errorData = await response.json();
          errorMessage = errorData.details || errorData.error || errorMessage;
        } catch (parseError) {
          // Keep the status-based message when the server does not return JSON.
        }
        throw new Error(errorMessage);
      }

      const data = await response.json();
      const assistantReply = data.reply || "Sorry, I could not get a response.";
      setChat((prevChat) => [...prevChat, { sender: "ai", text: assistantReply }]);
    } catch (error) {
      console.error("Chat Error:", error);
      setChatError(error.message || "Unable to connect to CareerAI chat. Please try again.");
      setChat((prevChat) => [
        ...prevChat,
        { sender: "ai", text: "Sorry, I'm having trouble connecting right now." },
      ]);
    } finally {
      setChatLoading(false);
    }
  };

  const COLORS = ["#6366f1", "#a855f7", "#ec4899"];

  const getChartData = () => {
    const map = {};

    history.forEach((item) => {
      map[item.career] = (map[item.career] || 0) + 1;
    });

    return Object.keys(map).map((key) => ({
      career: key,
      count: map[key]
    }));
  };

  // ✅ Analyze Mood from Chat Messages
  const analyzeChatMood = (messages) => {
    const allText = messages.map((m) => m.text).join(" ").toLowerCase();

    const positiveKeywords = [
      "great", "excellent", "amazing", "awesome", "love", "wonderful", "excited",
      "happy", "done", "completed", "success", "learned", "good", "perfect"
    ];

    const negativeKeywords = [
      "stuck", "confused", "frustrated", "tired", "hard", "difficult", "struggle",
      "stressed", "worried", "sad", "angry", "hate", "terrible", "failed"
    ];

    let positiveScore = positiveKeywords.filter((kw) => allText.includes(kw)).length;
    let negativeScore = negativeKeywords.filter((kw) => allText.includes(kw)).length;

    let moodType = "Neutral";
    let scoreValue = 5;
    let emoji = "😐";

    if (positiveScore > negativeScore && positiveScore > 0) {
      moodType = "Happy";
      scoreValue = Math.min(10, 5 + positiveScore * 2);
      emoji = "😊";
    } else if (negativeScore > positiveScore && negativeScore > 0) {
      moodType = "Stressed";
      scoreValue = Math.max(1, 5 - negativeScore * 2);
      emoji = "😞";
    }

    let recommendation = "Keep learning at your own pace.";
    if (moodType === "Happy" && scoreValue >= 8) {
      recommendation = "Great progress! Try a harder task today. 🚀";
    } else if (moodType === "Happy") {
      recommendation = "Keep up the positive momentum!";
    } else if (moodType === "Stressed" && scoreValue <= 3) {
      recommendation = "Take a break! You've got this. 💪";
    } else if (moodType === "Stressed") {
      recommendation = "Try an easier task to build confidence.";
    }

    setMood({ mood: moodType, score: scoreValue, emoji, recommendation });
  };

  // Analyze mood when chat updates
  useEffect(() => {
    if (chat.length > 0) {
      analyzeChatMood(chat);
    }
  }, [chat]);

  // Toggle task completion
  const toggleTaskCompletion = (taskName) => {
    setCompletedTasks((prev) => ({
      ...prev,
      [taskName]: !prev[taskName],
    }));
  };

  // Calculate task progress
  const getTaskProgress = () => {
    if (tasks.length === 0) return 0;
    const completed = Object.values(completedTasks).filter(Boolean).length;
    return Math.round((completed / tasks.length) * 100);
  };

  const handleSettingsChange = (field, value) => {
    setSettingsSaved(false);
    setSettingsForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSettingsSave = (e) => {
    e.preventDefault();
    localStorage.setItem("dashboardSettings", JSON.stringify(settingsForm));

    const storedUser = JSON.parse(localStorage.getItem("user")) || {};
    const updatedUser = {
      ...storedUser,
      name: settingsForm.name,
      email: settingsForm.email,
      phone: settingsForm.phone,
    };

    localStorage.setItem("user", JSON.stringify(updatedUser));
    setUser(updatedUser);
    setSettingsSaved(true);
  };

  const clearChatHistory = () => {
    setChat([]);
    setChatError("");
    setMood({ mood: "Neutral", score: 5, emoji: "😐", recommendation: "" });
  };

  return (
    <div className={`${darkMode ? "dashboard dark" : "dashboard light"} ${settingsForm.compactMode ? "compact" : ""}`}>
      
      {/* HEADER */}
      <header className="dashboard-header">
        <h2>CareerAI Dashboard</h2>

        <div className="header-actions">
          <button
            className="theme-btn"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            <span>{darkMode ? " Light Mode" : " Dark Mode"}</span>
          </button>

          <button className="logout-btn" onClick={handleLogout}>
            <LogOut size={18} /> <span>Logout</span>
          </button>
        </div>
      </header>

      {/* BODY */}
      <div className="dashboard-body">
        
        {/* SIDEBAR */}
        <aside className="sidebar">
          <h3>Menu</h3>
          <ul>
            <li onClick={() => setActiveTab("overview")} style={{ cursor: "pointer" }}>
              <Target size={16} /> Overview
            </li>

            <li onClick={() => navigate("/assessment")} style={{ cursor: "pointer" }}>
              <Book size={16} /> Goals
            </li>

            <li onClick={() => setActiveTab("chat")} style={{ cursor: "pointer" }}>
              <MessageSquare size={16} /> AI Chat
            </li>

            <li onClick={() => setActiveTab("learning")} style={{ cursor: "pointer" }}>
              🎯 Learning Path
            </li>

            <li onClick={() => setActiveTab("history")} style={{ cursor: "pointer" }}>
              📜 History
            </li>

            <li onClick={() => setActiveTab("settings")} style={{ cursor: "pointer" }}>
              <Settings size={16} /> Settings
            </li>
          </ul>
        </aside>

        {/* MAIN */}
        <main className="main-content">

  {/* ================= OVERVIEW ================= */}
  {activeTab === "overview" && (
    <>
      {/* WELCOME */}
      <section className="welcome-box">
        <h2>Welcome Back, {userName} 👋</h2>
        <p>
          This is your personalized AI-powered dashboard. Track your goals,
          complete daily tasks, and chat with your AI mentor.
        </p>
      </section>

      {/* CARDS */}
      <section className="stats-grid">

        {/* CARD 1 */}
        <div className="stat-card">
          <h3>Career Recommendation</h3>

          <p><b>{career || "Not assessed yet"}</b></p>

          <p className="subtext">
            Complete assessment to get personalized recommendation
          </p>

          {career ? (
            <>
              <button
                className="primary-btn"
                onClick={() => navigate("/result")}
              >
                View Result
              </button>

              <button
                className="primary-btn"
                style={{ marginTop: "10px", background: "#ef4444" }}
                onClick={() => {
                  localStorage.removeItem("career");
                  localStorage.removeItem("top3");
                  setCareer("");
                  navigate("/assessment");
                }}
              >
                Retake Assessment
              </button>
            </>
          ) : (
            <button
              className="primary-btn"
              onClick={() => navigate("/assessment")}
            >
              Start Assessment
            </button>
          )}
        </div>

        {/* CARD 2 */}
        <div className="stat-card">
          <h3>Today's Progress</h3>

          <div className="progress-bar">
            <div className="progress"></div>
          </div>

          <p>70% Completed</p>
        </div>

        {/* CARD 3 */}
        <div className="stat-card">
          <h3>Next Task</h3>
          <p>Build a React project and revise SQL joins 🔥</p>
        </div>

      </section>

      {/* GRAPH */}
      <section className="stat-card" style={{ marginTop: "20px" }}>
        <h3>📊 Career Match Analysis</h3>

        {top3.length > 0 ? (
          <div style={{ width: "100%", height: 300 }}>
            <ResponsiveContainer>
              <PieChart>
                <Pie
                  data={top3}
                  dataKey="score"
                  nameKey="career"
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  label
                >
                  {top3.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        ) : (
          <p style={{ textAlign: "center", color: "gray" }}>
            No data available
          </p>
        )}
      </section>

      {/* JOB RECOMMENDATIONS */}
      {career && jobRecs.length > 0 && (
        <section className="stat-card job-recommendation-card" style={{ marginTop: "20px" }}>
          <div className="job-section-header">
            <div>
              <h3>🔎 Job Openings for {career}</h3>
              <p>Explore top matching portals for your recommendation and jump straight to hiring pages.</p>
            </div>
          </div>

          <div className="job-list">
            {jobRecs.map((p, i) => (
              <div className="job-item" key={i}>
                <div>
                  <a className="job-link" href={p.url} target="_blank" rel="noreferrer">
                    {p.portal}
                  </a>
                  <div className="job-portal-badge">{career}</div>
                </div>
                <a className="job-link" href={p.url} target="_blank" rel="noreferrer">
                  View
                </a>
              </div>
            ))}
          </div>
        </section>
      )}

    </>
  )}

  {activeTab === "chat" && (
    <section className="career-chat-panel" style={{ marginTop: "20px" }}>
      <h3>Chat with CareerAI 🤖</h3>

      <div className="career-chat-subhead">
        <p>Ask for roadmap ideas, project suggestions, resume tips, or interview prep.</p>
        <span className="career-chat-status">{chatLoading ? "Thinking" : "Online"}</span>
      </div>

      <div className="chat-box">
        {chat.length === 0 && !chatLoading && (
          <div className="chat-empty-state">
            Start with a career question or ask CareerAI to create a study plan.
          </div>
        )}
        {chat.map((c, i) => (
          <div key={i} className={`chat-row ${c.sender}`}>
            <div className="chat-avatar">{c.sender === "user" ? "You" : "AI"}</div>
            <div className={`chat-msg ${c.sender}`}>
              {c.text}
            </div>
          </div>
        ))}
        {chatLoading && (
          <div className="chat-row ai">
            <div className="chat-avatar">AI</div>
            <div className="chat-msg ai typing-message">
              CareerAI is typing...
            </div>
          </div>
        )}
      </div>

      {chatError && (
        <p className="chat-error">{chatError}</p>
      )}

      <form onSubmit={handleSend} className="chat-input">
        <input
          type="text"
          placeholder="Type your message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          disabled={chatLoading}
        />

        <button type="submit" disabled={chatLoading}>
          {chatLoading ? "Sending..." : "Send"}
        </button>
      </form>
    </section>
  )}

  {activeTab === "settings" && (
    <section className="settings-panel" style={{ marginTop: "20px" }}>
      <div className="settings-header">
        <div>
          <h3>Settings</h3>
          <p>Personalize your profile, learning plan, notifications, and CareerAI behavior.</p>
        </div>
        {settingsSaved && <span className="settings-saved">Saved</span>}
      </div>

      <form onSubmit={handleSettingsSave}>
        <div className="settings-grid">
          <div className="settings-card">
            <h4>Profile</h4>
            <label>
              Full name
              <input
                type="text"
                value={settingsForm.name}
                onChange={(e) => handleSettingsChange("name", e.target.value)}
                placeholder="Your name"
              />
            </label>
            <label>
              Email
              <input
                type="email"
                value={settingsForm.email}
                onChange={(e) => handleSettingsChange("email", e.target.value)}
                placeholder="you@example.com"
              />
            </label>
            <label>
              Phone
              <input
                type="tel"
                value={settingsForm.phone}
                onChange={(e) => handleSettingsChange("phone", e.target.value)}
                placeholder="Mobile number"
              />
            </label>
            <label>
              Education level
              <select
                value={settingsForm.education}
                onChange={(e) => handleSettingsChange("education", e.target.value)}
              >
                <option value="">Select education</option>
                <option value="High School">High School</option>
                <option value="Diploma">Diploma</option>
                <option value="Bachelor's">Bachelor's</option>
                <option value="Master's">Master's</option>
              </select>
            </label>
            <label>
              Current skills
              <textarea
                value={settingsForm.skills}
                onChange={(e) => handleSettingsChange("skills", e.target.value)}
                placeholder="Java, React, SQL, communication..."
              />
            </label>
          </div>

          <div className="settings-card">
            <h4>Career Preferences</h4>
            <label>
              Career goal
              <input
                type="text"
                value={settingsForm.careerGoal}
                onChange={(e) => handleSettingsChange("careerGoal", e.target.value)}
                placeholder="Become a full-stack developer"
              />
            </label>
            <label>
              Preferred field
              <select
                value={settingsForm.preferredField}
                onChange={(e) => handleSettingsChange("preferredField", e.target.value)}
              >
                <option value="">Select field</option>
                <option value="Software Development">Software Development</option>
                <option value="Data Science">Data Science</option>
                <option value="Cloud Computing">Cloud Computing</option>
                <option value="Cybersecurity">Cybersecurity</option>
                <option value="Graphic Design">Graphic Design</option>
              </select>
            </label>
            <label>
              Job location
              <input
                type="text"
                value={settingsForm.jobLocation}
                onChange={(e) => handleSettingsChange("jobLocation", e.target.value)}
                placeholder="City or country"
              />
            </label>
            <div className="settings-row">
              <label>
                Work mode
                <select
                  value={settingsForm.workMode}
                  onChange={(e) => handleSettingsChange("workMode", e.target.value)}
                >
                  <option value="Remote">Remote</option>
                  <option value="Onsite">Onsite</option>
                  <option value="Hybrid">Hybrid</option>
                </select>
              </label>
              <label>
                Daily study time
                <select
                  value={settingsForm.dailyStudyHours}
                  onChange={(e) => handleSettingsChange("dailyStudyHours", e.target.value)}
                >
                  <option value="30 minutes">30 minutes</option>
                  <option value="1 hour">1 hour</option>
                  <option value="2 hours">2 hours</option>
                  <option value="3+ hours">3+ hours</option>
                </select>
              </label>
            </div>
            <label>
              Learning level
              <select
                value={settingsForm.learningDifficulty}
                onChange={(e) => handleSettingsChange("learningDifficulty", e.target.value)}
              >
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
              </select>
            </label>
          </div>

          <div className="settings-card">
            <h4>Notifications</h4>
            <label className="toggle-row">
              <span>Email reminders</span>
              <input
                type="checkbox"
                checked={settingsForm.emailReminders}
                onChange={(e) => handleSettingsChange("emailReminders", e.target.checked)}
              />
            </label>
            <label className="toggle-row">
              <span>Task deadline reminders</span>
              <input
                type="checkbox"
                checked={settingsForm.deadlineReminders}
                onChange={(e) => handleSettingsChange("deadlineReminders", e.target.checked)}
              />
            </label>
            <label className="toggle-row">
              <span>Weekly progress report</span>
              <input
                type="checkbox"
                checked={settingsForm.weeklyReport}
                onChange={(e) => handleSettingsChange("weeklyReport", e.target.checked)}
              />
            </label>
            <label className="toggle-row">
              <span>New job recommendation alerts</span>
              <input
                type="checkbox"
                checked={settingsForm.jobAlerts}
                onChange={(e) => handleSettingsChange("jobAlerts", e.target.checked)}
              />
            </label>
          </div>

          <div className="settings-card">
            <h4>AI Chat Preferences</h4>
            <label>
              AI response style
              <select
                value={settingsForm.aiResponseStyle}
                onChange={(e) => handleSettingsChange("aiResponseStyle", e.target.value)}
              >
                <option value="Simple">Simple</option>
                <option value="Detailed">Detailed</option>
                <option value="Step-by-step">Step-by-step</option>
              </select>
            </label>
            <label>
              CareerAI role
              <select
                value={settingsForm.aiRole}
                onChange={(e) => handleSettingsChange("aiRole", e.target.value)}
              >
                <option value="Mentor">Mentor</option>
                <option value="Interview Coach">Interview Coach</option>
                <option value="Resume Advisor">Resume Advisor</option>
              </select>
            </label>
            <label className="toggle-row">
              <span>Save chat history</span>
              <input
                type="checkbox"
                checked={settingsForm.saveChatHistory}
                onChange={(e) => handleSettingsChange("saveChatHistory", e.target.checked)}
              />
            </label>
            <label className="toggle-row">
              <span>Compact dashboard mode</span>
              <input
                type="checkbox"
                checked={settingsForm.compactMode}
                onChange={(e) => handleSettingsChange("compactMode", e.target.checked)}
              />
            </label>
          </div>
        </div>

        <div className="settings-actions">
          <button type="submit" className="primary-btn">Save Settings</button>
          <button type="button" className="secondary-btn" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          </button>
          <button type="button" className="secondary-btn danger-outline" onClick={clearChatHistory}>
            Clear Chat History
          </button>
          <button type="button" className="secondary-btn danger-outline" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </form>
    </section>
  )}

  {/* ================= LEARNING PATH ================= */}
  {activeTab === "learning" && (
    <>
      <section className="stat-card" style={{ marginTop: "20px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
          <div>
            <h3>🎯 Your Learning Path {career ? `for ${career}` : ""}</h3>
            <p style={{ color: "rgba(226, 232, 240, 0.7)" }}>Complete tasks to master your chosen career path</p>
            {!career && (
              <div style={{ background: "#f97316", padding: "10px", borderRadius: "6px", marginTop: "10px", fontSize: "14px" }}>
                ⚠️ First, <strong>complete an assessment</strong> to get your career recommendation and personalized tasks.
              </div>
            )}
          </div>
          <div style={{ textAlign: "center", background: "rgba(255, 255, 255, 0.1)", padding: "12px 20px", borderRadius: "8px" }}>
            <div style={{ fontSize: "24px", fontWeight: "bold" }}>{mood.emoji}</div>
            <div style={{ fontSize: "12px", opacity: 0.8 }}>Mood: {mood.mood}</div>
          </div>
        </div>

        {/* Mood Recommendation */}
        <div style={{ background: "rgba(96, 165, 250, 0.1)", padding: "12px", borderRadius: "8px", marginBottom: "16px", borderLeft: "4px solid #60a5fa" }}>
          <p style={{ margin: 0, fontSize: "14px" }}>💡 {mood.recommendation}</p>
        </div>

        {/* Progress Bar */}
        {career && tasks.length > 0 && (
          <div style={{ marginBottom: "20px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
              <span>Overall Progress</span>
              <span style={{ fontWeight: "bold" }}>{getTaskProgress()}%</span>
            </div>
            <div style={{ background: "rgba(255, 255, 255, 0.1)", height: "12px", borderRadius: "6px", overflow: "hidden" }}>
              <div style={{ background: "linear-gradient(90deg, #6366f1, #a855f7)", height: "100%", width: `${getTaskProgress()}%`, transition: "width 0.3s ease" }}></div>
            </div>
          </div>
        )}

        {/* Tasks List */}
        {career && tasks.length > 0 ? (
          <div style={{ display: "grid", gap: "12px" }}>
            {tasks.map((task, i) => (
              <div key={i} style={{ background: "rgba(255, 255, 255, 0.08)", padding: "14px", borderRadius: "10px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <input
                      type="checkbox"
                      checked={completedTasks[task.name] || false}
                      onChange={() => toggleTaskCompletion(task.name)}
                      style={{ width: "18px", height: "18px", cursor: "pointer" }}
                    />
                    <div>
                      <h4 style={{ margin: 0, color: completedTasks[task.name] ? "#22c55e" : "inherit", textDecoration: completedTasks[task.name] ? "line-through" : "none" }}>
                        {task.name}
                      </h4>
                      <p style={{ margin: 0, fontSize: "12px", opacity: 0.7 }}>{task.description}</p>
                    </div>
                  </div>
                </div>
                <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                  <span style={{ background: "rgba(99, 102, 241, 0.2)", padding: "4px 10px", borderRadius: "20px", fontSize: "12px" }}>
                    {task.difficulty}
                  </span>
                  <span style={{ background: "rgba(168, 85, 247, 0.2)", padding: "4px 10px", borderRadius: "20px", fontSize: "12px" }}>
                    {task.estimatedHours}h
                  </span>
                  <a href={task.resourceLink} target="_blank" rel="noreferrer" style={{ color: "#60a5fa", textDecoration: "none", fontSize: "12px", fontWeight: "bold" }}>
                    Learn
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : career ? (
          <p style={{ textAlign: "center", color: "orange", padding: "20px" }}>⏳ Loading tasks...</p>
        ) : (
          <button 
            className="primary-btn"
            onClick={() => navigate("/assessment")}
            style={{ marginTop: "10px", width: "100%" }}
          >
            📝 Start Assessment Now
          </button>
        )}
      </section>
    </>
  )}

  {/* ================= HISTORY ================= */}
  {activeTab === "history" && (
  <section className="stat-card" style={{ marginTop: "20px" }}>
    <h3>📜 Your Assessment History</h3>

    {history.length === 0 ? (
      <p style={{ textAlign: "center", color: "gray" }}>
        No history found
      </p>
    ) : (
      <>
        {/* 🔹 HISTORY LIST */}
        <div style={{ marginTop: "10px" }}>
          {history.map((item, i) => (
            <div
              key={i}
              style={{
                padding: "12px",
                marginBottom: "10px",
                borderRadius: "10px",
                background: "rgba(255,255,255,0.05)",
                display: "flex",
                justifyContent: "space-between"
              }}
            >
              <div>
                <h4 style={{ color: "#8b5cf6" }}>{item.career}</h4>
                <p style={{ fontSize: "12px", color: "gray" }}>
                  {item.date}
                </p>
              </div>

              <span style={{ color: "#22c55e" }}>
                Completed
              </span>
            </div>
          ))}
        </div>

        {/* 🔥 GRAPH SECTION */}
        <div style={{ marginTop: "20px" }}>
          <h3>📊 Career Trend</h3>

          <div style={{ width: "100%", height: 300 }}>
            <ResponsiveContainer>
              <BarChart data={getChartData()}>
                <XAxis dataKey="career" stroke="#ccc" />
                <YAxis stroke="#ccc" />
                <Tooltip 
                  contentStyle={{ backgroundColor: "#1f2937", border: "none" }} 
                />
                <Bar dataKey="count" fill="#6366f1" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </>
    )}
  </section>
)}

</main>
      </div>
    </div>
  );
}

export default Dashboard;
