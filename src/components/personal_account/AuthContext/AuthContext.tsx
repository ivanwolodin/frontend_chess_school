import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  FC,
} from 'react';

import { useNavigate } from 'react-router-dom';

interface User {
  // Define the user object shape according to your needs
  name: string;
  password: string;
  role: string;
}

interface AuthContextProps {
  user: User | null;
  login: (userData: User) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  const login = (userData: User) => {
    setUser(userData);
    localStorage.setItem('role', userData.role);
    if (userData.role === 'student') {
      navigate('/student');
    }
    if (userData.role === 'teacher') {
      navigate('/teacher');
    }
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextProps => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
