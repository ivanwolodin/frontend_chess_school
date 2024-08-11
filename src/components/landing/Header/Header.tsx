import { useState } from 'react';

import { Link } from 'react-router-dom';

import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header__general">
      <button className="header__toggle" onClick={toggleMenu}>
        &#x2630; МЕНЮ
      </button>
      <ul className={`header__list ${isMenuOpen ? 'header__list_open' : ''}`}>
        <li className="header__item">
          <Link className="header__link" to="/">
            ГЛАВНАЯ
          </Link>
        </li>
        <li className="header__item">НОВОСТИ</li>
        <li className="header__item">СОРЕВНОВАНИЯ</li>
        <Link className="header__link" to="/about">
          О ШКОЛЕ
        </Link>
        <li className="header__item">График</li>
        <li className="header__item">ПОСТУПЛЕНИЕ</li>
        <li className="header__item rotate">
          <Link className="header__link" to="/log_in">
            <span className="header__log_in">ВОЙТИ</span>
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
