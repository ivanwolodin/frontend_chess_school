import React, { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import ApiService from '../../../api/ApiService';
import Loader from '../../general/Loader/Loader';
import { useAuth } from '../../personal_account/AuthContext/AuthContext';
import ResetPasswordPopup from '../../personal_account/utility_popups/ResetPasswordPopup/ResetPasswordPopup';
import Header from '../Header/Header';
import './SignIn.css';
import InfoPopup from '../InfoPopup/InfoPopup';

interface SignInProps {
  apiService: ApiService;
}

const SignIn: React.FC<SignInProps> = ({ apiService }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [showResetPasswordPopup, setShowResetPasswordPopup] = useState(false);

  const [showInfoPopup, setShowInfoPopup] = useState(false);
  const [titlePopup, setTitlePopup] = useState('');
  const [textPopup, setTextPopup] = useState('');

  const [loading, setLoading] = useState(false);
  const [loginFrom, setLoginForm] = useState('');
  const [passwordForm, setPasswordForm] = useState('');

  const { login } = useAuth();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    await login({ username: loginFrom, password: passwordForm });

    if (!localStorage.getItem('name')) {
      setShowInfoPopup(false);
      setTitlePopup('Не можем вас найти! 🧐');
      setTextPopup('Пользователя с таким логином и паролем нет в нашей базе');
      setShowInfoPopup(true);
    }

    setLoading(false);

    return;
  };

  const handleResetPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setShowResetPasswordPopup(true);
  };

  const navigate = useNavigate();
  useEffect(() => {
    const role = localStorage.getItem('role');
    if (role) {
      navigate('/personal_account');
    }
  });

  return (
    <>
      <Header />
      <div className="signin__general">
        <div className="signin__form-container">
          <h2 className="signin__title"> Вход в ЛК &#128522; </h2>
          <form onSubmit={handleSubmit} className="signin__form">
            <div className="signin__input-group">
              <label htmlFor="login" className="signin__label">
                Логин
              </label>
              <input
                type="text"
                id="login"
                value={loginFrom}
                onChange={(e) => setLoginForm(e.target.value)}
                className="signin__input"
                required
              />
            </div>
            <div className="signin__input-group">
              <label htmlFor="password" className="signin__label">
                Пароль
              </label>
              <input
                type="password"
                id="password"
                value={passwordForm}
                onChange={(e) => setPasswordForm(e.target.value)}
                className="signin__input"
                required
              />
            </div>
            <button type="submit" className="signin__button">
              Войти
            </button>
            <p className="signin__info">
              Логин и пароль придут на почту после подписания договора
            </p>
          </form>
          <button
            type="button"
            className="signin__reset"
            onClick={handleResetPassword}
          >
            Восстановить пароль
          </button>
        </div>
        {showInfoPopup && (
          <InfoPopup
            onClose={() => setShowInfoPopup(false)}
            title={titlePopup}
            text={textPopup}
          />
        )}
        {showResetPasswordPopup && (
          <ResetPasswordPopup
            open={showResetPasswordPopup}
            closeModal={() => setShowResetPasswordPopup(false)}
            apiService={apiService}
          />
        )}
        {loading && <Loader />}
      </div>
    </>
  );
};

export default SignIn;
