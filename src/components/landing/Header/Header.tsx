import { useState } from 'react';

import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <header className="header__general">
      <button className="header__toggle" onClick={toggleMenu}>
        &#x2630; МЕНЮ
      </button>
      <ul className={`header__list ${isMenuOpen ? 'header__list_open' : ''}`}>
        <li className="header__item">
          <Link className="header__link" to="/" onClick={scrollToTop}>
            ГЛАВНАЯ
          </Link>
        </li>
        <li className="header__item">
          <Link className="header__link" to="/about">
            О ШКОЛЕ
          </Link>
        </li>
        <li className="header__item_disabled">
          <HashLink className="header__link" smooth to="/#programs">
            Программы
          </HashLink>
        </li>
        <li className="header__item">
          <Link className="header__link" to="/schedule">
            Расписание
          </Link>
        </li>
        <li className="header__item">
          <HashLink className="header__link" smooth to="/#admissionForm">
            ПОСТУПЛЕНИЕ
          </HashLink>
        </li>
        <li className="header__item rotate">
          <Link className="header__link" to="/log_in">
            <span className="header__log_in">ВОЙТИ В ЛИЧНЫЙ КАБИНЕТ</span>
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
