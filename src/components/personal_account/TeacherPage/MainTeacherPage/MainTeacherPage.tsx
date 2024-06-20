import { useState } from 'react';

import { TeachersMenuItems } from '../../../../utils/constants';
import PersonalData from '../../common_comps/PersonalData/PersonalData';
import SideBar from '../../common_comps/SideBar/SideBar';
import Dashboard from '../Dashboard/Dashboard';
import ManageAttendance from '../ManageAttendance/ManageAttendance';
import ManageHomework from '../ManageHomework/ManageHomework';

import './MainTeacherPage.css';

const MainTeacherPage = () => {
  const [selectedItemName, setSelectedItemName] = useState<string | null>(
    'Дэшборд',
  );

  const handleSelectedItemClick = (itemName: string) => {
    setSelectedItemName(itemName);
    console.log('Нажато:' + itemName);
  };

  return (
    <>
      <div className="teacherpage__general">
        <SideBar
          menuItems={TeachersMenuItems}
          handleElementChoice={handleSelectedItemClick}
        />
        {selectedItemName === 'Расписание' && <ManageAttendance />}
        {selectedItemName === 'Дэшборд' && <Dashboard />}
        {selectedItemName === 'Домашние задания' && <ManageHomework />}
        {selectedItemName === 'Персональные данные' && <PersonalData />}
      </div>
    </>
  );
};

export default MainTeacherPage;
