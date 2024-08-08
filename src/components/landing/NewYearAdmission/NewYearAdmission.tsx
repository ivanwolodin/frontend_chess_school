import './NewYearAdmission.css';

const NewYearAdmission = () => {
  return (
    <section className="newyearadmission__general">
      <div className="newyearadmission__about_chess">
        <div className="newyearadmission__logo"></div>
        <p className="newyearadmission__general_text">
          Изучите наш сайт, чтобы познакомиться с шахматной игрой, узнать о
          шахматных стратегиях, турнирах и возможностях обучения в нашей
          шахматной школе.
        </p>
      </div>
      <div className="newyearadmission__main_content">
        <div className="newyearadmission__yellow">
          <div className="newyearadmission__admission_info">
            <h2 className="newyearadmission__title">
              Набор на новый учебный год
            </h2>
            <p className="newyearadmission__comercial_text">
              Пора познакомить ребенка с ШАХМАТАМИ. Игра будет развивать
              мышление, научит обобщать и сравнивать, поможет сформировать такие
              качества, как усидчивость, внимательность и организованность.
            </p>
            <div className="newyearadmission__button">
              ЗАПИСАТЬСЯ В ШКОЛУ &#8594;
            </div>
          </div>
        </div>
        <div className="newyearadmission__comercial_girl"></div>
      </div>
    </section>
  );
};

export default NewYearAdmission;
