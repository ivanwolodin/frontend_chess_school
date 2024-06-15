import { Link } from 'react-router-dom';

import './Header.css';

const Header = () => {
  return (
    <header className="header__general">
      <ul className="header__list">
        <li className="header__item">
          <Link className="header__link" to="/">
            ГЛАВНАЯ
          </Link>
        </li>
        <li className="header__item">НОВОСТИ </li>
        <li className="header__item">СОРЕВНОВАНИЯ </li>
        <li className="header__item">О ШКОЛЕ </li>
        <li className="header__item">ГРАФИК</li>
        <li className="header__item">ПОСТУПЛЕНИЕ</li>
        <li className="header__item">
          <Link className="header__link" to="/log_in">
            ЛИЧНЫЙ КАБИНЕТ
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
