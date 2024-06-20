import { useState } from 'react';

import { TeachersMenuItems } from '../../../utils/constants';
import ManageAttandanceStatistics from '../ManageAttandanceStatistics/ManageAttendanceStatistics';
import SideBar from '../SideBar/SideBar';
import './TeacherPage.css';

const TeacherPage = () => {
  const [selectedItemName, setSelectedItemName] = useState<string | null>(
    'Дэшборд',
  ); // Изначально выбран "Дэшборд"

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
        <div>
          {selectedItemName === 'Расписание' && <ManageAttandanceStatistics />}
          {selectedItemName === 'Дэшборд' && <div>Дэшбоард</div>}
          {selectedItemName === 'Домашние задания' && (
            <div>Домашние задания</div>
          )}
          {selectedItemName === 'Персональные данные' && (
            <div>Персональные данные</div>
          )}
        </div>
      </div>
    </>
  );
};

export default TeacherPage;
