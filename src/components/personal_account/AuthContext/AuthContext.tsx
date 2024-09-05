import React, { createContext, useContext, ReactNode, FC } from 'react';

import { decodeToken } from 'react-jwt';
import { useNavigate } from 'react-router-dom';

import ApiService from '../../../api/ApiService';
import {
  AuthContextProps,
  TokenData,
  UserLoginData,
  UserRole,
} from '../../../utils/interfaces';
import { saveUserDataToLocalStorage } from '../../../utils/usefulFunctions';

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: FC<{
  children: ReactNode;
  apiService: ApiService;
  handleUSerRole: (role: UserRole) => void;
}> = ({ children, apiService, handleUSerRole }) => {
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
      return;
    }

    const decodedToken = decodeToken<TokenData>(accessToken);
    if (decodedToken?.role === 'student') {
      const userData = await apiService.sendGetStudentRequest(accessToken);
      saveUserDataToLocalStorage(userData);
      handleUSerRole({ role: 'student' });
    } else if (decodedToken?.role === 'teacher') {
      const userData = await apiService.sendGetStudentRequest(accessToken);
      handleUSerRole({ role: 'teacher' });
      localStorage.setItem('name', userData.name);
      // localStorage.setItem('email', user_data.email);
      localStorage.setItem(
        'attendanceInfo',
        JSON.stringify(userData.attendance_info),
      );

      localStorage.setItem('groupsName', JSON.stringify(userData.groupsName));
      localStorage.setItem('role', 'teacher');
    } else if (decodedToken?.role === 'admin') {
      const userData = await apiService.sendGetAdminData(accessToken);
      console.log(userData);
      handleUSerRole({ role: 'admin' });
      localStorage.setItem('name', decodedToken.name);
      localStorage.setItem('groupsName', JSON.stringify(userData.groups));
      localStorage.setItem('personalData', JSON.stringify(userData.students));

      localStorage.setItem('accessToken', accessToken);

      navigate('/personal_account');
    }
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
