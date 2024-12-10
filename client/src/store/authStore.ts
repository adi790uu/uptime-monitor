import { create } from 'zustand';
import axios from 'axios';
import { AuthState } from '../types/auth';

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  currentView: 'home',

  setView: (view) => set({ currentView: view }),

  login: async (username: string, password: string) => {
    try {
      const response = await axios.post('http://localhost:8000/api/login', {
        username,
        password,
      });
      
      const { token } = response.data;
      localStorage.setItem('token', token);
      
      set({
        user: { username, token },
        isAuthenticated: true,
        currentView: 'dashboard',
      });
    } catch (error) {
      throw error;
    }
  },

  register: async (username: string, password: string) => {
    try {
      const response = await axios.post('http://localhost:8000/api/register', {
        username,
        password,
      });
      
      const { token } = response.data;
      localStorage.setItem('token', token);
      
      set({
        user: { username, token },
        isAuthenticated: true,
        currentView: 'dashboard',
      });
    } catch (error) {
      throw error;
    }
  },

  logout: () => {
    localStorage.removeItem('token');
    set({
      user: null,
      isAuthenticated: false,
      currentView: 'home',
    });
  },
}));