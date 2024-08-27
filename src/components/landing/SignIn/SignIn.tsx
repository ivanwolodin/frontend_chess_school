import React, { useState } from 'react';

// import { useNavigate } from 'react-router-dom';

import { useAuth } from '../../personal_account/AuthContext/AuthContext';
import Header from '../Header/Header';
import './SignIn.css';

const SignIn = () => {
  const [loginFrom, setLoginForm] = useState('');
  const [passwordForm, setPasswordForm] = useState('');
  // const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    login({ name: loginFrom, password: passwordForm, role: loginFrom });
    //   // login({ username, password });
    //   if (login === 'student' && password === 'student') {
    //     navigate('/student');
    //   } else if (login === 'teacher' && password === 'teacher') {
    //     navigate('/teacher');
    //   } else {
    //     console.log('Неверный логин или пароль');
    //   }
  };

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
              />
            </div>
            <button type="submit" className="signin__button">
              Войти
            </button>
            <p className="signin__info">
              Пока вход не доступен, но мы скоро вернёмся !{' '}
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignIn;
