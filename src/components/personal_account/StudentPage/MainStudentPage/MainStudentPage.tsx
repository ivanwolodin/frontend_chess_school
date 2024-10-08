import { useEffect, useState } from 'react';

import { useSearchParams, useNavigate } from 'react-router-dom';

import ApiService from '../../../../api/ApiService';
import { StudentsMenuItems } from '../../../../utils/constants';
import { UserRole } from '../../../../utils/interfaces';
import {
  isTokenValid,
  saveUserDataToLocalStorage,
} from '../../../../utils/usefulFunctions';
import Loader from '../../../general/Loader/Loader';
import InfoPopup from '../../../landing/InfoPopup/InfoPopup';
import AdditionalHorizontalInfoLine from '../../common_comps/AdditionalHorizontalInfoLine/AdditionalHorizontalInfoLine';
import SideBar from '../../common_comps/SideBar/SideBar';
import PasswordChangePopup from '../../utility_popups/PasswordChangePopup/PasswordChangePopup';
import StudentAttendance from '../StudentAttendance/StudentAttendance';
import StudentPayment from '../StudentPayment/StudentPayment';

import './MainStudentPage.css';

interface MainStudentProps {
  apiService: ApiService;
  userRole: UserRole;
}
const MainStudentPage: React.FC<MainStudentProps> = ({
  apiService,
  userRole,
}) => {
  const [selectedItemName, setSelectedItemName] = useState<string | null>(
    'Расписание',
  );
  const [loading, setLoading] = useState(false);
  const [showInfoPopup, setShowInfoPopup] = useState(false);
  const [titlePopup, setTitlePopup] = useState('');
  const [textPopup, setTextPopup] = useState('');

  const [showPasswordChangePopup, setPasswordChangePopup] = useState(false);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const handleSelectedItemClick = (itemName: string) => {
    setSelectedItemName(itemName);
    // console.log('Нажато:' + itemName);
  };
  const [toggled, setToggled] = useState(false);

  const handleSideBarToggle = () => {
    setToggled(!toggled);
  };

  const changeUserPassword = () => {
    setPasswordChangePopup(true);
  };

  const fetchPaymentStatus = async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const orderId = urlParams.get('order_id');
    const accessToken = localStorage.getItem('accessToken');

    if (isTokenValid(accessToken)) {
      if (orderId) {
        setLoading(true);

        try {
          const res = await apiService.validatePaymentStatus(orderId);
          const status = await res.payment_status;
          if (status) {
            setTitlePopup('Успешно');
            setTextPopup('Спасибо за совершенную оплату!');
            const user_data = await apiService.getStudentData(accessToken);
            saveUserDataToLocalStorage(user_data);
            setShowInfoPopup(true);
            setLoading(false);
          } else {
            setTitlePopup('Не получилось');
            setTextPopup('Оплата не прошла');
            setShowInfoPopup(true);
            setLoading(false);
          }
        } catch (error) {
          console.error('Error fetching payment status:', error);
          setTitlePopup('Не получилось');
          setTextPopup('Оплата не прошла');
          setShowInfoPopup(true);
          setLoading(false);
        }
      }
      setSearchParams('');
    } else {
      alert('Авторизуйтесь, пожалуйста, заново');
      localStorage.clear();
      navigate('/log_in');
    }
  };

  useEffect(() => {
    fetchPaymentStatus();
  }, []);

  return (
    <>
      <div className="studentpage__general">
        <SideBar
          menuItems={StudentsMenuItems}
          handleElementChoice={handleSelectedItemClick}
          toggled={toggled}
          handleSideBarToggle={handleSideBarToggle}
          changeUserPassword={changeUserPassword}
        />
        <div className="studentpage__content">
          <AdditionalHorizontalInfoLine
            setToggled={handleSideBarToggle}
            userRole={userRole}
          />
          {selectedItemName === 'Расписание' && <StudentAttendance />}
          {selectedItemName === 'Оплаты' && (
            <StudentPayment apiService={apiService} />
          )}
        </div>
        {loading && <Loader />}
        {showInfoPopup && (
          <InfoPopup
            onClose={() => setShowInfoPopup(false)}
            title={titlePopup}
            text={textPopup}
          />
        )}
        {showPasswordChangePopup && (
          <PasswordChangePopup
            open={showPasswordChangePopup}
            apiService={apiService}
            closeModal={() => setPasswordChangePopup(false)}
          />
        )}
      </div>
    </>
  );
};

export default MainStudentPage;
