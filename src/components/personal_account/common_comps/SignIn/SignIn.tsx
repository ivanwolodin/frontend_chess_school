import React, { useState } from 'react';

import Header from '../../../landing/Header/Header';
import './SignIn.css';

const SignIn = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Логин:', login);
    console.log('Пароль:', password);
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
                value={login}
                onChange={(e) => setLogin(e.target.value)}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="signin__input"
              />
            </div>
            <button type="submit" className="signin__button">
              Войти
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignIn;
