import { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import ApiService from '../../../../api/ApiService';
import { TeachersMenuItems } from '../../../../utils/constants';
import {
  ChangeStudentAttendanceData,
  UserRole,
} from '../../../../utils/interfaces';
import { isTokenValid } from '../../../../utils/usefulFunctions';
import AdditionalHorizontalInfoLine from '../../common_comps/AdditionalHorizontalInfoLine/AdditionalHorizontalInfoLine';
import SideBar from '../../common_comps/SideBar/SideBar';
import TeacherPersonalData from '../../common_comps/StudentsPersonalData/TeacherPersonalData';
import PasswordChangePopup from '../../utility_popups/PasswordChangePopup/PasswordChangePopup';
import Dashboard from '../Dashboard/Dashboard';
import ManageAttendance from '../ManageAttendance/ManageAttendance';

import './MainTeacherPage.css';

interface MainTeacherPageProps {
  apiService: ApiService;
  userRole: UserRole;
}

const MainTeacherPage: React.FC<MainTeacherPageProps> = ({
  userRole,
  apiService,
}) => {
  const navigate = useNavigate();
  const [showPasswordChangePopup, setPasswordChangePopup] = useState(false);
  const [selectedItemName, setSelectedItemName] = useState<string | null>(
    'Дэшборд',
  );

  const handleSelectedItemClick = (itemName: string) => {
    setSelectedItemName(itemName);
  };
  const [toggled, setToggled] = useState(false);

  const handleSideBarToggle = () => {
    setToggled(!toggled);
  };
  const changeUserPassword = async () => {
    setPasswordChangePopup(true);
  };

  const changeStudentAttendance = async (data: ChangeStudentAttendanceData) => {
    const accessToken = localStorage.getItem('accessToken');

    if (!isTokenValid(accessToken)) {
      alert('Авторизуйтесь, пожалуйста, заново');
      localStorage.clear();
      navigate('/log_in');
      return false;
    }

    try {
      const attendanceUpdateResponse =
        await apiService.newStudentsAttendanceData(data);

      if (attendanceUpdateResponse.status) {
        const newStudentAttendanceData =
          await apiService.getTeacherData(accessToken);

        if (newStudentAttendanceData && newStudentAttendanceData.group_data) {
          localStorage.setItem(
            'groupData',
            JSON.stringify(newStudentAttendanceData.group_data),
          );
          setAttendanceData(newStudentAttendanceData.group_data);
          return true;
        } else {
          console.error('Некорректные данные посещаемости');
          return false;
        }
      } else {
        console.error('Ошибка при обновлении посещаемости');
        return false;
      }
    } catch (error) {
      console.error('Ошибка при обработке данных', error);
      return false;
    }
  };

  const [students, setStudents] = useState([
    {
      id: '1',
      name: 'string',
      group: 'string',
      parent_name: 'string',
      phone: 'string',
      email: 'string',
      admission_date: 'string',
      usual_price: 'string',
      birthday: 'string',
      parent: 'string',
    },
  ]);

  const [attendanceData, setAttendanceData] = useState({
    АТ: {
      september: [
        {
          ИмяУченика: {
            attended: [1],
            unattended: [2],
            spravka: [3],
          },
        },
      ],
      october: [
        {
          ИмяУченика: {
            attended: [1],
            unattended: [2],
            spravka: [3],
          },
        },
      ],
      november: [
        {
          ИмяУченика: {
            attended: [1],
            unattended: [2],
            spravka: [3],
          },
        },
      ],
      december: [
        {
          ИмяУченика: {
            attended: [1],
            unattended: [2],
            spravka: [3],
          },
        },
      ],
    },
  });

  const [groupsName, setGroupsName] = useState({ АТ1: { september: [12] } });

  useEffect(() => {
    const personalData = localStorage.getItem('personalData');
    if (personalData) {
      setStudents(JSON.parse(personalData));
    }

    const groupData = localStorage.getItem('groupData');
    if (groupData) {
      setAttendanceData(JSON.parse(groupData));
    }
    const groupNames = localStorage.getItem('groupNames');
    if (groupNames) {
      setGroupsName(JSON.parse(groupNames));
    }
  }, []);

  return (
    <div className="teacherpage__general">
      <SideBar
        menuItems={TeachersMenuItems}
        handleElementChoice={handleSelectedItemClick}
        toggled={toggled}
        handleSideBarToggle={handleSideBarToggle}
        changeUserPassword={changeUserPassword}
      />
      <div className="teacherpage__maincontent">
        <AdditionalHorizontalInfoLine
          setToggled={handleSideBarToggle}
          userRole={userRole}
        />
        {selectedItemName === 'Расписание' && (
          <ManageAttendance
            attendanceData={attendanceData}
            groupsInfo={groupsName}
            changeStudentAttendance={changeStudentAttendance}
          />
        )}
        {selectedItemName === 'Дэшборд' && <Dashboard />}
        {selectedItemName === 'Персональные данные' && (
          <TeacherPersonalData data={students} />
        )}
      </div>
      {showPasswordChangePopup && (
        <PasswordChangePopup
          open={showPasswordChangePopup}
          apiService={apiService}
          closeModal={() => setPasswordChangePopup(false)}
        />
      )}
    </div>
  );
};

export default MainTeacherPage;
