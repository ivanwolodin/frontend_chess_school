import { decodeToken } from 'react-jwt';

import { TokenData } from './interfaces';

export const isTokenValid = (accessToken: string | null): boolean => {
  if (!accessToken) {
    console.log('No access token found.');
    return false;
  }

  const decodedToken = decodeToken<TokenData>(accessToken);
  const expTimestamp = decodedToken?.exp;
  const currentTime = Math.floor(Date.now() / 1000);

  if (expTimestamp && Number(expTimestamp) > currentTime) {
    return true;
  } else {
    console.log('Token has expired.');
    return false;
  }
};

interface UserData {
  name: string;
  email?: string;
  attendance_info: [];
  sum_to_pay: number;
  feedback: [];
  payments: [];
}

export const saveUserDataToLocalStorage = (user_data: UserData) => {
  localStorage.setItem('name', user_data.name);
  // localStorage.setItem('email', user_data.email); // Если нужно, раскомментируйте эту строку
  localStorage.setItem(
    'attendanceInfo',
    JSON.stringify(user_data.attendance_info),
  );
  localStorage.setItem('sumToPay', JSON.stringify(user_data.sum_to_pay));
  localStorage.setItem('feedback', JSON.stringify(user_data.feedback));
  localStorage.setItem('payments', JSON.stringify(user_data.payments));
  localStorage.setItem('role', 'student');
};
