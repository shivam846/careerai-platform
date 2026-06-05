import { useState } from "react";

function ForgotPasswordPage() {
  const [step, setStep] = useState(1);

  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const [message, setMessage] = useState("");

  // 🔹 Step 1: Send OTP
  const handleSendOtp = async () => {
    console.log("Sending OTP to:", email);

    const res = await fetch(
      `http://localhost:8080/api/auth/forgot-password?email=${email}`,
      { method: "POST" }
    );

    const data = await res.text();

    if (data.includes("OTP")) {
      setMessage("📩 OTP sent to your email");
      setStep(2);
    } else {
      setMessage("❌ " + data);
    }
  };

  // 🔹 Step 2: Verify OTP
  const handleVerifyOtp = async () => {
    const cleanOtp = otp.trim(); // 🔥 IMPORTANT FIX

    console.log("Email:", email);
    console.log("Entered OTP:", cleanOtp);

    const res = await fetch(
      `http://localhost:8080/api/auth/verify-reset-otp?email=${email}&otp=${cleanOtp}`,
      { method: "POST" }
    );

    const data = await res.text();

    console.log("Response:", data);

    if (data === "OTP verified") {
      setMessage("✅ OTP verified");
      setStep(3);
    } else {
      setMessage("❌ " + data);
    }
  };

  // 🔹 Step 3: Reset Password
  const handleResetPassword = async () => {
    const cleanOtp = otp.trim();

    const res = await fetch(
      `http://localhost:8080/api/auth/reset-password?email=${email}&otp=${cleanOtp}&newPassword=${newPassword}`,
      { method: "POST" }
    );

    const data = await res.text();

    if (data.includes("success")) {
      setMessage("✅ Password reset successful. Now login!");
      setStep(1);
      setEmail("");
      setOtp("");
      setNewPassword("");
    } else {
      setMessage("❌ " + data);
    }
  };

  return (
    <div style={{ padding: 30 }}>
      <h2>Forgot Password</h2>

      {/* STEP 1: EMAIL */}
      {step === 1 && (
        <>
          <input
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br /><br />
          <button onClick={handleSendOtp}>Send OTP</button>
        </>
      )}

      {/* STEP 2: OTP */}
      {step === 2 && (
        <>
          <p>📧 Email: {email}</p> {/* 🔥 SHOW EMAIL */}

          <input
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
          <br /><br />
          <button onClick={handleVerifyOtp}>Verify OTP</button>
        </>
      )}

      {/* STEP 3: RESET PASSWORD */}
      {step === 3 && (
        <>
          <p>📧 Email: {email}</p> {/* 🔥 SHOW EMAIL */}

          <input
            type="password"
            placeholder="New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <br /><br />
          <button onClick={handleResetPassword}>Reset Password</button>
        </>
      )}

      {message && <p>{message}</p>}
    </div>
  );
}

export default ForgotPasswordPage;