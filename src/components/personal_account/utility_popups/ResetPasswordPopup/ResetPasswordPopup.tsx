import React, { useState } from 'react';

import Popup from 'reactjs-popup';

import { ResetPasswordPopupProps } from '../../../../utils/interfaces';
import Loader from '../../../general/Loader/Loader';
import InfoPopup from '../../../landing/InfoPopup/InfoPopup';

import './ResetPasswordPopup.css';

const ResetPasswordPopup: React.FC<ResetPasswordPopupProps> = ({
  open,
  closeModal,
  apiService,
}) => {
  const [userEmail, setUserEmail] = useState('');

  const [showPopup, setShowPopup] = useState(false);
  const [titlePopup, setTitlePopup] = useState('');
  const [textPopup, setTextPopup] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await apiService.resetUserPassword(userEmail);
      const status = await res.status;
      if (status) {
        handlePopup(
          'Сделано!',
          'Отправили Вам ссылку для сброса на указанную почту!',
        );
      } else {
        handlePopup(
          'Не получилось',
          'Такой электронной почты пока нет в нашей базе',
        );
      }
    } catch (error) {
      console.error('Error changing password:', error);
      handlePopup(
        'Не получилось',
        'Такой электронной почты пока нет в нашей базе',
      );
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
        <div className="resetpassword-change-popup">
          <div className="resetpassword-change-popup__header">
            <h2 className="resetpassword-change-popup__title">
              Сбросить пароль{' '}
              <span className="resetpassword-change-popup_icon">&#9999;</span>
            </h2>
            <button
              className="resetpassword-change-popup__close"
              onClick={closeModal}
            >
              &times;
            </button>
          </div>
          <form
            className="resetpassword-change-popup__form"
            onSubmit={handleSubmit}
          >
            <label className="resetpassword-change-popup__label">
              Электронная почта
              <input
                type="email"
                className="resetpassword-change-popup__input"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                required
              />
            </label>
            <button
              type="submit"
              className="resetpassword-change-popup__submit"
            >
              Сбросить
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

export default ResetPasswordPopup;
