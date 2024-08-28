import React, { createContext, useContext, ReactNode, FC } from 'react';

import { decodeToken } from 'react-jwt';
import { useNavigate } from 'react-router-dom';

import {
  AuthContextProps,
  TokenData,
  UserLoginData,
} from '../../../utils/interfaces';

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const navigate = useNavigate();

  const login = (UserLoginData: UserLoginData) => {
    // Here will be an API request
    // userData = axios(volodin.site/auth/login)

    console.log(UserLoginData.username);

    // teacher
    // const token =
    //   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiXHUwNDIyXHUwNDQwXHUwNDM1XHUwNDNkXHUwNDM1XHUwNDQwIFx1MDQyMlx1MDQ0MFx1MDQzNVx1MDQzZFx1MDQzNVx1MDQ0MCIsImVtYWlsIjoiamFuZXNtaXRoQGV4YW1wbGUuY29tIiwiYXR0ZW5kYW5jZURhdGEiOnsiYXR0ZW5kZWQiOlsyMCwyMl0sInNwcmF2a2EiOlsyXSwidW5hdHRlbmRlZCI6WzFdfSwiZ3JvdXBzTmFtZSI6WyJHcm91cCBBIiwiR3JvdXAgQiJdLCJyb2xlIjoidGVhY2hlciIsImV4cCI6MTcyNDg3OTY0MX0.LQCP8Z3K7mLuH-azQYSZwVOBAqF62toV0yMIMs2DZM0';
    // student
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiXHUwNDIxXHUwNDQyXHUwNDQzXHUwNDM0XHUwNDM1XHUwNDNkXHUwNDQyIFx1MDQyMVx1MDQ0Mlx1MDQ0M1x1MDQzNFx1MDQzNVx1MDQzZFx1MDQ0MiIsImVtYWlsIjoiam9obmRvZUBleGFtcGxlLmNvbSIsInN1bVRvUGF5Ijo1MDAwLCJhdHRlbmRhbmNlSW5mbyI6eyJhdHRlbmRlZCI6WzIwLDIyXSwic3ByYXZrYSI6WzJdLCJ1bmF0dGVuZGVkIjpbMV19LCJmZWVkYmFjayI6WyJHcmVhdCBwcm9ncmVzcyEiLCJOZWVkcyBpbXByb3ZlbWVudCBpbiBNYXRoIl0sInJvbGUiOiJzdHVkZW50IiwiZXhwIjoxNzI0ODc5NjQxfQ.u0eGf2p8P0rNV4ir0K-dBWUJmEV3_mtCGsT1kdg30Us';
    const decodedToken = decodeToken<TokenData>(token);

    if (decodedToken?.role === 'student') {
      localStorage.setItem('name', decodedToken.name);
      localStorage.setItem('email', decodedToken.email);
      localStorage.setItem(
        'attendanceInfo',
        JSON.stringify(decodedToken.attendanceInfo),
      );
      localStorage.setItem('sumToPay', JSON.stringify(decodedToken.sumToPay));
      localStorage.setItem('feedback', JSON.stringify(decodedToken.feedback));
      localStorage.setItem('role', 'student');
    } else if (decodedToken?.role === 'teacher') {
      localStorage.setItem('name', decodedToken.name);
      localStorage.setItem('email', decodedToken.email);
      localStorage.setItem(
        'attendanceInfo',
        JSON.stringify(decodedToken.attendanceInfo),
      );
      localStorage.setItem(
        'groupsName',
        JSON.stringify(decodedToken.groupsName),
      );
      localStorage.setItem('role', 'teacher');
    }
    localStorage.setItem('accessToken', token);
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
