import './SecondHeader.css';

const SecondHeader = () => {
  return (
    <section className="second-header__general">
      <div className="second-header__icons">
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
        <a href="tel:+7342293006">
          <img
            className="second-header__icon"
            src={require('../../../assets/icons/phone_i.png')}
            alt="Phone"
          />
        </a>
        <a
          href="https://www.youtube.com/channel/UCiTDxF0Ab3rMLdGYFFejWrw/featured"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="second-header__icon second-header__icon_y"
            src={require('../../../assets/icons/y.png')}
            alt="Yandex"
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
        <a href="https://invite.viber.com/?g2=AQAbJcB6hTfkBEp%2BEofyabJtKo%2BbdNfEFMf%2FjBrCctwSX%2BFC1WUfwq7eKNLM%2B7nO&lang=ru">
          <img
            className="second-header__icon"
            src={require('../../../assets/icons/viber_i.png')}
            alt="Viber"
          />
        </a>
        <a href="mailto:chessperm@yandex.ru">
          <img
            className="second-header__icon"
            src={require('../../../assets/icons/mail_i.png')}
            alt="Email"
          />
        </a>
      </div>
      <img className="second-header__logo" alt="logo"></img>
      <div className="second-header__quotation">
        Шахматы – это не просто игра, это спорт для ума!
      </div>
    </section>
  );
};

export default SecondHeader;