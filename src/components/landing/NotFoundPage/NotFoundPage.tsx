import React from 'react';

import { Link } from 'react-router-dom';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';

import './NotFoundPage.css';

const NotFoundPage = () => {
  return (
    <div className="not-found-page">
      <Header />
      <main className="not-found-content">
        <h1 className="not-found-title">404</h1>
        <p className="not-found-message">
          Ой, кажется, вы забрели не туда! <br></br> <br></br>
          <span className="animated-text">
            Страница, которую вы ищете, не найдена.
          </span>
        </p>
        <Link to="/" className="not-found-link">
          Вернуться на главную страницу
        </Link>
      </main>
      <Footer />
    </div>
  );
};

export default NotFoundPage;
