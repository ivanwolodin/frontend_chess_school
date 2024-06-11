import './Intro.css';

const Intro = () => {
  return (
    <section className="intro__general">
      <div className="intro__info">
        <div className="intro__info_general">
          <img className="intro__logo" src="/logo_small.png" alt="Логотип" />
          <div className="intro__info_official">
            <p>Лицензия на образовательную деятельность</p>
            <p>Сведения об образовательной организации</p>
            <p className="intro__text_yellow_mixin">239-30-06</p>
            <p className="intro__text_yellow_mixin">8(902)632-42-93</p>
            <p className="intro__text_yellow_mixin">
              г. Пермь, ул. Куйбышева, 54
            </p>
          </div>
        </div>
        <div className="intro__info_programs">
          <p className="intro__text_yellow_mixin">ПРОГРАММЫ</p>
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
            <li className="intro__text_yellow_mixin intro__text_bottom_mixin">
              Подробнее о программах и стоимости
            </li>
          </ul>
        </div>
        <div className="intro__info_news">
          <p className="intro__text_yellow_mixin">НОВОСТИ</p>
          <ul>
            <li>РАСПИСАНИЕ НА ЛЕТО</li>
            <li>РАСПИСАНИЕ НА МАЙ</li>
            <li>ПОЗДРАВЛЯЕМ НАШИХ УЧЕНИКОВ</li>
          </ul>
          <ul className="intro__icons">
            <img
              className="intro__icon"
              src={require('../../assets/icons/vk.png')}
              alt="vk"
            />
            <img
              className="intro__icon"
              src={require('../../assets/icons/y.png')}
              alt="y"
            />
            <img
              className="intro__icon"
              src={require('../../assets/icons/taplink.jpg')}
              alt="taplink"
            />
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Intro;
