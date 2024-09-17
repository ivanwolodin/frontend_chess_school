import React, { useState, useEffect } from 'react';

import { AdmissionFormProps } from '../../../utils/interfaces';
import Loader from '../../general/Loader/Loader';
import InfoPopup from '../InfoPopup/InfoPopup';

import './AdmissionForm.css';

const AdmissionForm: React.FC<AdmissionFormProps> = ({
  scrollRef,
  cellData,
  apiService,
}) => {
  const [showPopup, setShowPopup] = useState(false);
  const [titlePopup, setTitlePopup] = useState('Принято! 😊');
  const [textPopup, setTextPopup] = useState('Скоро мы с Вами свяжемся');

  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false); // Новое состояние для отслеживания загрузки

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    childName: '',
    birthYear: '',
    level: 'Не умеет играть',
    phone: '',
    prefferableConnection: 'e-mail',
    additionalText: '',
  });

  const [resultMessage, setResultMessage] = useState('');

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setLoading(true);

    const result = await apiService.newStudentReq(formData);
    setLoading(false);

    if (result) {
      setResultMessage('Заявка принята');
      setTitlePopup('Принято! 😊');
      setTextPopup('Скоро мы с Вами свяжемся');
      setShowPopup(true);
      setFormData({
        name: '',
        email: '',
        childName: '',
        birthYear: '',
        level: 'Не умеет играть',
        phone: '',
        prefferableConnection: 'e-mail',
        additionalText: '',
      });
    } else {
      setResultMessage('Что-то сломалось');
      setTitlePopup('Что-то пошло не так! 😭');
      setTextPopup('Попробуйте отправить заявку еще раз.. 🙏');
      setShowPopup(true);
    }

    setShowResult(true);
  };

  useEffect(() => {
    if (cellData) {
      setFormData({
        ...formData,
        additionalText: `${cellData.group} ${cellData.day} ${cellData.time}`,
      });
    }
  }, [cellData]);

  useEffect(() => {
    setTimeout(() => {
      setResultMessage('');
    }, 3000);
  }, [resultMessage]);

  return (
    <section
      ref={scrollRef}
      className="admissionform__wrapper"
      id="admissionForm"
    >
      <form className="admissionform__general" onSubmit={handleSubmit}>
        <h2 className="admissionform__title">ПОСТУПИТЬ</h2>
        <div className="admissionform__info">
          <div className="admissionform__block">
            <label className="admissionform__label" htmlFor="name">
              Контактное имя:
            </label>
            <input
              required
              className="admissionform__input"
              type="text"
              id="name"
              placeholder="Елена Владимировна"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="admissionform__block">
            <label className="admissionform__label" htmlFor="email">
              Email:
            </label>
            <input
              required
              className="admissionform__input"
              type="email"
              placeholder="example@mail.ru"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="admissionform__block">
            <label className="admissionform__label" htmlFor="childName">
              Имя ребенка:
            </label>
            <input
              required
              className="admissionform__input"
              type="text"
              placeholder="Ваня"
              id="childName"
              name="childName"
              value={formData.childName}
              onChange={handleChange}
            />
          </div>
          <div className="admissionform__block">
            <label htmlFor="level" className="admissionform__label">
              Шахматный уровень:
            </label>
            <select
              className="admissionform__input"
              id="level"
              name="level"
              value={formData.level}
              onChange={handleChange}
            >
              <option value="Не умеет играть" selected>
                Не умеет играть
              </option>
              <option value="Новичок">Новичок</option>
              <option value="Средний">Средний</option>
              <option value="Продвинутый">Продвинутый</option>
            </select>
          </div>
          <div className="admissionform__block">
            <label className="admissionform__label" htmlFor="birthYear">
              Год рождения:
            </label>
            <input
              required
              className="admissionform__input"
              type="number"
              placeholder="1994"
              min="1917"
              max="2024"
              id="birthYear"
              name="birthYear"
              value={formData.birthYear}
              onChange={handleChange}
            />
          </div>
          <div className="admissionform__block">
            <label className="admissionform__label" htmlFor="phone">
              Телефон:
            </label>
            <input
              required
              className="admissionform__input"
              type="number"
              id="phone"
              placeholder="8 999 999 99 99"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div className="admissionform__block">
            <label
              htmlFor="prefferableConnection"
              className="admissionform__label"
            >
              Предпочтительный способ связи:
            </label>
            <select
              className="admissionform__input"
              id="prefferableConnection"
              name="prefferableConnection"
              value={formData.prefferableConnection}
              onChange={handleChange}
            >
              <option value="почта" selected>
                e-mail
              </option>
              <option value="телефон">телефон</option>
            </select>
          </div>
          <div className="admissionform__block">
            <label className="admissionform__label" htmlFor="additional">
              Дополнительно:
            </label>
            <input
              className="admissionform__input admissionform__input_text"
              type="text"
              id="additional"
              name="additionalText"
              placeholder="Доп. инфо"
              value={formData.additionalText}
              onChange={handleChange}
            />
          </div>
        </div>
        <button type="submit" className="admissionform__button">
          Оставить заявку
        </button>
        {loading && <Loader />} {/* Отображаем Loader во время загрузки */}
        {showResult && (
          <div className="admissionform__result">
            <p className="admissionform__feedback">{resultMessage}</p>
          </div>
        )}
      </form>
      {showPopup && (
        <InfoPopup
          onClose={() => setShowPopup(false)}
          title={titlePopup}
          text={textPopup}
        />
      )}
    </section>
  );
};

export default AdmissionForm;
