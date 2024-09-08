import { useState } from 'react';

import ApiService from '../../../../api/ApiService';
import { TeachersMenuItems, personalData } from '../../../../utils/constants';
import { UserRole } from '../../../../utils/interfaces';
import AdditionalHorizontalInfoLine from '../../common_comps/AdditionalHorizontalInfoLine/AdditionalHorizontalInfoLine';
import SideBar from '../../common_comps/SideBar/SideBar';
import TeacherPersonalData from '../../common_comps/StudentsPersonalData/TeacherPersonalData';
import Dashboard from '../Dashboard/Dashboard';
import ManageAttendance from '../ManageAttendance/ManageAttendance';
import ManageHomework from '../ManageHomework/ManageHomework';

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
        {selectedItemName === 'Расписание' && <ManageAttendance />}
        {selectedItemName === 'Дэшборд' && <Dashboard />}
        {selectedItemName === 'Домашние задания' && <ManageHomework />}
        {selectedItemName === 'Персональные данные' && (
          <TeacherPersonalData data={personalData} />
        )}
      </div>
    </div>
  );
};

export default MainTeacherPage;
