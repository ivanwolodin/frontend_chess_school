import { useState } from 'react';

import InfoPopup from '../InfoPopup/InfoPopup';
import './NewYearAdmission.css';

const NewYearAdmission = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleButtonClick = () => {
    setShowPopup(true);
  };
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
            <button
              className="newyearadmission__button"
              onClick={handleButtonClick}
            >
              ЗАПИСАТЬСЯ В ШКОЛУ &#8594;
            </button>
          </div>
        </div>
        <div className="newyearadmission__comercial_girl"></div>
      </div>
      {showPopup && (
        <InfoPopup
          onClose={() => setShowPopup(false)}
          title="Запись"
          text="Записаться можно по номеру 2393006. Ждём Вас!"
        />
      )}
    </section>
  );
};

export default NewYearAdmission;
