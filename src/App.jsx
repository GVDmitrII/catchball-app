import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { CookieBanner } from './components/ui/CookieBanner';
import { Home } from './pages/Home';
import { Clubs } from './pages/Clubs';
import { Rules } from './pages/Rules';
import { Events } from './pages/Events';
import { Standings } from './pages/Standings';
import Privacy from './pages/Privacy';

function App() {
  return (
    <Router>
      <CookieBanner />
      <div className="min-h-screen flex flex-col bg-white">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/clubs" element={<Clubs />} />
            <Route path="/rules" element={<Rules />} />
            <Route path="/events" element={<Events />} />
            <Route path="/standings" element={<Standings />} />
            <Route path="/privacy" element={<Privacy />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
