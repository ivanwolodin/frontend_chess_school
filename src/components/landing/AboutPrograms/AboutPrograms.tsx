import adultImage from '../../../assets/programs/adultImageProgram.png';
import childImage from '../../../assets/programs/childImageProgram.jpg';
import schoolImage from '../../../assets/programs/schoolImageProgram.jpg';

import './AboutPrograms.css';

const AboutPrograms = () => {
  return (
    <section className="about-programs">
      <h2 className="about-programs__title">Мы предлагаем</h2>
      <p className="about-programs__subtitle">
        Занятия шахматами, включающие в себя полный цикл профессионального
        шахматного образования для детей и взрослых.
      </p>
      <div className="about-programs__cards">
        <div className="about-programs__card">
          <div className="about-programs__card-content">
            <img
              src={childImage}
              alt="Дети 4-6 лет"
              className="about-programs__card-image"
            />
            <div className="about-programs__card-info">
              <h3 className="about-programs__card-title">Для детей 4-6 лет</h3>
              <p>
                Для малышей у нас разработана уникальная программа - комплексная
                программа развития интеллекта (КПРИ). Которая помогает ребенку
                легче освоить правила сложной игры на примере простых
                развивающих игр, с включением упражнений на развитие памяти,
                внимания, мышления.
                <br /> <br />
                Одно занятие состоит из двух уроков:
                <br />
                1. Шахматы - 35 мин.
                <br />
                2. Развитие логики, памяти, развивающие игры - 35 мин.
                <br /> <br />
                Занятия проводятся: два раза или один раз в неделю.
              </p>
              <button className="about-programs__card-button">Выбрать</button>
            </div>
          </div>
        </div>

        <div className="about-programs__card">
          <div className="about-programs__card-content">
            <div className="about-programs__card-info about-programs__card-info_second">
              <h3 className="about-programs__card-title">Для школьников</h3>
              <p>
                Шахматы — игра для всестороннего развития школьников, особенно
                начальных классов. Она научит важным навыкам:
                <br /> <br />
                - развитию логического мышления,
                <br />
                - улучшению концентрации,
                <br />
                - повышению креативности,
                <br />
                - умению справляться с поражениями,
                <br />
                - развитию математических способностей.
                <br /> <br />
                Занятия шахматами в группе единомышленников способствуют
                личностному росту детей, формируя важные социальные и
                эмоциональные компетенции.
              </p>
              <button className="about-programs__card-button">Выбрать</button>
            </div>
            <img
              src={schoolImage}
              alt="Школьники"
              className="about-programs__card-image about-programs__card-image_inverted"
            />
          </div>
        </div>

        <div className="about-programs__card">
          <div className="about-programs__card-content">
            <img
              src={adultImage}
              alt="Взрослые"
              className="about-programs__card-image"
            />
            <div className="about-programs__card-info">
              <h3 className="about-programs__card-title">Для взрослых</h3>
              <p>
                Сделайте ход к лучшей версии себя!
                <br /> <br />
                Шахматы учат выдержке и концентрации.
                <br />
                Шахматы учат выбирать лучший вариант в условиях ограниченного
                времени.
                <br />
                Шахматы развивают критическое и абстрактное мышление.
                <br /> <br />
                Эти навыки помогут вам стать более успешным человеком.
                <br /> <br />
                Занятия проводятся в группе от 6 человек в воскресенье в 11.00.
              </p>
              <button className="about-programs__card-button">Выбрать</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPrograms;
