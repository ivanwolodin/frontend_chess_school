import zlata from '../../../assets/comercial_imgs/zlata.jpeg';
import { NewYearAdmissionProps } from '../../../utils/interfaces';

import './NewYearAdmission.css';

const NewYearAdmission: React.FC<NewYearAdmissionProps> = ({
  scrollToForm,
}) => {
  return (
    <section className="newyearadmission__general">
      <div className="newyearadmission__about_chess"></div>
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
            <button className="newyearadmission__button" onClick={scrollToForm}>
              ЗАПИСАТЬСЯ В ШКОЛУ &#8594;
            </button>
          </div>
        </div>
        {/* <div className="newyearadmission__comercial_girl"></div> */}
        <img
          className="newyearadmission__comercial_girl"
          src={zlata}
          alt="zlata"
        ></img>
      </div>
    </section>
  );
};

export default NewYearAdmission;
