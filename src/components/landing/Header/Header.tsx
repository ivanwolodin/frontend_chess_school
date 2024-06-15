import './Header.css';

const Header = () => {
  return (
    <header className="header__general">
      <ul className="header__list">
        <li className="header__item">ГЛАВНАЯ </li>
        <li className="header__item">НОВОСТИ </li>
        <li className="header__item">СОРЕВНОВАНИЯ </li>
        <li className="header__item">О ШКОЛЕ </li>
        <li className="header__item">ГРАФИК</li>
        <li className="header__item">ПОСТУПЛЕНИЕ</li>
        <li className="header__item">ЛИЧНЫЙ КАБИНЕТ </li>
      </ul>
    </header>
  );
};

export default Header;
