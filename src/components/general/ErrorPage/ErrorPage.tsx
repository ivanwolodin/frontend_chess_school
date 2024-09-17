import React from 'react';

import './ErrorPage.css';
import { Link } from 'react-router-dom';

import Footer from '../../landing/Footer/Footer';
import Header from '../../landing/Header/Header';

const ErrorPage: React.FC = () => {
  return (
    <>
      <Header />
      <div className="error-page">
        <div className="error-page__container">
          <h1 className="error-page__title">500</h1>
          <p className="error-page__message">
            Всё сломалось 😔 <br></br>Пытаемся починить..
          </p>
          <div className="error-page__animation">
            <div className="error-page__gear error-page__gear--one"></div>
            <div className="error-page__gear error-page__gear--two"></div>
            <div className="error-page__gear error-page__gear--three"></div>
          </div>
          <Link to="/" className="error-page__button">
            Вернуться на главную страницу
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ErrorPage;
