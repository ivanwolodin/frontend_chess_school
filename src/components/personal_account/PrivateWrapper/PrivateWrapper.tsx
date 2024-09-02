import { Navigate } from 'react-router-dom';

import ApiService from '../../../api/ApiService';
import MainStudentPage from '../StudentPage/MainStudentPage/MainStudentPage';
import MainTeacherPage from '../TeacherPage/MainTeacherPage/MainTeacherPage';

interface PrivateWrapperProps {
  apiService: ApiService;
}

const PrivateWrapper: React.FC<PrivateWrapperProps> = ({ apiService }) => {
  const storedRole = localStorage.getItem('role');
  if (storedRole && storedRole === 'teacher') {
    return <MainTeacherPage />;
  }
  if (storedRole && storedRole === 'student') {
    return <MainStudentPage apiService={apiService} />;
  }

  return <Navigate to="/" />;
};

export default PrivateWrapper;
