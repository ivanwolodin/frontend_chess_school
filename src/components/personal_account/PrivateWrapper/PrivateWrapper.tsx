import { Navigate } from 'react-router-dom';

import { useAuth } from '../AuthContext/AuthContext';

const PrivateWrapper = ({
  children,
  role,
}: {
  children: JSX.Element;
  role: string;
}) => {
  const auth = useAuth();
  const storedRole = localStorage.getItem('role');

  if (role === '' && storedRole) {
    // First to /log_in and on log_in page on mount we sent the user to proper page.
    // Looks okay..
    return <Navigate to="/log_in" replace />;
  }

  if (storedRole) {
    return storedRole === role ? children : <Navigate to="/" />;
  }
  return auth?.user ? children : <Navigate to="/log_in" replace />;
};

export default PrivateWrapper;
