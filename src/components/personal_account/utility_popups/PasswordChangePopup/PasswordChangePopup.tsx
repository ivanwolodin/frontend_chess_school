import React, { useState } from 'react';

import Popup from 'reactjs-popup';

import './PasswordChangePopup.css';
import { ChangePasswordPopupProps } from '../../../../utils/interfaces';

const PasswordChangePopup: React.FC<ChangePasswordPopupProps> = ({
  open,
  closeModal,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  apiService,
}) => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      setError('Пароли не совпадают');
      return;
    }

    // Perform password change logic here
    // отправить запрос на изменение
    setError('');
    console.log('Password changed successfully');
  };

  return (
    <Popup open={open} onClose={closeModal} closeOnEscape={true}>
      <div className="password-change-popup">
        <div className="password-change-popup__header">
          <h2 className="password-change-popup__title">Изменить пароль</h2>
          <button className="password-change-popup__close" onClick={closeModal}>
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
            />
          </label>
          <label className="password-change-popup__label">
            Новый пароль
            <input
              type="password"
              className="password-change-popup__input"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </label>
          <label className="password-change-popup__label">
            Подтвердите пароль
            <input
              type="password"
              className="password-change-popup__input"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </label>
          {error && <p className="password-change-popup__error">{error}</p>}
          <button type="submit" className="password-change-popup__submit">
            Изменить пароль
          </button>
        </form>
      </div>
    </Popup>
  );
};

export default PasswordChangePopup;
