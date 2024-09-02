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
