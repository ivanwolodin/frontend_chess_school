import logo from '../../../../src/assets/logo/logo_little.png';
// import xs_tree from '../../../../src/assets/newyeartree/new_year_tree.png';

import './SecondHeader.css';

const quotes = [
  'Шахматы – это спорт для ума!',
  'Шахматы развивают логику, стратегическое мышление и концентрацию.',
  'В шахматах нет места случайности, только ум и воля к победе.',
  'Шахматы – это искусство, наука и спорт в одном.',
  'Шахматы - игра, которая учит нас думать наперед.',
];

const SecondHeader = () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];

  return (
    <section className="second-header__general">
      <div className="second-header__nav_info">
        <p className="second-header__address">г. Пермь, ул. Куйбышева, 54</p>
        <div className="second-header__icons">
          <a
            href="https://www.youtube.com/channel/UCiTDxF0Ab3rMLdGYFFejWrw/featured"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="second-header__icon second-header__icon_y"
              src={require('../../../assets/icons/y.png')}
              alt="YouTube"
            />
          </a>
          <a href="mailto:chessperm@yandex.ru">
            <img
              className="second-header__icon"
              src={require('../../../assets/icons/mail_i.png')}
              alt="Email"
            />
          </a>
          <a href="https://invite.viber.com/?g2=AQAbJcB6hTfkBEp%2BEofyabJtKo%2BbdNfEFMf%2FjBrCctwSX%2BFC1WUfwq7eKNLM%2B7nO&lang=ru">
            <img
              className="second-header__icon"
              src={require('../../../assets/icons/viber_i.png')}
              alt="Viber"
            />
          </a>
          <a href="tel:+73422393006">
            <img
              className="second-header__icon"
              src={require('../../../assets/icons/phone_i.png')}
              alt="Phone"
            />
          </a>
          <a
            href="https://t.me/chessschool59"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="second-header__icon"
              src={require('../../../assets/icons/tg_i.png')}
              alt="Telegram"
            />
          </a>
          <a
            href="https://vk.com/chessschool59"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="second-header__icon"
              src={require('../../../assets/icons/vk_i.png')}
              alt="VK"
            />
          </a>
        </div>
      </div>
      <div className="second-header__xs_logos">
        {/* <img className="second-header__xs_tree" src={xs_tree} alt="logo"></img> */}
        <img className="second-header__logo" src={logo} alt="logo"></img>
      </div>

      <p className="second-header__quotation">{randomQuote}</p>
    </section>
  );
};

export default SecondHeader;
