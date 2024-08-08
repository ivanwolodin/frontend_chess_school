import React from 'react';
import './WhyWe.css';

function WhyWe() {
  const cardsData = [
    {
      title: 'Опытные тренеры',
      text: 'У нас квалифицированные преподаватели с большим опытом работы, с уникальными методами обучения, имеющие дополнительные сертификаты и специализацию.',
    },
    {
      title: 'Программы обучения',
      text: 'Разнообразные учебные программы, соответствующие возрасту и интересам ребенка. У нас есть уникальная программа для дошкольников "Комплексная программа развития интеллекта: шахматы, логика, память, развивающие игры".',
    },
    {
      title: 'Индивидуальный подход',
      text: 'Занятия проходят в мини-группах не более 6 человек. Мы учитываем особенности каждого ученика, оказываем индивидуальную поддержку, создаем условия для гармоничного развития ребенка.',
    },
    {
      title: 'Социальная среда',
      text: 'Нашим ученикам комфортно и безопасно в школе. Дети получают не только в спортивное, но и духовное и моральное развитие, овладевая ценностями толерантности, ответственности и гражданского участия.',
    },
    {
      title: 'Лицензия на образовательную деятельность',
      text: 'Наша школа имеет лицензию на образовательную деятельность. Это дает родителям возможность получить налоговый вычет по НДФЛ на всю стоимость обучения в год.',
    },
    {
      title: 'Нам есть чем гордится',
      text: 'Выпускники нашей школы имеют высокие спортивные звания. Неоднократно завоевывали призовые места на Всероссийских и международных соревнованиях.',
    },
  ];

  return (
    <section className="why-we">
      <h2 className="why-we__title">Почему выбирают нас</h2>
      <p className="why-we__subtitle">
        Мы любим наше дело и будем рады поделиться своими знаниями и опытом
      </p>
      <div className="why-we__cards">
        {cardsData.map((card, index) => (
          <div key={index} className="why-we__card">
            <h3 className="why-we__card-title">{card.title}</h3>
            <p className="why-we__card-text">{card.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyWe;