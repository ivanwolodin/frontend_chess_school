import React from 'react';

import { Link } from 'react-router-dom';

import Footer from '../../landing/Footer/Footer';
import Header from '../../landing/Header/Header';

import './NotFoundPage.css';

const NotFoundPage = () => {
  return (
    <>
      <Header />
      <div className="not-found">
        <div className="not-found__container">
          <h1 className="not-found__title">404</h1>
          <p className="not-found__text">
            Ой! Кажется, вы забрели не туда.. <br></br> У нас нет такой страницы
          </p>
          <Link to="/" className="not-found__button">
            Вернуться на главную страницу
          </Link>
        </div>
        <div className="not-found__animation">
          <div className="not-found__circle"></div>
          <div className="not-found__circle"></div>
          <div className="not-found__circle"></div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NotFoundPage;
