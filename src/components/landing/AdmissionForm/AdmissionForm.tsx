import React, { useState, useEffect } from 'react';

import './AdmissionForm.css';
import { sendDataToServer } from '../../../api/api';

const AdmissionForm: React.FC = () => {
  const [showResult, setShowResult] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    childName: '',
    birthYear: '',
    phone: '',
  });

  const [resultMessage, setResultMessage] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const result = await sendDataToServer(formData);
    setResultMessage(result);
    setShowResult(true);
    setFormData({
      name: '',
      email: '',
      childName: '',
      birthYear: '',
      phone: '',
    });
  };

  useEffect(() => {
    setTimeout(() => {
      setResultMessage('');
    }, 3000);
  }, [resultMessage]);

  return (
    <section className="admissionform__wrapper">
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
              id="childName"
              name="childName"
              value={formData.childName}
              onChange={handleChange}
            />
          </div>
          <div className="admissionform__block">
            <label className="admissionform__label" htmlFor="birthYear">
              Год рождения:
            </label>
            <input
              required
              className="admissionform__input"
              type="date"
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
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
        </div>
        <button type="submit" className="admissionform__button">
          Оставить заявку
        </button>
        {showResult && (
          <div className="admissionform__result">
            <p className="admissionform__feedback">{resultMessage}</p>
          </div>
        )}
      </form>
    </section>
  );
};

export default AdmissionForm;
