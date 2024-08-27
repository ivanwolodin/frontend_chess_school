import { Navigate } from 'react-router-dom';

import { useAuth } from '../AuthContext/AuthContext';

const PrivateWrapper = ({ children }: { children: JSX.Element }) => {
  const auth = useAuth();
  const storedRole = localStorage.getItem('role');
  if (storedRole) {
    return storedRole ? children : <Navigate to="/" />;
  }
  return auth?.user ? children : <Navigate to="/log_in" replace />;
};

export default PrivateWrapper;
