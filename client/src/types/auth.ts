export interface User {
  username: string;
  token?: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  currentView: 'home' | 'login' | 'register' | 'dashboard';
  setView: (view: 'home' | 'login' | 'register' | 'dashboard') => void;
  login: (username: string, password: string) => Promise<void>;
  register: (username: string, password: string) => Promise<void>;
  logout: () => void;
}