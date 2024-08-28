import { Navigate } from 'react-router-dom';

import MainStudentPage from '../StudentPage/MainStudentPage/MainStudentPage';
import MainTeacherPage from '../TeacherPage/MainTeacherPage/MainTeacherPage';

const PrivateWrapper = () => {
  const storedRole = localStorage.getItem('role');
  if (storedRole && storedRole === 'teacher') {
    return <MainTeacherPage />;
  }
  if (storedRole && storedRole === 'student') {
    return <MainStudentPage />;
  }

  return <Navigate to="/" />;
};

export default PrivateWrapper;
