// import React from "react";
// import { useNavigate } from "react-router-dom";
// import "./LandingPage.css";
// import landing from "./landing.png";
// import { motion } from "framer-motion";

// // function LandingPage() {
// //   const navigate = useNavigate();

// //   return (
// //     <div className="landing-container">
// //       {/* Navbar */}
// //       <nav className="navbar">
// //         <h2 className="logo" onClick={() => navigate("/")}>CareerAI</h2>
// //         <ul>
// //           <li onClick={() => navigate("/")}>Home</li>
// //           <li onClick={() => navigate("/assessment")}>Assessment</li>
// //           <li onClick={() => navigate("/login")}>Login</li>
// //         </ul>
// //       </nav>

// //       {/* Hero Section */}
// //       <div className="hero-section">
// //         <div className="hero-text">
// //           <h1>Find Your Perfect Career Path</h1>
// //           <p>AI-guided recommendations, aligned with SDG 4 (Quality Education).</p>
// //           <div className="button-group">
// //             <button
// //               className="btn"
// //               onClick={() => navigate("/register")}
// //             >
// //               Get Started
// //             </button>
// //             <button
// //               className="btn-outline"
// //               onClick={() => navigate("/login")}
// //             >
// //               Login
// //             </button>
// //           </div>
// //         </div>

// //         <img className="hero-img" src={landing} alt="students" />
// //       </div>
// //     </div>
// //   );
// // }

// // export default LandingPage;

// --------
// export default function LandingPage() {
//   const navigate = useNavigate();
//   return (
//     <div className="min-h-screen bg-[#DBE9F4]">
      
//       {/* Navbar */}
//       <nav className="flex justify-between items-center px-10 py-4 bg-white shadow">
//         <h1 className="text-2xl font-bold text-blue-600">CareerAI</h1>

//         <div className="space-x-6">
//           <a href="/" className="hover:text-blue-600">Home</a>
//           <a href="/assessment" className="hover:text-blue-600">Assessment</a>
//           <a href="/login" className="hover:text-blue-600">Login</a>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <motion.div
//   className="flex flex-col md:flex-row items-center justify-between px-10 py-16"
//   initial={{ opacity: 0 }}
//   animate={{ opacity: 1 }}
//   transition={{ duration: 1 }}
// >

//   {/* LEFT TEXT */}
//   <motion.div
//     className="max-w-xl"
//     initial={{ x: -100, opacity: 0 }}
//     animate={{ x: 0, opacity: 1 }}
//     transition={{ duration: 0.8 }}
//   >
//     <h2 className="text-4xl font-bold text-gray-800 mb-4">
//       Find Your Perfect Career Path
//     </h2>

//     <p className="text-gray-600 mb-6">
//       AI-guided recommendations aligned with SDG 4 (Quality Education).
//     </p>

//     <div className="space-x-4">
//       <button className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition">
//         Get Started
//       </button>

//       <button className="border border-blue-600 text-blue-600 px-6 py-2 rounded-lg hover:bg-blue-50 transition">
//         Login
//       </button>
//     </div>
//   </motion.div>

//   {/* RIGHT IMAGE */}
//   <motion.div
//     className="mt-10 md:mt-0 bg-[#DBE9F4] p-4 rounded-xl"
//     initial={{ x: 100, opacity: 0 }}
//     animate={{ x: 0, opacity: 1 }}
//     transition={{ duration: 0.8 }}
//   >
//     <img
//       src={landing}
//       alt="career"
//       className="w-[400px]"
//     />
//   </motion.div>

// </motion.div>
//     </div>
//   );
// }


import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import landing from "./landing.png";

export default function LandingPage() {
const navigate = useNavigate();

return ( <div className="min-h-screen bg-[#e6edf7]">

  {/* Navbar */}
  <nav className="flex justify-between items-center px-8 py-2 bg-white/80 backdrop-blur-md shadow-sm">
    <h1
      onClick={() => navigate("/")}
      className="text-2xl font-bold text-blue-600 cursor-pointer"
    >
      CareerAI
    </h1>

    <div className="space-x-6">
      <span
        onClick={() => navigate("/")}
        className="cursor-pointer hover:text-blue-600"
      >
        Home
      </span>

      <span
        onClick={() => navigate("/assessment")}
        className="cursor-pointer hover:text-blue-600"
      >
        Assessment
      </span>

      <span
        onClick={() => navigate("/login")}
        className="cursor-pointer hover:text-blue-600"
      >
        Login
      </span>
    </div>
  </nav>

  {/* Hero Section */}
  <motion.div
    className="flex flex-col md:flex-row items-center justify-between px-10 py-16"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >

    {/* LEFT TEXT */}
    <motion.div
      className="max-w-xl"
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-4xl font-bold text-gray-800 mb-4">
        Find Your Perfect Career Path
      </h2>

      <p className="text-gray-600 mb-6">
        AI-guided recommendations aligned with SDG 4 (Quality Education).
      </p>

      <div className="space-x-4">
        <button
          onClick={() => navigate("/register")}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 hover:scale-105 transition"
        >
          Get Started
        </button>

        <button
          onClick={() => navigate("/login")}
          className="border border-blue-600 text-blue-600 px-6 py-2 rounded-lg hover:bg-blue-50 hover:scale-105 transition"
        >
          Login
        </button>
      </div>
    </motion.div>

    {/* RIGHT IMAGE */}
    <motion.div
      className="mt-10 md:mt-0 bg-[#e6edf7] p-4 rounded-xl"
      
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <img
        src={landing}
        alt="career"
        className="w-[500px]"
      />
      
      


    </motion.div>

  </motion.div>
</div>


);
}
