import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import About from './Components/About/About';
import Committee from './Components/Committee/Committee';
import Contact from "./Components/Contactus/Contact";
import Speakers from "./Components/Speakers/Speakers";
import Events from "./Components/Events/Events";
import Registration from "./Components/Registration/Registration";


function AppContent() {
  const location = useLocation();

  return (
    <>
      {location.pathname === "/" ? <Home /> : <h1 className="coming-soon">Coming Soon</h1>}
    </>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<AppContent />} />
        <Route path="/about" element={<About />} />
        <Route path="/committee" element={<Committee />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/speakers" element={<Speakers />} />
        <Route path="/speakers" element={<Speakers />} />
        <Route path="/events" element={<Events />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="*" element={<h1 className="coming-soon">Coming Soon</h1>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
