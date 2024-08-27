import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  FC,
} from 'react';

import { useNavigate } from 'react-router-dom';

// добавить два интерфейса. Один - для студента, другой - для преподавателя
interface User {
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
    // здесь сделать запрос к АПИ
    // userData = axios(volodin.site/auth/login)
    // if userData{
    //   localStorage.setItem('access_token', userData.access_token)
    //   if (userData.role === student){
    //      userInfo<student> = userData
    //      localStorage.setItem('name', userData.name)
    //      localStorage.setItem('email', userData.email)
    //      localStorage.setItem('sumToPay', userData.sum_to_pay)
    //      localStorage.setItem('attendanceInfo', userData.attendance_info)
    //      localStorage.setItem('feedback', userData.feddback)
    //   }
    //   if (userData..role === teacher){
    //      userInfo<teacher> = userData
    //      localStorage.setItem('name', userData.name)
    //      localStorage.setItem('email', userData.email)
    //      localStorage.setItem('groupsName', userData.groups_name)
    //      localStorage.setItem('attendanceInfo', userData.attendance_info)
    //   }
    // }
    setUser(userData);
    localStorage.setItem('role', userData.name);
    if (userData.role === 'student') {
      navigate('/student');
    }
    if (userData.role === 'teacher') {
      navigate('/teacher');
    }
  };

  const logout = () => {
    localStorage.removeItem('role');
    navigate('/');
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
