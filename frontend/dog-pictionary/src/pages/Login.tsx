import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login(): React.JSX.Element {
  const navigate = useNavigate();
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    // TODO: replace with real auth call
    if (!identifier || !password) {
      setError("Please enter both username/email and password");
      return;
    }
    navigate("/home");
  }

  return (
    <div className="mt-30 flex items-center justify-center bg-[#fbf7f4] p-8">
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left: Welcome panel */}
        <div className="text-center md:text-left px-6 md:px-12">
          <div className="inline-flex items-center gap-4 md:gap-6">
            <div className="relative">
              <div className="w-48 h-48 rounded-full bg-gray-200 overflow-hidden border-8 border-white shadow-lg">
                {/* Placeholder avatar - replace with user image if available */}
                <div className="w-full h-full flex items-center justify-center text-6xl text-amber-300">
                  🐶
                </div>
              </div>
              <div className="absolute -right-2 -bottom-2 bg-white rounded-full px-3 py-1 text-xs shadow text-amber-600 font-semibold">
                Top Player: GoldenFan
              </div>
            </div>
          </div>

          <h1 className="mt-6 text-3xl md:text-4xl font-bold text-black">
            Welcome Back!
          </h1>
          <p className="mt-3 text-[#8a7c60]">
            Ready to unleash your inner artist and guess some breeds?
          </p>
        </div>

        {/* Right: Login form */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-lg font-semibold text-black">Log In</h2>
          <p className="text-sm text-[#8a7c60] mt-2">
            Please enter your details to continue.
          </p>

          <form onSubmit={handleSubmit} className="mt-6">
            <label className="block text-xs text-[#6b6159] mb-2">
              Username or Email
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
                  d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z"
                  fill="#d6d6d6"
                />
                <path
                  d="M4 20c0-4 4-6 8-6s8 2 8 6v1H4v-1z"
                  stroke="#cfcfcf"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <input
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                placeholder="username or email"
                className="flex-1 bg-transparent outline-none text-sm placeholder-gray-400 text-black"
              />
            </div>

            <label className="block text-xs text-[#6b6159] mb-2 mt-4">
              Password
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
                type="password"
                className="flex-1 bg-transparent outline-none text-sm placeholder-gray-400 text-black"
              />
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
                Forgot Password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full mt-6 bg-amber-400 text-white py-3 rounded-full font-semibold text-sm flex items-center justify-center gap-2"
            >
              <span>Log In</span>
            </button>

            <div className="text-center mt-5 text-sm text-gray-300">
              Or continue with
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
            </div>

            <div className="text-center mt-5 text-sm text-[#6b6159]">
              Don't have an account?{" "}
              <Link to="/signup" className="text-[#f6b034] font-semibold">
                Sign Up Free
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
