// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import { useEffect, useState } from "react";

// import LandingPage from "./components/LandingPage";
// import LoginPage from "./components/LoginPage";
// import RegisterPage from "./components/RegisterPage";
// import Dashboard from "./components/Dashboard";

// // Assessment pages
// import AssessmentSelector from "./components/AssessmentSelector";
// import AssessmentPage from "./components/AssessmentPage"; // Manual
// import FullAssessment from "./components/FullAssessment"; // Question-based

// import ForgotPasswordPage from "./components/ForgotPasswordPage"; // forgot passsword

// function App() {
//   // const [user, setUser] = useState(() => {
//   //   return JSON.parse(localStorage.getItem("user"));
//   // });

//   const [user, setUser] = useState(null);

//   // ✅ Sync user with localStorage (login / logout)
//   // useEffect(() => {
//   //   const handleStorageChange = () => {
//   //     setUser(JSON.parse(localStorage.getItem("user")));
//   //   };

//   //   window.addEventListener("storage", handleStorageChange);
//   //   return () => window.removeEventListener("storage", handleStorageChange);
//   // }, []);

//   return (
//   <>

//     <BrowserRouter>
//       <Routes>

//         <Route path="/" element={<LandingPage />} />

//         {/* <Route
//           path="/login"
//           element={user ? <Navigate to="/dashboard" replace /> : <LoginPage />}
//         /> */}

//         <Route
//           path="/login"
//           element={
//            user 
//               ? <Navigate to="/dashboard" replace /> 
//               : <LoginPage setUser={setUser} />
//           }
//         />

//         <Route
//           path="/register"
//           element={user ? <Navigate to="/dashboard" replace /> : <RegisterPage />}
//         />

//         {/* <Route
//           path="/dashboard"
//           element={user ? <Dashboard /> : <Navigate to="/login" replace />}
//         /> */}

//         {/* <Route
//           path="/dashboard"
//           element={user ? <Dashboard setUser={setUser} /> : <Navigate to="/login" replace />}
//         /> */}


//         <Route
//            path="/dashboard"
//           element={user ? <Dashboard user={user} setUser={setUser} /> : <Navigate to="/login" replace />}
//         />


//         <Route
//           path="/assessment"
//           element={user ? <AssessmentSelector /> : <Navigate to="/login" replace />}
//         />

//         <Route
//           path="/assessment/manual"
//           element={user ? <AssessmentPage /> : <Navigate to="/login" replace />}
//         />

//         <Route
//           path="/assessment/full"
//           element={user ? <FullAssessment /> : <Navigate to="/login" replace />}
//         />

//         <Route path="/forgot-password" element={<ForgotPasswordPage />} />

//         <Route path="*" element={<Navigate to="/" replace />} />

//       </Routes>
//     </BrowserRouter>
//   </>
// );
// }

// export default App;


import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";

import LandingPage from "./components/LandingPage";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import Dashboard from "./components/Dashboard";
import AssessmentPage from "./components/AssessmentPage";
import ForgotPasswordPage from "./components/ForgotPasswordPage";

import ResultPage from "./components/ResultPage";

function App() {

  const [user, setUser] = useState(null);

  return (
    <BrowserRouter>
      <Routes>

        {/* Landing */}
        <Route path="/" element={<LandingPage />} />

        {/* Login */}
        <Route
          path="/login"
          element={
            user
              ? <Navigate to="/dashboard" replace />
              : <LoginPage setUser={setUser} />
          }
        />

        {/* Register */}
        <Route
          path="/register"
          element={user ? <Navigate to="/dashboard" replace /> : <RegisterPage />}
        />

        {/* Dashboard */}
        <Route
          path="/dashboard"
          element={
            user
              ? <Dashboard user={user} setUser={setUser} />
              : <Navigate to="/login" replace />
          }
        />

        <Route path="/result" element={<ResultPage />} />

        {/* 🔥 MAIN CHANGE: DIRECT ASSESSMENT */}
        <Route
          path="/assessment"
          element={
            user
              ? <AssessmentPage />
              : <Navigate to="/login" replace />
          }
        />

        {/* Forgot Password */}
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />

        {/* Default */}
        <Route path="*" element={<Navigate to="/" replace />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;