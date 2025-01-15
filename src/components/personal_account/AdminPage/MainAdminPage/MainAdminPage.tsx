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
import EmployeesSalaries from '../EmployeesSalaries/EmployeesSalaries';
import ManageGroups from '../ManageGroups/ManageGroups';
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
  const changeUserPassword = async () => {
    console.log('меняю пароль и мир');
  };
  const [students, setStudents] = useState([
    {
      id: '1',
      name: 'string',
      birthday: 'string',
      group: 'string',
      parent_name: 'string',
      phone: 'string',
      email: 'string',
      admission_date: 'string',
      usual_price: 'string',
      recommended_sum: 0,
      status: { is_student: true },
    },
  ]);
  const [groups, setGroups] = useState([
    {
      name: 'string',
      schedule: 'string',
      teachers: 'string',
      additional_info: 'string',
      students_number: '1',
    },
  ]);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [salaryInfo, setSalaryInfo] = useState([
    {
      employee: 'string',
      groupNumber: '3',
      studentsNumber: '5',
      paid: '1400432',
      debt: '4520',
      salary: '505555',
    },
  ]);
  useEffect(() => {
    const students_data = localStorage.getItem('personalData');
    if (students_data) {
      setStudents(JSON.parse(students_data));
    }
    const salary_info = localStorage.getItem('salaryInfo');
    if (salary_info) {
      const formattedData = JSON.parse(salary_info);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const salary = formattedData.map((item: { toString: () => any }[]) => ({
        employee: item[0],
        groupNumber: item[1].toString(),
        studentsNumber: item[2].toString(),
        paid: item[3].toString(),
        debt: item[4].toString(),
        salary: item[5].toString(),
      }));
      setSalaryInfo(salary);
    }
    const groups_data = localStorage.getItem('groupData');
    if (groups_data) {
      const parsedGroups = JSON.parse(groups_data);

      const formattedGroups = Object.keys(parsedGroups).map((key) => {
        const group = parsedGroups[key];
        return {
          name: key,
          schedule: Object.entries(group.schedule)
            .map(([day, time]) => `${day}: ${time}`)
            .join(', '),
          teachers: group.teacher_names.join(', '),
          additional_info: JSON.stringify(group.additional_info),
          students_number: group.students_number,
        };
      });

      setGroups(formattedGroups);
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
          changeUserPassword={changeUserPassword}
        />
        <div className="adminpagepage__content">
          <AdditionalHorizontalInfoLine
            setToggled={handleSideBarToggle}
            userRole={userRole}
          />
          {selectedItemName === 'Ученики' && (
            <ManageStudentRegistration
              data={students}
              apiService={apiService}
            />
          )}
          {selectedItemName === 'Группы' && <ManageGroups data={groups} />}
          {selectedItemName === 'Зарплаты' && (
            <EmployeesSalaries data={salaryInfo} apiService={apiService} />
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
