// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useEffect, useState } from 'react';

// import { useSearchParams, useNavigate } from 'react-router-dom';

import ApiService from '../../../../api/ApiService';
import { SuperAdminMenuItems } from '../../../../utils/constants';
import { UserRole } from '../../../../utils/interfaces';
import Loader from '../../../general/Loader/Loader';
import InfoPopup from '../../../landing/InfoPopup/InfoPopup';
import AdditionalHorizontalInfoLine from '../../common_comps/AdditionalHorizontalInfoLine/AdditionalHorizontalInfoLine';
import SideBar from '../../common_comps/SideBar/SideBar';
import ManageStudentRegistration from '../ManageStudentRegistration/ManageStudentRegistration';

import './MainAdminPage.css';

interface MainAdminProps {
  apiService: ApiService;
  userRole: UserRole;
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const MainAdminPage: React.FC<MainAdminProps> = ({ apiService, userRole }) => {
  const [toggled, setToggled] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [titlePopup, setTitlePopup] = useState('');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [textPopup, setTextPopup] = useState('');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [selectedItemName, setSelectedItemName] = useState<string | null>(
    'Ученики',
  );
  const handleSelectedItemClick = (itemName: string) => {
    setSelectedItemName(itemName);
    // console.log('Нажато:' + itemName);
  };
  const handleSideBarToggle = () => {
    setToggled(!toggled);
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
    },
  ]);
  useEffect(() => {
    const students_data = localStorage.getItem('personalData');
    if (students_data) {
      setStudents(JSON.parse(students_data));
    }
  }, []);

  return (
    <>
      <div className="adminpage__general">
        <SideBar
          menuItems={SuperAdminMenuItems}
          handleElementChoice={handleSelectedItemClick}
          toggled={toggled}
          handleSideBarToggle={handleSideBarToggle}
        />
        <div className="adminpagepage__content">
          <AdditionalHorizontalInfoLine
            setToggled={handleSideBarToggle}
            userRole={userRole}
          />
          {selectedItemName === 'Ученики' && (
            <ManageStudentRegistration data={students} />
          )}
        </div>
        {/* {selectedItemName === 'Оплаты' && <ManageAttendance />} */}
        {/* {selectedItemName === 'Занести ученика' && <Dashboard />} */}
        {loading && <Loader />}
        {showPopup && (
          <InfoPopup
            onClose={() => setShowPopup(false)}
            title={titlePopup}
            text={textPopup}
          />
        )}
      </div>
    </>
  );
};

export default MainAdminPage;
