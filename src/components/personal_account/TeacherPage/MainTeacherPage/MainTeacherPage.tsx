import { useState } from 'react';

import { TeachersMenuItems, personalData } from '../../../../utils/constants';
import AdditionalHorizontalInfoLine from '../../common_comps/AdditionalHorizontalInfoLine/AdditionalHorizontalInfoLine';
import SideBar from '../../common_comps/SideBar/SideBar';
import Dashboard from '../Dashboard/Dashboard';
import ManageAttendance from '../ManageAttendance/ManageAttendance';
import ManageHomework from '../ManageHomework/ManageHomework';
import TeacherPersonalData from '../TeacherPersonalData/TeacherPersonalData';

import './MainTeacherPage.css';

const MainTeacherPage = () => {
  const [selectedItemName, setSelectedItemName] = useState<string | null>(
    'Дэшборд',
  );

  const handleSelectedItemClick = (itemName: string) => {
    setSelectedItemName(itemName);
    console.log('Нажато:' + itemName);
  };
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [toggled, setToggled] = useState(true);

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
        <AdditionalHorizontalInfoLine setToggled={handleSideBarToggle} />
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
