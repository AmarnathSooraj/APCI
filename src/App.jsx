import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
function AppContent() {
  const location = useLocation();

  if (location.pathname !== "/") {
    return (
      <div className="coming-soon">
        <h1>Coming Soon</h1>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <Home />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<AppContent />} />
      </Routes>
    </Router>
  );
}

export default App;