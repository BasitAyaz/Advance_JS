import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { About, Contact, Dashboard, ErrorPage, Home, Profile } from ".";

export default function AppRouter() {
  return (
    <Router>
      <div>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/dashboard/*" element={<Dashboard />} />
          <Route path="/dashboard/*" element={<Dashboard />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </Router>
  );
}
