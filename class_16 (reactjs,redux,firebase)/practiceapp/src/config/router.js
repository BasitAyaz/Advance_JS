import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "../screens/About";
import DataFile from "../screens/DataFile";
import Home from "../screens/Home";

function AppRouter() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about/*" element={<About />} />
          <Route path="/data" element={<DataFile />} />
        </Routes>
      </Router>
    </>
  );
}
export default AppRouter;
