import React, { useState } from 'react';

import Popup from 'reactjs-popup';

import './PasswordChangePopup.css';
import { ChangePasswordPopupProps } from '../../../../utils/interfaces';
import { isTokenValid } from '../../../../utils/usefulFunctions';
import Loader from '../../../general/Loader/Loader';
import InfoPopup from '../../../landing/InfoPopup/InfoPopup';

const PasswordChangePopup: React.FC<ChangePasswordPopupProps> = ({
  open,
  closeModal,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  apiService,
}) => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [showPopup, setShowPopup] = useState(false);
  const [titlePopup, setTitlePopup] = useState('');
  const [textPopup, setTextPopup] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const accessToken = localStorage.getItem('accessToken');

    if (newPassword !== confirmPassword) {
      handlePopup('Не получилось', 'Пароли не совпадают!');
      setLoading(false);
      return;
    }

    if (!isTokenValid(accessToken)) {
      alert('Авторизуйтесь, пожалуйста, заново');
      localStorage.clear();
      setLoading(false);
      return;
    }

    try {
      const res = await apiService?.changeUserPassword(
        currentPassword,
        newPassword,
      );
      const status = await res.status;
      if (status) {
        handlePopup('Сделано!', 'Пароль изменен!');
      } else {
        handlePopup('Не получилось', 'Неверный пароль');
      }
    } catch (error) {
      console.error('Error changing password:', error);
      handlePopup('Не получилось', 'Неверный пароль');
    } finally {
      setLoading(false);
    }
  };

  const handlePopup = (title: string, text: string) => {
    setTitlePopup(title);
    setTextPopup(text);
    setShowPopup(true);
  };

  return (
    <>
      <Popup open={open} onClose={closeModal} closeOnEscape={true}>
        <div className="password-change-popup">
          <div className="password-change-popup__header">
            <h2 className="password-change-popup__title">
              Изменить пароль{' '}
              <span className="password-change-popup_icon">&#9999;</span>
            </h2>
            <button
              className="password-change-popup__close"
              onClick={closeModal}
            >
              &times;
            </button>
          </div>
          <form className="password-change-popup__form" onSubmit={handleSubmit}>
            <label className="password-change-popup__label">
              Текущий пароль
              <input
                type="password"
                className="password-change-popup__input"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                required
              />
            </label>
            <label className="password-change-popup__label">
              Новый пароль
              <input
                type="password"
                className="password-change-popup__input"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
              />
            </label>
            <label className="password-change-popup__label">
              Подтвердите пароль
              <input
                type="password"
                className="password-change-popup__input"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </label>
            <button type="submit" className="password-change-popup__submit">
              Изменить пароль
            </button>
          </form>
        </div>
      </Popup>
      {showPopup && (
        <InfoPopup
          onClose={() => setShowPopup(false)}
          title={titlePopup}
          text={textPopup}
        />
      )}
      {loading && <Loader />}
    </>
  );
};

export default PasswordChangePopup;
