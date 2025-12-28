import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import PageProvider from "./components/common/PageProvider";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Leaderboard from "./pages/Leaderboard";
import Profile from "./pages/Profile";
import GameView from "./pages/GameView";
import ResultView from "./pages/ResultView";
import React from "react";

function App() {
  // TODO: replace with real auth state / context
  const isAuthenticated = false;

  function ProtectedRoute({ children }: { children: React.JSX.Element }) {
    return isAuthenticated ? children : <Navigate to="/login" replace />;
  }

  return (
    <PageProvider>
      <BrowserRouter>
        <Routes>
          {/* Public / unauthenticated routes */}
          <Route
            path="/"
            element={
              isAuthenticated ? <Navigate to="/home" replace /> : <Landing />
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* Authenticated routes */}
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/leaderboard"
            element={
              <ProtectedRoute>
                <Leaderboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/game"
            element={
              <ProtectedRoute>
                <GameView />
              </ProtectedRoute>
            }
          />
          <Route
            path="/result"
            element={
              <ProtectedRoute>
                <ResultView />
              </ProtectedRoute>
            }
          />

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </PageProvider>
  );
}

export default App;
