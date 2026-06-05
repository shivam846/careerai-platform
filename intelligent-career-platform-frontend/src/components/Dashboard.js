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

  const [activeTab, setActiveTab] = useState("overview");

  const [history, setHistory] = useState([]);

 useEffect(() => {
  // ===== LOCAL STORAGE =====
  const savedCareer = localStorage.getItem("career");
  console.log("FROM LOCALSTORAGE:", savedCareer);

  if (savedCareer) {
    setCareer(savedCareer);
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
  const handleSend = (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    setChat([
      ...chat,
      { sender: "user", text: message },
      { sender: "ai", text: "Nice! Keep going 🚀" },
    ]);

    setMessage("");
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

  return (
    <div className={darkMode ? "dashboard dark" : "dashboard light"}>
      
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
            <li>
              <Target size={16} /> Overview
            </li>

            <li onClick={() => navigate("/assessment")}>
              <Book size={16} /> Goals
            </li>

            <li>
              <MessageSquare size={16} /> AI Chat
            </li>

            <li onClick={() => setActiveTab("history")}>
              📜 History
            </li>

            <li>
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

      {/* CHAT */}
      <section className="chat-section">
        <h3>Chat with CareerAI 🤖</h3>

        <div className="chat-box">
          {chat.map((c, i) => (
            <div key={i} className={`chat-msg ${c.sender}`}>
              {c.text}
            </div>
          ))}
        </div>

        <form onSubmit={handleSend} className="chat-input">
          <input
            type="text"
            placeholder="Type your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <button type="submit">Send</button>
        </form>
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