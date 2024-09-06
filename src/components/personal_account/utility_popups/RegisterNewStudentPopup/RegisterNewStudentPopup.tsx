import React, { useEffect, useState } from 'react';

import Popup from 'reactjs-popup';
import './RegisterNewStudentPopup.css';

interface Student {
  name: string;
  group?: string;
  birthday?: string;
  phone: string;
  parent_name?: string;
  email: string;
  admission_date: string;
  status?: {
    is_student: boolean;
  };
  usual_price?: number;
  discount?: number;
}

interface RegisterNewStudentPopupProps {
  open: boolean;
  closeModal: () => void;
}

const RegisterNewStudentPopup: React.FC<RegisterNewStudentPopupProps> = ({
  open,
  closeModal,
}) => {
  const [formData, setFormData] = useState<Student>({
    name: '',
    group: '',
    birthday: new Date().toISOString().split('T')[0],
    phone: '8999999999',
    parent_name: 'Имя Отчество',
    email: 'example@mail.ru',
    admission_date: new Date().toISOString().split('T')[0],
    status: { is_student: true },
    usual_price: 700,
    discount: 0,
  });

  const [groups, setGroups] = useState<string[]>([]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    // Add form submission logic here
  };

  useEffect(() => {
    const storedGroups = localStorage.getItem('groups');
    if (storedGroups) {
      try {
        setGroups(JSON.parse(storedGroups));
      } catch (error) {
        console.error('Error parsing groups from localStorage:', error);
      }
    }
  }, []);

  return (
    <Popup
      open={open}
      onClose={closeModal}
      closeOnEscape={true}
      closeOnDocumentClick={true}
    >
      <div className="register-popup">
        <h2 className="register-popup__title">Регистрация ученика</h2>
        <form className="register-popup__form" onSubmit={handleSubmit}>
          <div className="register-popup__form-group">
            <label className="register-popup__label" htmlFor="name">
              Имя ученика
            </label>
            <input
              className="register-popup__input"
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="register-popup__form-group">
            <label className="register-popup__label" htmlFor="group">
              Группа
            </label>
            <select
              className="register-popup__input"
              id="group"
              name="group"
              value={formData.group}
              onChange={handleChange}
              required
            >
              <option value="">Выберите группу</option>
              {groups.map((group, index) => (
                <option key={index} value={group}>
                  {group}
                </option>
              ))}
            </select>
          </div>

          <div className="register-popup__form-group">
            <label className="register-popup__label" htmlFor="birthday">
              Дата рождения
            </label>
            <input
              className="register-popup__input"
              type="date"
              id="birthday"
              name="birthday"
              value={formData.birthday}
              onChange={handleChange}
            />
          </div>

          <div className="register-popup__form-group">
            <label className="register-popup__label" htmlFor="phone">
              Телефон
            </label>
            <input
              className="register-popup__input"
              type="tel"
              pattern="^[0-9]*$"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="register-popup__form-group">
            <label className="register-popup__label" htmlFor="parent_name">
              Имя родителя
            </label>
            <input
              className="register-popup__input"
              type="text"
              id="parent_name"
              name="parent_name"
              value={formData.parent_name}
              onChange={handleChange}
            />
          </div>

          <div className="register-popup__form-group">
            <label className="register-popup__label" htmlFor="email">
              Email
            </label>
            <input
              className="register-popup__input"
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="register-popup__form-group">
            <label className="register-popup__label" htmlFor="admission_date">
              Дата поступления
            </label>
            <input
              className="register-popup__input"
              type="date"
              id="admission_date"
              name="admission_date"
              value={formData.admission_date}
              onChange={handleChange}
            />
          </div>

          <div className="register-popup__form-group">
            <label className="register-popup__label" htmlFor="usual_price">
              Обычная цена
            </label>
            <input
              className="register-popup__input"
              type="number"
              step="0.01"
              id="usual_price"
              name="usual_price"
              value={formData.usual_price?.toString() || ''}
              onChange={handleChange}
            />
          </div>

          <div className="register-popup__form-group">
            <label className="register-popup__label" htmlFor="discount">
              Скидка
            </label>
            <input
              className="register-popup__input"
              type="number"
              step="0.01"
              id="discount"
              name="discount"
              value={formData.discount?.toString() || ''}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="register-popup__submit">
            Зарегистрировать
          </button>
        </form>
      </div>
    </Popup>
  );
};

export default RegisterNewStudentPopup;
