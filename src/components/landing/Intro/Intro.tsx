import './Intro.css';

const Intro = () => {
  return (
    <section className="intro__general">
      <div className="intro__info">
        <div className="intro__info_general">
          <div className="intro__logo" title="Логотип школы"></div>
          <div className="intro__info_official">
            <p>Лицензия на образовательную деятельность</p>
            <p>Сведения об образовательной организации</p>
            <p className="intro__text_yellow_mixin">239-30-06</p>
            <p className="intro__text_yellow_mixin">8 919-451-05-86</p>
            <p className="intro__text_yellow_mixin">
              г. Пермь, ул. Куйбышева, 54
            </p>
          </div>
        </div>
        <div className="intro__info_programs">
          <p className="intro__text_yellow_mixin intro__titles_mixin">
            ПРОГРАММЫ
          </p>
          <ul className="intro__programs_list">
            <li>
              КОМПЛЕКСНОЕ ИНТЕЛЛЕКТУАЛЬНОЕ РАЗВИТИЕ <br /> Шахматы, логика,
              память, развивающие игры
            </li>
            <li>ТРЕНИРОВОЧНЫЙ ЭТАП</li>
            <li>ШАХМАТЫ НА АНГЛИЙСКОМ</li>
            <li>ДИСТАНЦИОННОЕ ОБУЧЕНИЕ</li>
            <li>ИНДИВИДУАЛЬНЫЕ ЗАНЯТИЯ</li>
            <li>КУРСЫ ПОВЫШЕНИЕ КВАЛИФИКАЦИИ</li>
          </ul>
          <p className="intro__text_yellow_mixin ">
            Подробнее о программах и стоимости
          </p>
        </div>
        <div className="intro__info_news intro__info_news_mixin">
          <p className="intro__text_yellow_mixin intro__titles_mixin">
            НОВОСТИ
          </p>
          <ul className="intro__list_news">
            <li>РАСПИСАНИЕ НА ЛЕТО</li>
            <li>РАСПИСАНИЕ НА МАЙ</li>
            <li>ПОЗДРАВЛЯЕМ НАШИХ УЧЕНИКОВ</li>
          </ul>
          <ul className="intro__icons">
            <a
              href="https://vk.com/chessschool59"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="intro__icon"
                src={require('../../../assets/icons/vk_i.png')}
                alt="VK"
              />
            </a>
            <a href="https://invite.viber.com/?g2=AQAbJcB6hTfkBEp%2BEofyabJtKo%2BbdNfEFMf%2FjBrCctwSX%2BFC1WUfwq7eKNLM%2B7nO&lang=ru">
              <img
                className="intro__icon"
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
                className="intro__icon"
                src={require('../../../assets/icons/tg_i.png')}
                alt="Telegram"
              />
            </a>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Intro;
