import { useState } from 'react';

import { Link } from 'react-router-dom';
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
        <li className="header__item">НОВОСТИ</li>
        <li className="header__item">СОРЕВНОВАНИЯ</li>
        <li className="header__item">
          <Link className="header__link" to="/about">
            О ШКОЛЕ
          </Link>
        </li>
        <li className="header__item">
          <Link className="header__link" to="/schedule">
            График
          </Link>
        </li>
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
