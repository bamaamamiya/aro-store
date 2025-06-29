import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";
import LandingPage from "./components/LandingPage/LandingPage";
import LeadsDashboard from "./components/dashboard/LeadsDashboard";

import LoginPage from "./components/dashboard/LoginPage";
import Dashboard from "./components/dashboard/DashBoard";
import PrivateRoute from "./components/dashboard/PrivateRoute";
import CctvBohlam from "./components/Cctv/LandingPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CctvBohlam />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <LeadsDashboard />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
