import { useState } from 'react';

import { StudentsMenuItems } from '../../../../utils/constants';
import SideBar from '../../common_comps/SideBar/SideBar';
import StudentAttendance from '../StudentAttendance/StudentAttendance';
import StudentPayment from '../StudentPayment/StudentPayment';

import './MainStudentPage.css';

const MainStudentPage = () => {
  const [selectedItemName, setSelectedItemName] = useState<string | null>(
    'Расписание',
  );

  const handleSelectedItemClick = (itemName: string) => {
    setSelectedItemName(itemName);
    console.log('Нажато:' + itemName);
  };

  return (
    <>
      <div className="teacherpage__general">
        <SideBar
          menuItems={StudentsMenuItems}
          handleElementChoice={handleSelectedItemClick}
        />
        {selectedItemName === 'Расписание' && <StudentAttendance />}
        {selectedItemName === 'Оплаты' && <StudentPayment />}
      </div>
    </>
  );
};

export default MainStudentPage;
