import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import TopNavbar from './components/Navbar';
import TapeForm from './components/TapeForm';

function App() {
  return (
    <Router>
      <TopNavbar />
      <TapeForm />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
