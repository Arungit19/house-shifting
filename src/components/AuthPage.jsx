"use client";

import { useState } from "react";
import Image from "next/image";

export default function AuthPage() {
  const [input, setInput] = useState("");
  const [step, setStep] = useState("input");
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);

  const handleContinue = () => {
    if (!input.trim()) return;
    setStep("otp");
  };

  const handleOtpChange = (val, idx) => {
    if (!/^\d?$/.test(val)) return;

    const newOtp = [...otp];
    newOtp[idx] = val;
    setOtp(newOtp);

    if (val && idx < 5) {
      const next = document.getElementById(`otp-${idx + 1}`);
      if (next) next.focus();
    }
  };

  const handleGoogleLogin = () => {
    alert("Google Login 🔐");
  };

  const handleFacebookLogin = () => {
    alert("Facebook Login 🔐");
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center px-4">

      {/* 🔥 BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/bg.jpg')" }}
      />

      {/* 🔥 DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/60" />

      {/* CONTENT */}
      <div className="relative z-10 w-full flex justify-center">

        {/* CARD */}
        <div className="relative w-full max-w-md bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden">

          {/* LOGO */}
          <Image
            src="/logo.png"
            alt="logo"
            width={120}
            height={100}
            className="absolute top-3 right-3"
          />

          {/* TOP BANNER */}
          <div className="h-40 bg-gradient-to-r from-blue-700 to-blue-500 flex items-end p-4 text-white">
            <div>
              <p className="text-sm">Move Smart, Move Easy!</p>
              <h2 className="text-lg font-bold">
                Get Up to{" "}
                <span className="bg-white text-blue-600 px-2 rounded">
                  30% OFF
                </span>
              </h2>
              <p className="text-sm">On Your First House Shift</p>
            </div>
          </div>

          <div className="p-6">

            {/* STEP 1 */}
            {step === "input" && (
              <>
                <h2 className="text-xl font-bold text-gray-800 mb-2">
                  Login or Create an account
                </h2>

                <p className="text-gray-400 text-sm mb-4">
                  Enter your mobile or email to continue
                </p>

                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Email ID or Mobile Number"
                  className="w-full border rounded-xl px-4 py-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <button
                  onClick={handleContinue}
                  disabled={!input}
                  className={`w-full py-3 rounded-xl font-semibold ${
                    input
                      ? "bg-blue-500 text-white"
                      : "bg-gray-300 text-gray-500"
                  }`}
                >
                  Continue
                </button>

                {/* SOCIAL */}
                <div className="flex items-center my-5">
                  <div className="flex-1 h-px bg-gray-200" />
                  <span className="px-2 text-sm text-gray-400">
                    Or Login Via
                  </span>
                  <div className="flex-1 h-px bg-gray-200" />
                </div>

                <div className="flex justify-center gap-6">

                  <button onClick={handleGoogleLogin} className="flex flex-col items-center gap-1">
                    <div className="w-12 h-12 rounded-full border flex items-center justify-center">
                      <span className="text-xl font-bold text-red-500">G</span>
                    </div>
                    <span className="text-xs text-gray-500">Google</span>
                  </button>

                  <button onClick={handleFacebookLogin} className="flex flex-col items-center gap-1">
                    <div className="w-12 h-12 rounded-full border flex items-center justify-center">
                      <span className="text-xl font-bold text-blue-600">f</span>
                    </div>
                    <span className="text-xs text-gray-500">Facebook</span>
                  </button>

                </div>
              </>
            )}

            {/* STEP 2 OTP */}
            {step === "otp" && (
              <>
                <button
                  onClick={() => setStep("input")}
                  className="text-blue-500 mb-3 text-sm"
                >
                  ← Back
                </button>

                <h2 className="text-xl font-bold text-gray-800 mb-2">
                  Verify OTP
                </h2>

                <div className="flex gap-2 justify-between mb-4">
                  {otp.map((digit, i) => (
                    <input
                      key={i}
                      id={`otp-${i}`}
                      type="text"
                      maxLength={1}
                      value={digit}
                      onChange={(e) =>
                        handleOtpChange(e.target.value, i)
                      }
                      className="w-10 h-12 border rounded text-center text-lg"
                    />
                  ))}
                </div>

                <button
                  onClick={() => alert("Login Successful ✅")}
                  className="w-full py-3 rounded-xl font-semibold bg-blue-500 text-white"
                >
                  Verify & Login
                </button>
              </>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}