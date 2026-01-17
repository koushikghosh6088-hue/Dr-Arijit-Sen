
import React, { useState, useEffect } from 'react';
import { Search, Menu, X, HeartPulse, User, ArrowRight, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_ITEMS } from '../constants';

interface NavbarProps {
  onLoginClick: () => void;
  isLoggedIn: boolean;
  onDashboardClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onLoginClick, isLoggedIn, onDashboardClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check initial theme
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }

    const handleScrollEvent = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScrollEvent);
    return () => window.removeEventListener('scroll', handleScrollEvent);
  }, []);

  const toggleTheme = () => {
    const newDark = !isDark;
    setIsDark(newDark);
    if (newDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement | HTMLDivElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);

    if (href === '#/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);

    if (element) {
      const offset = 90;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
        ? 'py-3 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-b border-white/20 dark:border-slate-800 shadow-[0_8px_32px_rgba(0,0,0,0.05)]'
        : 'py-4 sm:py-6 bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="group flex-shrink-0 flex items-center gap-2 cursor-pointer"
            onClick={(e) => handleScroll(e, '#home')}
          >
            <div className="relative">
              <div className="p-2 sm:p-2.5 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl sm:rounded-2xl shadow-lg group-hover:rotate-12 group-hover:scale-110 transition-all duration-500">
                <HeartPulse className="w-5 h-5 sm:w-6 h-6 text-white" />
              </div>
              <div className="absolute inset-0 bg-blue-400 blur-xl opacity-0 group-hover:opacity-30 transition-opacity"></div>
            </div>
            <span className={`text-lg sm:text-2xl font-black tracking-tighter sm:tracking-tight transition-colors duration-500 ${scrolled ? 'text-slate-900 dark:text-white' : 'text-white'}`}>
              Dr. <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Arijit</span> Sen
            </span>
          </motion.div>

          {/* Nav Links - Desktop */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className={`hidden xl:flex items-center space-x-1 backdrop-blur-md p-1.5 rounded-full border transition-all duration-500 ${scrolled ? 'bg-slate-100/50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700' : 'bg-white/10 border-white/20'}`}
          >
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleScroll(e, item.href)}
                className={`px-4 py-2 text-[10px] font-black rounded-full transition-all duration-300 uppercase tracking-widest ${scrolled
                  ? 'text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-white dark:hover:bg-slate-700 shadow-sm hover:shadow-md'
                  : 'text-blue-50 hover:text-white hover:bg-white/20'
                  }`}
              >
                {item.label}
              </a>
            ))}
          </motion.div>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className={`p-2.5 rounded-xl transition-all duration-500 ${scrolled
                ? 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-blue-600'
                : 'bg-white/10 text-blue-100 hover:text-white'}`}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={isDark ? 'moon' : 'sun'}
                  initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.3 }}
                >
                  {isDark ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
                </motion.div>
              </AnimatePresence>
            </button>

            <button className={`transition-colors duration-500 ${scrolled ? 'text-slate-600 dark:text-slate-400 hover:text-blue-600' : 'text-blue-100 hover:text-white'}`}>
              <Search className="w-5 h-5" />
            </button>

            {isLoggedIn ? (
              <button
                onClick={onDashboardClick}
                className={`flex items-center gap-2 font-black text-[10px] uppercase tracking-widest transition-colors duration-500 ${scrolled ? 'text-slate-900 dark:text-white hover:text-blue-600' : 'text-white hover:text-blue-200'}`}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-500 ${scrolled ? 'bg-blue-100 dark:bg-slate-800' : 'bg-white/20'}`}>
                  <User className={`w-4 h-4 ${scrolled ? 'text-blue-600' : 'text-white'}`} />
                </div>
                Portal
              </button>
            ) : (
              <button
                onClick={onLoginClick}
                className={`font-black text-[10px] tracking-widest uppercase transition-colors duration-500 ${scrolled ? 'text-slate-900 dark:text-white hover:text-blue-600' : 'text-white hover:text-blue-200'}`}
              >
                Sign In
              </button>
            )}

            <a
              href="#appointment"
              onClick={(e) => handleScroll(e, '#appointment')}
              className={`relative group font-black py-3 px-6 rounded-xl transition-all duration-500 overflow-hidden shadow-2xl hover:shadow-blue-500/20 active:scale-95 ${scrolled ? 'bg-slate-900 dark:bg-blue-600 text-white' : 'bg-white text-slate-900'
                }`}
            >
              <div className={`absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ${scrolled ? 'bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-white/10 dark:to-white/20' : 'bg-blue-50'
                }`}></div>
              <span className="relative z-10 text-[8px] sm:text-[9px] uppercase tracking-[0.2em] flex items-center gap-2">
                Book a Visit <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
              </span>
            </a>
          </div>

          {/* Mobile UI */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-xl transition-all duration-500 ${scrolled ? 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400' : 'bg-white/10 text-white'}`}
            >
              {isDark ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2.5 min-w-[48px] min-h-[48px] flex items-center justify-center rounded-xl transition-all shadow-sm ${scrolled ? 'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white' : 'bg-white/20 text-white'}`}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden absolute top-full inset-x-0 bg-white/95 dark:bg-slate-900/95 backdrop-blur-2xl border-t border-slate-100 dark:border-slate-800 shadow-2xl overflow-hidden"
          >
            <div className="p-6 space-y-6">
              <div className="grid grid-cols-2 gap-3">
                {NAV_ITEMS.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleScroll(e, item.href)}
                    className="flex flex-col items-center justify-center p-4 sm:p-5 bg-slate-50 dark:bg-slate-800 rounded-2xl text-[9px] sm:text-[10px] font-black text-slate-900 dark:text-white hover:bg-blue-600 hover:text-white transition-all uppercase tracking-widest text-center"
                  >
                    {item.label}
                  </a>
                ))}
              </div>

              {!isLoggedIn ? (
                <button
                  onClick={() => { setIsOpen(false); onLoginClick(); }}
                  className="w-full flex items-center justify-center gap-3 p-5 bg-slate-100 dark:bg-slate-800 rounded-2xl text-[10px] font-black text-slate-900 dark:text-white uppercase tracking-widest"
                >
                  <User className="w-4 h-4" /> Sign In to Portal
                </button>
              ) : (
                <button
                  onClick={() => { setIsOpen(false); onDashboardClick(); }}
                  className="w-full flex items-center justify-center gap-3 p-5 bg-blue-50 dark:bg-blue-900/20 rounded-2xl text-[10px] font-black text-blue-600 dark:text-blue-400 uppercase tracking-widest"
                >
                  <User className="w-4 h-4" /> Go to Dashboard
                </button>
              )}

              <a
                href="#appointment"
                onClick={(e) => handleScroll(e, '#appointment')}
                className="w-full bg-blue-600 text-white font-black py-4 rounded-2xl flex items-center justify-center gap-3 shadow-xl shadow-blue-500/20 uppercase tracking-widest text-[10px] sm:text-xs"
              >
                Secure Booking <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
