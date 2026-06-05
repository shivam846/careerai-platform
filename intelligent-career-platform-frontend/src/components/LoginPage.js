// import { useState } from "react";
// import { login } from "../api";
// import { useNavigate } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";

// function LoginPage() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [message, setMessage] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await login(email, password);

//       if (!response || !response.name) {
//         throw new Error("Invalid response");
//       }

//       // ✅ Save user data to localStorage
//       localStorage.setItem("user", JSON.stringify(response));

//       // ✅ Show success message briefly
//       setMessage("✅ Login successful! Redirecting...");

//       // ✅ Redirect to Dashboard after short delay
//       setTimeout(() => navigate("/dashboard"), 1500);
//     } catch (error) {
//       console.error("Login failed:", error);
//       setMessage("❌ Invalid email or password");
//     }
//   };

//   return (
//     <div className="container mt-5 text-center">
//       <h2>Login</h2>
//       <form
//         onSubmit={handleLogin}
//         className="d-flex flex-column align-items-center"
//       >
//         <input
//           type="email"
//           className="form-control w-50 my-2"
//           placeholder="Enter Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />

//         <input
//           type="password"
//           className="form-control w-50 my-2"
//           placeholder="Enter Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />

//         <button type="submit" className="btn btn-primary mt-3 w-25">
//           Login
//         </button>
//       </form>
//       {/*forgot password button */}
//       <p
//         style={{ cursor: "pointer", color: "blue" }}
//         onClick={() => navigate("/forgot-password")}
//       >
//         Forgot Password?
//       </p>

//       {message && <p className="mt-3">{message}</p>}
//     </div>
//   );
// }

// export default LoginPage;


import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../api";

import bg from "./bg1.png";
import shield from "./secimogi.png";
import heart from "./hertmsg.png";

function LoginPage({ setUser }) {
const navigate = useNavigate();

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

// const handleLogin = async (e) => {
//   e.preventDefault();

//   const res = await login(email, password);

//   if (res === "Login successful") {
//     alert("✅ Login Success");

//     // 👉 dashboard pe bhejna ho to
//     navigate("/dashboard");

//   } else {
//     alert("❌ " + res);
//   }
// };

const handleLogin = async (e) => {
  e.preventDefault();

  try {
    const res = await login(email, password);

    if (!res || !res.name) {
      throw new Error("Invalid response");
    }

    // 🔥 MOST IMPORTANT LINE
    setUser(res);

    localStorage.setItem("user", JSON.stringify({
      email: res.email,
      name: res.name
    }));

    console.log("USER SAVED:", res); // debug
    
    navigate("/dashboard", { replace: true });

  } catch (error) {
    alert("❌ Invalid email or password");
  }
};


return (
<div
className="min-h-screen flex items-center justify-center bg-cover bg-center"
style={{ backgroundImage: `url(${bg})` }}
>
{/* CARD */} <div className="
     relative
     bg-white/60 
     backdrop-blur-2xl 
     p-10 
     rounded-[30px] 
     shadow-[0_20px_60px_rgba(0,0,0,0.15)] 
     w-[430px] 
     text-center
   ">


    {/* ICONS */}
    <img 
      src={shield} 
      className="absolute -left-20 top-1/2 -translate-y-1/2 w-32 drop-shadow-xl"
    />

    <img 
      src={heart} 
      className="absolute -right-16 top-10 w-24 drop-shadow-xl"
    />

    {/* TITLE */}
    <h2 className="text-3xl font-bold text-gray-800 mb-6">
      Login
    </h2>

    {/* FORM */}
    <form onSubmit={handleLogin} className="space-y-4">

      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="
          w-full px-6 py-3 
          rounded-full 
          bg-white/80 
          border border-gray-200 
          outline-none 
          focus:ring-2 focus:ring-purple-400
        "
        required
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="
          w-full px-6 py-3 
          rounded-full 
          bg-white/80 
          border border-gray-200 
          outline-none 
          focus:ring-2 focus:ring-purple-400
        "
        required
      />

      {/* REMEMBER + FORGOT */}
      <div className="flex justify-between items-center text-sm text-gray-600">
        <label className="flex items-center">
          <input type="checkbox" className="mr-2" />
          Remember me
        </label>

        <span className="cursor-pointer hover:text-blue-600">
          Forgot Password?
        </span>
      </div>

      {/* BUTTON */}
      <button
        type="submit"
        className="
          w-full py-3 rounded-full text-white font-semibold 
          bg-gradient-to-r from-pink-400 via-purple-500 to-blue-500 
          hover:scale-105 transition duration-300 
          shadow-[0_10px_25px_rgba(100,100,255,0.4)]
        "
      >
        Log In
      </button>
    </form>

    {/* SIGN UP LINK */}
    <p className="mt-4 text-sm text-gray-600">
      Don’t have an account?{" "}
      <span 
        onClick={() => navigate("/register")} 
        className="text-blue-600 cursor-pointer hover:underline"
      >
        Sign Up
      </span>
    </p>

  </div>
</div>


);
}

export default LoginPage;

