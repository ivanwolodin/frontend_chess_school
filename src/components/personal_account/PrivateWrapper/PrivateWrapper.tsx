import { Navigate } from 'react-router-dom';

import ApiService from '../../../api/ApiService';
import { UserRole } from '../../../utils/interfaces';
import MainStudentPage from '../StudentPage/MainStudentPage/MainStudentPage';
import MainTeacherPage from '../TeacherPage/MainTeacherPage/MainTeacherPage';

interface PrivateWrapperProps {
  apiService: ApiService;
  userRole: UserRole;
}

const PrivateWrapper: React.FC<PrivateWrapperProps> = ({
  apiService,
  userRole,
}) => {
  if (userRole.role === 'teacher') {
    return <MainTeacherPage apiService={apiService} userRole={userRole} />;
  }
  if (userRole.role === 'student') {
    return <MainStudentPage apiService={apiService} userRole={userRole} />;
  }

  return <Navigate to="/" />;
};

export default PrivateWrapper;
