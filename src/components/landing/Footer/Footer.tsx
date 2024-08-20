import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer__general">
      <div className="footer__info">
        <div>
          <p>КОНТАКТЫ</p>
          <ul className="footer__official">
            <li>ООО Шахматная Школа,</li>
            <li> 614016 г.Пермь, </li>
            <li> ул. Куйбышева 54, </li>
            <li> ИНН: 5905026580, </li>
            <li> ОГРН: 1155958015421, </li>
            <li> Тел: 239-30-06 , 8 902-632-42-93, </li>
            <li> E-mail: chessperm@yandex.ru </li>
          </ul>
        </div>
        <div>
          <p>ВРЕМЯ РАБОТЫ </p>
          <ul className="footer__working_time">
            <li>Вторник-Воскресенье </li>
            <li> 9:00 - 20:00 </li>
          </ul>
        </div>
        <div>
          <p>СОЦИАЛЬНЫЕ СЕТИ </p>

          <ul className="footer__icons">
            <a
              href="https://vk.com/chessschool59"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="footer__icon"
                src={require('../../../assets/icons/vk_i.png')}
                alt="VK"
              />
            </a>
            <a href="https://invite.viber.com/?g2=AQAbJcB6hTfkBEp%2BEofyabJtKo%2BbdNfEFMf%2FjBrCctwSX%2BFC1WUfwq7eKNLM%2B7nO&lang=ru">
              <img
                className="footer__icon"
                src={require('../../../assets/icons/viber_i.png')}
                alt="Viber"
              />
            </a>
            <a
              href="https://t.me/chessschool59"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="footer__icon"
                src={require('../../../assets/icons/tg_i.png')}
                alt="Telegram"
              />
            </a>
          </ul>
        </div>
      </div>
      <hr></hr>
      <div className="footer__second_section">
        <div className="footer__icons">
          <div className="footer__admins_icon">
            <img
              className="footer__perm_icon"
              src={require('../../../assets/icons/perm_department.png')}
              alt="Департамент Перми иконка"
            />
            <img
              className="footer__rcf_icon"
              src={require('../../../assets/icons/rcf_icon.jpeg')}
              alt="РШФ иконка"
            />
          </div>
        </div>
        <div className="footer__warnings">
          <p>
            {' '}
            Все материалы являются авторскими, любое использование разрешено
            только с письменного согласия администрации сайта
            www.шахматыпермь.рф
          </p>
          <br />
          <p>
            {' '}
            Посещая страницы Сайта, заполняя формы ввода данных, пользователь
            выражает своё согласие с{' '}
            <a
              className="footer__privacypolicy_link"
              target="_blank"
              href="https://storage.yandexcloud.net/chessschoolfrontendfiles/privacypolicy.pdf"
              rel="noreferrer"
            >
              Политикой конфиденциальности.
            </a>
          </p>
          <br />
          <p>
            {' '}
            © 2016 - 2024 <br />
            ШАХМАТНАЯ ШКОЛА
          </p>
        </div>
        <img
          className="footer__visa_icon"
          src={require('../../../assets/icons/icons_cards.png')}
          alt="vk"
        />
      </div>
    </footer>
  );
}
