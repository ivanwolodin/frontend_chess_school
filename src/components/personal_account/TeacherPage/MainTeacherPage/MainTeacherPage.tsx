import { useEffect, useState } from 'react';

import ApiService from '../../../../api/ApiService';
import { TeachersMenuItems } from '../../../../utils/constants';
import { UserRole } from '../../../../utils/interfaces';
import AdditionalHorizontalInfoLine from '../../common_comps/AdditionalHorizontalInfoLine/AdditionalHorizontalInfoLine';
import SideBar from '../../common_comps/SideBar/SideBar';
import TeacherPersonalData from '../../common_comps/StudentsPersonalData/TeacherPersonalData';
import Dashboard from '../Dashboard/Dashboard';
import ManageAttendance from '../ManageAttendance/ManageAttendance';

import './MainTeacherPage.css';

interface MainTeacherPageProps {
  apiService: ApiService;
  userRole: UserRole;
}

const MainTeacherPage: React.FC<MainTeacherPageProps> = ({ userRole }) => {
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
    console.log('меняю пароль и мир');
  };
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [attendanceData, setAttendanceData] = useState({
    АТ: {
      september: [
        {
          Тестовый: {
            attended: [1],
            unattended: [2],
            spravka: [3],
          },
        },
      ],
      october: [
        {
          Тестовый: {
            attended: [1],
            unattended: [2],
            spravka: [3],
          },
        },
      ],
      november: [
        {
          Тестовый: {
            attended: [1],
            unattended: [2],
            spravka: [3],
          },
        },
      ],
      december: [
        {
          Тестовый: {
            attended: [1],
            unattended: [2],
            spravka: [3],
          },
        },
      ],
    },
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
          />
        )}
        {selectedItemName === 'Дэшборд' && <Dashboard />}
        {selectedItemName === 'Персональные данные' && (
          <TeacherPersonalData data={students} />
        )}
      </div>
    </div>
  );
};

export default MainTeacherPage;
