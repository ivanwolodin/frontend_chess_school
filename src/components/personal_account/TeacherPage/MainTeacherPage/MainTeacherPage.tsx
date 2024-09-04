import { useState } from 'react';

import ApiService from '../../../../api/ApiService';
import { TeachersMenuItems, personalData } from '../../../../utils/constants';
import { UserRole } from '../../../../utils/interfaces';
import AdditionalHorizontalInfoLine from '../../common_comps/AdditionalHorizontalInfoLine/AdditionalHorizontalInfoLine';
import SideBar from '../../common_comps/SideBar/SideBar';
import Dashboard from '../Dashboard/Dashboard';
import ManageAttendance from '../ManageAttendance/ManageAttendance';
import ManageHomework from '../ManageHomework/ManageHomework';
import TeacherPersonalData from '../TeacherPersonalData/TeacherPersonalData';

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
    // console.log('Нажато:' + itemName);
  };
  const [toggled, setToggled] = useState(false);

  const handleSideBarToggle = () => {
    setToggled(!toggled);
  };
  return (
    <div className="teacherpage__general">
      <SideBar
        menuItems={TeachersMenuItems}
        handleElementChoice={handleSelectedItemClick}
        toggled={toggled}
        handleSideBarToggle={handleSideBarToggle}
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
