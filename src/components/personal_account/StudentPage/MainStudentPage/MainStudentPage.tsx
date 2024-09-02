import { useEffect, useState } from 'react';

import { useSearchParams } from 'react-router-dom';

import ApiService from '../../../../api/ApiService';
import { StudentsMenuItems } from '../../../../utils/constants';
import Loader from '../../../general/Loader/Loader';
import InfoPopup from '../../../landing/InfoPopup/InfoPopup';
import AdditionalHorizontalInfoLine from '../../common_comps/AdditionalHorizontalInfoLine/AdditionalHorizontalInfoLine';
import SideBar from '../../common_comps/SideBar/SideBar';
import StudentAttendance from '../StudentAttendance/StudentAttendance';
import StudentPayment from '../StudentPayment/StudentPayment';

import './MainStudentPage.css';

interface MainStudentProps {
  apiService: ApiService;
}
const MainStudentPage: React.FC<MainStudentProps> = ({ apiService }) => {
  const [selectedItemName, setSelectedItemName] = useState<string | null>(
    'Расписание',
  );
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [titlePopup, setTitlePopup] = useState('');
  const [textPopup, setTextPopup] = useState('');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSelectedItemClick = (itemName: string) => {
    setSelectedItemName(itemName);
    // console.log('Нажато:' + itemName);
  };
  const [toggled, setToggled] = useState(false);

  const handleSideBarToggle = () => {
    setToggled(!toggled);
  };
  const fetchPaymentStatus = async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const orderId = urlParams.get('order_id');

    if (orderId) {
      setLoading(true);

      try {
        const res = await apiService.validatePaymentStatus(orderId);
        const status = await res.payment_status;
        if (status) {
          setTitlePopup('Успешно');
          setTextPopup('Спасибо за совершенную оплату!');
          setShowPopup(true);
          setLoading(false);
        } else {
          setTitlePopup('Не получилось');
          setTextPopup('Оплата не прошла');
          setShowPopup(true);
          setLoading(false);
        }
      } catch (error) {
        console.error('Error fetching payment status:', error);
        setTitlePopup('Не получилось');
        setTextPopup('Оплата не прошла');
        setShowPopup(true);
        setLoading(false);
      }
    }
    setSearchParams('');
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
        />
        <div className="studentpage__content">
          <AdditionalHorizontalInfoLine setToggled={handleSideBarToggle} />
          {selectedItemName === 'Расписание' && <StudentAttendance />}
          {selectedItemName === 'Оплаты' && (
            <StudentPayment apiService={apiService} />
          )}
        </div>
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

export default MainStudentPage;
