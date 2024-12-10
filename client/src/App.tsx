import React from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/home/Hero';
import Features from './components/home/Features';
import LoginForm from './components/auth/LoginForm';
import RegisterForm from './components/auth/RegisterForm';
import Dashboard from './components/dashboard/Dashboard';
import {useAuthStore}from './store/authStore';
import useThemeStore from './store/themeStore';

function App() {
  const { isAuthenticated, currentView } = useAuthStore();
  const isDarkMode = useThemeStore((state) => state.isDarkMode);

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark bg-gray-900' : 'bg-white'}`}>
      <Navbar />
      <main>
        {currentView === 'login' && !isAuthenticated && <LoginForm />}
        {currentView === 'register' && !isAuthenticated && <RegisterForm />}
        {currentView === 'dashboard' && isAuthenticated && <Dashboard />}
        {currentView === 'home' && (
          <>
            <Hero />
            <Features />
          </>
        )}
      </main>
    </div>
  );
}

export default App;