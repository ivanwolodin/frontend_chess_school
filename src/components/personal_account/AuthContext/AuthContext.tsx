import React, { createContext, useContext, ReactNode, FC } from 'react';

import { decodeToken } from 'react-jwt';
import { useNavigate } from 'react-router-dom';

import ApiService from '../../../api/ApiService';
import {
  AuthContextProps,
  TokenData,
  UserLoginData,
} from '../../../utils/interfaces';

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: FC<{
  children: ReactNode;
  apiService: ApiService;
}> = ({ children, apiService }) => {
  const navigate = useNavigate();

  const login = async (UserLoginData: UserLoginData) => {
    const accessToken = await apiService.sendLoginRequest({
      grant_type: 'password',
      username: UserLoginData.username,
      password: UserLoginData.password,
      scope: '',
      client_id: 'your_client_id',
      client_secret: 'your_client_secret',
    });

    if (!accessToken) {
      console.error('Не удалось получить access token');
      return;
    }

    const decodedToken = decodeToken<TokenData>(accessToken);

    if (decodedToken?.role === 'student') {
      const user_data = await apiService.sendGetMeRequest(accessToken);
      localStorage.setItem('name', user_data.name);
      localStorage.setItem('email', user_data.email);
      localStorage.setItem(
        'attendanceInfo',
        JSON.stringify(user_data.attendanceInfo),
      );
      localStorage.setItem('sumToPay', JSON.stringify(user_data.sumToPay));
      localStorage.setItem('feedback', JSON.stringify(user_data.feedback));
      localStorage.setItem('role', 'student');
    } else if (decodedToken?.role === 'teacher') {
      const user_data = await apiService.sendGetMeRequest(accessToken);
      localStorage.setItem('name', user_data.name);
      localStorage.setItem('email', user_data.email);
      localStorage.setItem(
        'attendanceInfo',
        JSON.stringify(user_data.attendanceInfo),
      );
      localStorage.setItem('groupsName', JSON.stringify(user_data.groupsName));
      localStorage.setItem('role', 'teacher');
    }

    localStorage.setItem('accessToken', accessToken);

    navigate('/personal_account');
  };

  const logout = () => {
    localStorage.clear();
    navigate('/');
  };

  return (
    <AuthContext.Provider value={{ login, logout }}>
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
