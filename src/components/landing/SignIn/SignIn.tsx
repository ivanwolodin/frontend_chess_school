import React, { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import { useAuth } from '../../personal_account/AuthContext/AuthContext';
import Header from '../Header/Header';
import './SignIn.css';
import InfoPopup from '../InfoPopup/InfoPopup';

const SignIn = () => {
  const [showPopup, setShowPopup] = useState(false);
  // const [titlePopup, setTitlePopup] = useState('Принято! 😊');
  // const [textPopup, setTextPopup] = useState('Скоро мы с Вами свяжемся');

  const [loginFrom, setLoginForm] = useState('');
  const [passwordForm, setPasswordForm] = useState('');

  const { login } = useAuth();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    login({ username: loginFrom, password: passwordForm });
  };

  const handleResetPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setShowPopup(true);
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
          <h2 className="signin__title"> Вход в ЛК &#128526; </h2>
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
        {showPopup && (
          <InfoPopup
            onClose={() => setShowPopup(false)}
            title={'Сброс пароля'}
            text={
              'Мы работаем над этим функционалом. Пока пароль можно сбросить, написав нам на почту: admin@шахматыпермь.рф'
            }
          />
        )}
      </div>
    </>
  );
};

export default SignIn;
