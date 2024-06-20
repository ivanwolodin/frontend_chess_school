// import ManageAttandanceStatistics from '../ManageAttandanceStatistics/ManageAttendanceStatistics';
import { TeachersMenuItems } from '../../../utils/constants';
import SideBar from '../SideBar/SideBar';
import './TeacherPage.css';

const TeacherPage = () => {
  return (
    <>
      <div className="teacherpage__general">
        <SideBar menuItems={TeachersMenuItems} />
      </div>
    </>
  );
};

export default TeacherPage;
