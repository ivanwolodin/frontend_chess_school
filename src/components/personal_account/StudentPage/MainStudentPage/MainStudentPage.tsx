import { useState } from 'react';

import { StudentsMenuItems } from '../../../../utils/constants';
import AdditionalHorizontalInfoLine from '../../common_comps/AdditionalHorizontalInfoLine/AdditionalHorizontalInfoLine';
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
      <div className="studentpage__general">
        <SideBar
          menuItems={StudentsMenuItems}
          handleElementChoice={handleSelectedItemClick}
        />
        <div className="studentpage__content">
          <AdditionalHorizontalInfoLine />
          {selectedItemName === 'Расписание' && <StudentAttendance />}
          {selectedItemName === 'Оплаты' && <StudentPayment />}
        </div>
      </div>
    </>
  );
};

export default MainStudentPage;
