import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Signup(): React.JSX.Element {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    // TODO: replace with real auth call
    if (!username) {
      setError("Username is required");
      return;
    }
    if (!email) {
      setError("Email is required");
      return;
    }
    if (!password) {
      setError("Password is required");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    // On success, navigate to home (replace with real signup flow)
    navigate("/home");
  }

  return (
    <div className="mt-30 flex items-center justify-center bg-[#fbf7f4] p-8">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white rounded-2xl p-8 shadow-lg"
      >
        <div className="text-center mb-2">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#fff6ea] mx-auto mb-3">
            <span className="material-symbols-outlined text-amber-400 text-[10px]">
              sound_detection_dog_barking
            </span>
          </div>
          <h2 className="text-[30px] font-semibold text-black">
            Join the Pack
          </h2>
          <p className="mt-2 text-sm text-[#8a7c60] font-medium">
            Create an account to start guessing breeds.
          </p>
        </div>

        <div className="mt-6">
          <label className="block text-xs text-[#6b6159] mb-2">Username</label>
          <div className="flex items-center gap-3 border border-gray-100 rounded-xl px-3 py-2 bg-[#fbfbfb]">
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="username"
              className="flex-1 bg-transparent outline-none text-sm placeholder-gray-400 text-black"
              type="text"
              required
            />
          </div>
        </div>

        <div className="mt-6">
          <label className="block text-xs text-[#6b6159] mb-2">
            Email Address
          </label>
          <div className="flex items-center gap-3 border border-gray-100 rounded-xl px-3 py-2 bg-[#fbfbfb]">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              className="shrink-0"
              aria-hidden
            >
              <path
                d="M3 6.5v11A1.5 1.5 0 004.5 19h15a1.5 1.5 0 001.5-1.5v-11A1.5 1.5 0 0019.5 5h-15A1.5 1.5 0 003 6.5z"
                fill="#d6d6d6"
              />
              <path
                d="M21 7.2l-8.5 6L4 7.2"
                stroke="#cfcfcf"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="flex-1 bg-transparent outline-none text-sm placeholder-gray-400 text-black"
              type="email"
              required
            />
          </div>
        </div>

        <div className="mt-4">
          <label className="block text-xs text-[#6b6159] mb-2">Password</label>
          <div className="flex items-center gap-3 border border-gray-100 rounded-xl px-3 py-2 bg-[#fbfbfb]">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              className="shrink-0"
              aria-hidden
            >
              <path
                d="M6 10v8a2 2 0 002 2h8a2 2 0 002-2v-8"
                stroke="#cfcfcf"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <rect
                x="8"
                y="6"
                width="8"
                height="4"
                rx="2"
                stroke="#cfcfcf"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="flex-1 bg-transparent outline-none text-sm placeholder-gray-400 text-black"
              type="password"
              required
            />
          </div>
        </div>

        <div className="mt-4">
          <label className="block text-xs text-[#6b6159] mb-2">
            Confirm Password
          </label>
          <div className="flex items-center gap-3 border border-gray-100 rounded-xl px-3 py-2 bg-[#fbfbfb]">
            <input
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="••••••••"
              className="flex-1 bg-transparent outline-none text-sm placeholder-gray-400 text-black"
              type="password"
              required
            />
          </div>
        </div>

        {error && <div className="text-red-500 text-sm mt-2">{error}</div>}

        <div className="flex items-center justify-between mt-3 text-sm">
          <label className="flex items-center gap-2 text-[#6b6159]">
            <input
              type="checkbox"
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
              className="w-4 h-4 rounded border-gray-200"
            />
            Remember me
          </label>
          <Link to="/forgot" className="text-[#f6b034]">
            Forgot?
          </Link>
        </div>

        <button
          type="submit"
          className="w-full mt-5 bg-amber-400 text-white py-3 rounded-full font-semibold text-sm"
        >
          Sign Up
        </button>

        <div className="text-center mt-5 text-sm text-gray-300">
          Or sign up with
        </div>

        <div className="flex gap-3 mt-3">
          <button
            type="button"
            className="flex-1 flex items-center justify-center gap-3 py-2 border rounded-4xl bg-white text-sm text-black"
          >
            <svg
              width="20px"
              height="20px"
              viewBox="-3 0 262 262"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid"
            >
              <path
                d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
                fill="#4285F4"
              />
              <path
                d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
                fill="#34A853"
              />
              <path
                d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
                fill="#FBBC05"
              />
              <path
                d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
                fill="#EB4335"
              />
            </svg>
            Google
          </button>

          {/* <button
            type="button"
            className="flex-1 flex items-center justify-center gap-3 py-2 border rounded-lg bg-white text-sm text-black"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden
            >
              <rect x="3" y="3" width="18" height="18" rx="3" fill="#3b5998" />
            </svg>
            Facebook
          </button> */}
        </div>

        <div className="text-center mt-5 text-sm text-[#6b6159]">
          Already have an account?{" "}
          <Link to="/login" className="text-[#f6b034] font-semibold">
            Sign in
          </Link>
        </div>
      </form>
    </div>
  );
}
