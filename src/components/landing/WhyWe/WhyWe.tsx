import './WhyWe.css';

function WhyWe() {
  return (
    <section className="why-we">
      <h2 className="why-we__title">Почему выбирают нас</h2>
      <p className="why-we__subtitle">
        Мы любим наше дело и будем рады поделиться своими знаниями и опытом
      </p>
      <div className="why-we__cards">
        <ul className="why-we__ulist">
          <li className="why-we__card-coaches">
            <h3 className="why-we__card-title">Опытные тренеры</h3>
            <p className="why-we__card-text">
              У нас квалифицированные преподаватели с большим опытом работы, с
              уникальными методами обучения, имеющие дополнительные сертификаты
              и специализацию.
            </p>
          </li>
          <li className="why-we__img why-we__coach"></li>
          <li>
            <h3 className="why-we__card-title">Программы обучения</h3>
            <p className="why-we__card-text">
              Разнообразные учебные программы, соответствующие возрасту и
              интересам ребенка. У нас есть уникальная программа для
              дошкольников Комплексная программа развития интеллекта: шахматы,
              логика, память, развивающие игры.
            </p>
          </li>
          <li className="why-we__img why-we__kate"></li>
          <li className="why-we__img why-we__license"></li>
          <li>
            <h3 className="why-we__card-title">
              Лицензия на образовательную деятельность
            </h3>
            <p className="why-we__card-text why-we__lic_txt">
              Наша школа имеет лицензию на образовательную деятельность. Это
              дает родителям возможность получить налоговый вычет по НДФЛ.
            </p>
          </li>
          <li className="why-we__cup why-we__img"></li>
          <li>
            <h3 className="why-we__card-title">Нам есть чем гордится</h3>
            <p className="why-we__card-text">
              Выпускники нашей школы имеют высокие спортивные звания.
              Неоднократно завоевывали призовые места на Всероссийских и
              международных соревнованиях.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default WhyWe;
