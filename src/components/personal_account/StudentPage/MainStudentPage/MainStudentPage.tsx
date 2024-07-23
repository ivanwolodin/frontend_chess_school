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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [toggled, setToggled] = useState(true);

  const handleSideBarToggle = () => {
    setToggled(!toggled);
  };

  return (
    <>
      <div className="studentpage__general">
        <SideBar
          menuItems={StudentsMenuItems}
          handleElementChoice={handleSelectedItemClick}
          toggled={toggled}
          handleSideBarToggle={handleSideBarToggle}
        />
        <div className="studentpage__content">
          <AdditionalHorizontalInfoLine setToggled={handleSideBarToggle} />
          {selectedItemName === 'Расписание' && <StudentAttendance />}
          {selectedItemName === 'Оплаты' && <StudentPayment />}
        </div>
      </div>
    </>
  );
};

export default MainStudentPage;
