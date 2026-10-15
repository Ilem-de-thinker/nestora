import React, { createContext, useContext, useState, useEffect } from 'react';
import { INITIAL_STUDENT_DASHBOARD, StudentDashboardData } from '../data/studentDashboard';

interface User {
  name: string;
  email: string;
  avatarInitials: string;
  studentId: string;
  cohort: string;
  programTitle: string;
  programSlug: string;
  track: string;
  overallProgress: number;
}

interface AuthContextType {
  isAuthenticated: boolean;
  user: User | null;
  dashboardData: StudentDashboardData;
  login: (email: string, password?: string) => Promise<boolean>;
  loginAsDemoFellow: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const STORAGE_KEY = 'nestora_auth_user';

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch {
      // ignore
    }
    // Default to demo fellow for seamless demo experience
    return INITIAL_STUDENT_DASHBOARD.user;
  });

  const [dashboardData] = useState<StudentDashboardData>(INITIAL_STUDENT_DASHBOARD);

  useEffect(() => {
    if (user) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
    } else {
      localStorage.removeItem(STORAGE_KEY);
    }
  }, [user]);

  const login = async (email: string): Promise<boolean> => {
    // Simulated auth delay
    await new Promise((res) => setTimeout(res, 400));
    const newUser: User = {
      name: email.split('@')[0].replace('.', ' ').replace(/^./, (s) => s.toUpperCase()),
      email,
      avatarInitials: email.slice(0, 2).toUpperCase(),
      studentId: 'NST-2026-F' + Math.floor(1000 + Math.random() * 9000),
      cohort: 'Fellowship Cohort 04 · Autumn 2026',
      programTitle: 'The Nestora Impact Fellowship',
      programSlug: 'scholarship',
      track: 'Full-Stack Software Engineering',
      overallProgress: 45,
    };
    setUser(newUser);
    return true;
  };

  const loginAsDemoFellow = () => {
    setUser(INITIAL_STUDENT_DASHBOARD.user);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: !!user,
        user,
        dashboardData,
        login,
        loginAsDemoFellow,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
