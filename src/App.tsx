import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Shopping from './pages/Shopping';
import Items from './pages/Items';
import Terms from './pages/Terms';
import Contact from './pages/Contact';
import Features from './pages/Features';
import Projects from './pages/Projects';
import Team from './pages/Team';
import Testimonials from './pages/Testimonials';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/shopping" element={<Shopping />} />
            <Route path="/items" element={<Items />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/features" element={<Features />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/team" element={<Team />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;