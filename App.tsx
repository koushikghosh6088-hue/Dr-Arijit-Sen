
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Qualifications from './components/Qualifications';
import Blog from './components/Blog';
import AppointmentForm from './components/AppointmentForm';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [showLogin, setShowLogin] = useState(false);
  const [view, setView] = useState<'landing' | 'dashboard'>('landing');

  const handleLogin = (email: string) => {
    setUserEmail(email);
    setIsLoggedIn(true);
    setShowLogin(false);
    setView('dashboard');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserEmail('');
    setView('landing');
  };

  if (view === 'dashboard') {
    return <Dashboard userEmail={userEmail} onLogout={handleLogout} />;
  }

  return (
    <div className="min-h-screen bg-slate-50 selection:bg-blue-600 selection:text-white relative">
      <Navbar
        onLoginClick={() => setShowLogin(true)}
        isLoggedIn={isLoggedIn}
        onDashboardClick={() => setView('dashboard')}
      />

      {showLogin && (
        <Login
          onLogin={handleLogin}
          onCancel={() => setShowLogin(false)}
        />
      )}

      <main className="relative">
        <div id="home">
          <Hero />
        </div>

        <div id="about">
          <About />
        </div>

        <div id="services">
          <Services />
        </div>

        <div id="qualifications">
          <Qualifications />
        </div>

        <div id="appointment">
          <AppointmentForm />
        </div>

        <Testimonials />

        <section className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-[#0f172a] rounded-[2rem] sm:rounded-[3rem] p-8 sm:p-16 text-center text-white space-y-6 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <path d="M0,0 Q50,50 100,0 T100,100 Q50,50 0,100 Z" fill="white" />
                </svg>
              </div>
              <h2 className="text-2xl sm:text-4xl font-black relative z-10">Ready to improve your health?</h2>
              <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto relative z-10">Dr. Arijit provides expert consultation and personalized care plans for chronic disease management.</p>
              <div className="pt-4 relative z-10">
                <a href="#appointment" className="inline-block bg-[#d9f99d] text-slate-900 font-black py-5 px-10 rounded-2xl shadow-xl hover:scale-105 transition-transform">
                  GET STARTED NOW
                </a>
              </div>
            </div>
          </div>
        </section>

        <div id="blog">
          <Blog />
        </div>
      </main>

      <div id="footer">
        <Footer />
      </div>

      <ScrollToTop />
    </div>
  );
}

export default App;
