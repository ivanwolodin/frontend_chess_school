import { useEffect, useState } from 'react';

import { useNavigate, useSearchParams } from 'react-router-dom';

import ApiService from '../../../api/ApiService';
import Loader from '../../general/Loader/Loader';
import InfoPopup from '../InfoPopup/InfoPopup';

interface PasswordResetProps {
  apiService: ApiService;
}

const PasswordReset: React.FC<PasswordResetProps> = ({ apiService }) => {
  const [searchParams] = useSearchParams();
  const [showPopup, setShowPopup] = useState(false);
  const [titlePopup, setTitlePopup] = useState('');
  const [textPopup, setTextPopup] = useState('');
  const [loading, setLoading] = useState(false);

  const resetLink = searchParams.get('link');

  const navigate = useNavigate();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handlePopup = (title: string, text: string, redirectPath: string) => {
    setTitlePopup(title);
    setTextPopup(text);
    setShowPopup(true);

    setTimeout(() => {
      navigate(redirectPath);
    }, 3000);
  };

  const fetchResetPasswordStatus = async () => {
    setLoading(true);

    try {
      const res = await apiService.checkResetPasswordLink(resetLink);
      const status = res?.status;
      if (status) {
        handlePopup('Сделано!', 'Пароль изменен!', '/log_in');
        // navigate('/log_in');
        return;
      } else {
        handlePopup(
          'Не получилось',
          'Видимо, такой ссылки нет или она уже не действует',
          '/',
        );
        // navigate('/');
        return;
      }
    } catch (error) {
      console.error('Error changing password:', error);
      // handlePopup(
      //   'Не получилось',
      //   'Видимо, такой ссылки нет или она уже не действует',
      //   '/',
      // );
      // navigate('/');
      return;
    } finally {
      setLoading(false);
      return;
    }
  };

  useEffect(() => {
    fetchResetPasswordStatus();
  }, []);

  return (
    <div>
      {showPopup && (
        <InfoPopup
          onClose={() => setShowPopup(false)}
          title={titlePopup}
          text={textPopup}
        />
      )}
      {loading && <Loader />}
    </div>
  );
};

export default PasswordReset;
