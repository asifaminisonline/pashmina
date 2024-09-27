import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import TopNavbar from "./components/Navbar";
import TapeForm from "./components/TapeForm";

function App() {
  return (
    <Router>
      <TopNavbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add-design" element={<TapeForm />} />
      </Routes>
    </Router>
  );
}

export default App;
