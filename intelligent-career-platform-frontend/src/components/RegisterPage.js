import { useState } from "react";
import { register } from "../api";
import { motion } from "framer-motion";

import bg from "./bg1.png";
import shield from "./secimogi.png";
import gear from "./settingimg.png";
import heart from "./hertmsg.png";
import { useNavigate } from "react-router-dom";

function RegisterPage() {
  const navigate = useNavigate();

const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [userType, setUserType] = useState("STUDENT");

const [message, setMessage] = useState("");
const [otp, setOtp] = useState("");
const [showOtp, setShowOtp] = useState(false);

const handleRegister = async (e) => {
e.preventDefault();


const res = await register(name, email, password, userType);

if (res === "OTP sent to email") {
  setShowOtp(true);
  setMessage("📩 OTP sent to your email");
} else {
  setMessage("⚠️ " + res);
}


};

const handleVerify = async () => {
const res = await fetch(
`http://localhost:8080/api/auth/verify?email=${email}&otp=${otp}`,
{ method: "POST" }
);


const data = await res.text();

if (data === "Email verified successfully") {
  setMessage("✅ Email Verified!");
  setShowOtp(false);
} else {
  setMessage("❌ Invalid OTP");
}


};

// 🔥 floating animation
const floating = {
animate: {
y: [0, -10, 0],
transition: {
duration: 3,
repeat: Infinity,
},
},
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


    {/* ICONS (PERFECT EDGE POSITION) */}
    <motion.img 
      src={shield} 
      className="absolute -left-16 top-1/2 -translate-y-1/2 w-28 drop-shadow-xl"
      variants={floating}
      animate="animate"
    />

    <motion.img 
      src={heart} 
      className="absolute -right-14 top-10 w-24 drop-shadow-xl"
      variants={floating}
      animate="animate"
    />

    <motion.img 
      src={gear} 
      className="absolute -right-16 bottom-10 w-24 drop-shadow-xl"
      variants={floating}
      animate="animate"
    />

    {/* TITLE */}
    <h2 className="text-3xl font-bold text-gray-800 mb-6">
      Sign Up
    </h2>

    {/* FORM */}
    <form onSubmit={handleRegister} className="space-y-4">

      <input
        placeholder="Full Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
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

      <input
        type="password"
        placeholder="Confirm Password"
        className="
          w-full px-6 py-3 
          rounded-full 
          bg-white/80 
          border border-gray-200 
          outline-none 
          focus:ring-2 focus:ring-purple-400
        "
      />

      <select
        value={userType}
        onChange={(e) => setUserType(e.target.value)}
        className="
          w-full px-6 py-3 
          rounded-full 
          bg-white/80 
          border border-gray-200 
          outline-none
        "
      >
        <option value="STUDENT">Student</option>
        <option value="COLLEGE">College Student</option>
        <option value="PROFESSIONAL">Working Professional</option>
      </select>

      <div className="flex items-center text-sm text-gray-600">
        <input type="checkbox" className="mr-2" />
        I agree to the Terms & Conditions
      </div>

      <button
        type="submit"
        className="
          w-full py-3 rounded-full text-white font-semibold 
          bg-gradient-to-r from-pink-400 via-purple-500 to-blue-500 
          hover:scale-105 transition duration-300 
          shadow-[0_10px_25px_rgba(100,100,255,0.4)]
        "
      >
        Create Account
      </button>
    </form>

    {/* OTP */}
    {showOtp && (
      <div className="mt-5 space-y-2">
        <input
          placeholder="Enter OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          className="w-full px-5 py-3 rounded-full border outline-none"
        />
        <button
          onClick={handleVerify}
          className="w-full py-2 rounded-full bg-green-500 text-white"
        >
          Verify OTP
        </button>
      </div>
    )}

    <p className="mt-4 text-sm text-gray-600">
      Already have an account?{" "}
      <span 
      onClick={() => navigate("/login")} 
      className="text-blue-600 cursor-pointer hover:underline">Sign In</span>
    </p>

    {message && <p className="mt-3">{message}</p>}
  </div>
</div>


);
}

export default RegisterPage;
