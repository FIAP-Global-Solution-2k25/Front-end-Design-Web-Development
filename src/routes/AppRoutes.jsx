// src/routes/AppRoutes.jsx
import { Routes, Route } from "react-router-dom";
import UserLayout from "../layouts/UserLayout.jsx";
import Home from "../pages/Home.jsx";
import About from "../pages/About.jsx";
import Download from "../pages/Download.jsx";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<UserLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/download" element={<Download />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  );
}
