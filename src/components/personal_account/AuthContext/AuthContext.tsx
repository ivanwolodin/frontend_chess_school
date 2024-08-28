import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  FC,
} from 'react';

import { isExpired, decodeToken } from 'react-jwt';
import { useNavigate } from 'react-router-dom';

// TODO: two more interfaces
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
    // Here will be an API request
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

    // teacher
    // const token =
    //   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoidGVhY2hlciIsIm5hbWUiOiJcdTA0MjNcdTA0NDdcdTA0MzhcdTA0NDJcdTA0MzVcdTA0M2JcdTA0NGMgXHUwNDIzXHUwNDQ3XHUwNDM4XHUwNDQyXHUwNDM1XHUwNDNiXHUwNDRjIn0.zeU2aqXETsiiL7bmtN9XU11mrvy-TxGxROF_QyyEYDk';
    // student
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoic3R1ZGVudCIsIm5hbWUiOiJcdTA0MjFcdTA0NDJcdTA0NDNcdTA0MzRcdTA0MzVcdTA0M2RcdTA0NDIgXHUwNDIxXHUwNDQyXHUwNDQzXHUwNDM0XHUwNDM1XHUwNDNkXHUwNDQyIn0.FmbykkEIFWnEFw4uv8YBCsau2mJhTlar2GH-S4dT3OM';
    const myDecodedToken = decodeToken(token);
    const isMyTokenExpired = isExpired(token);
    console.log(myDecodedToken);
    console.log(isMyTokenExpired);
    localStorage.setItem('role', userData.name);

    if (userData.role === 'student') {
      navigate('/personal_account');
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
