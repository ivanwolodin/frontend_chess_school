import React from 'react';
import './ScheduleCommercial.css';

function ScheduleCommercial() {
  return (
    <section className="schedule-commercial">
      <div className="schedule-commercial__container">
        <div className="schedule-commercial__background">
          <img
            className="schedule-commercial__image"
            src={require('../../../assets/comercial_imgs/comercial_girl_2.jpeg')}
            alt="Дети занимаются шахматами"
          />
          <div className="schedule-commercial__text">
            <p className="schedule-commercial__text-small">Подберите удобное</p>
            <h3 className="schedule-commercial__text-big">
              Расписание занятий
            </h3>
            <p className="schedule-commercial__text-description">
              Выберите в какие дни и часы вашему ребенку удобней будет посещать
              нашу школу, когда вы будете свободны от работы, учебы и других
              занятий.
            </p>
            <button className="schedule-commercial__button">
              Посмотреть расписание
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ScheduleCommercial;
