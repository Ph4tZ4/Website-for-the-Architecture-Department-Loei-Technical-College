import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Curriculum from './pages/Curriculum';
import Staff from './pages/Staff';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Admissions from './pages/Admissions';
import Activities from './pages/Activities';

function App() {
  return (
    <Router>
      <div className="app-container" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Navbar />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/curriculum" element={<Curriculum />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/staff" element={<Staff />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
