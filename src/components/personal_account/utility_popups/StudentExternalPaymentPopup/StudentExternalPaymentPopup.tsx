import React, { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import { StudentExternalPaymentPopupProps } from '../../../../utils/interfaces';
import './StudentExternalPaymentPopup.css';
import { isTokenValid } from '../../../../utils/usefulFunctions';
import Loader from '../../../general/Loader/Loader';

interface IdByStudentName {
  [key: string]: string;
}

function StudentExternalPaymentPopup({
  onClose,
  apiService,
}: StudentExternalPaymentPopupProps) {
  const navigate = useNavigate();
  const [students, setStudents] = useState<IdByStudentName>({});
  const [selectedStudent, setSelectedStudent] = useState<string>('');
  const [paymentType, setPaymentType] = useState<string>('terminal (card)');
  const [paymentDate, setPaymentDate] = useState<string>('');
  const [paymentAmount, setPaymentAmount] = useState<number | ''>('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const storedData = localStorage.getItem('idByStudentName');
    if (storedData) {
      setStudents(JSON.parse(storedData));
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const accessToken = localStorage.getItem('accessToken');
    if (
      selectedStudent &&
      paymentType &&
      paymentDate &&
      paymentAmount &&
      paymentAmount > 0
    ) {
      if (isTokenValid(accessToken)) {
        setLoading(true);
        try {
          const payment = await apiService.insertExternalPayment({
            student_id: students[selectedStudent],
            payment_sum: paymentAmount,
            payment_type: paymentType,
            when_paid: paymentDate,
          });
          if (payment) {
            alert('Оплата внесена!');
          }
        } catch (error) {
          alert(`Произошла ошибка! ${error}`);
        }
      } else {
        alert('Авторизуйтесь, пожалуйста, заново');
        localStorage.clear();
        navigate('/log_in');
      }
      setLoading(false);
      onClose();
    } else {
      alert('Заполните все поля формы!');
    }
  };

  return (
    <div className="externalpayment__popup">
      <div className="externalpayment__popup_content">
        <h2 className="externalpayment__popup_title">Новая оплата</h2>
        <label className="externalpayment__popup_label">
          Студент:
          <select
            className="externalpayment__popup_select"
            value={selectedStudent}
            onChange={(e) => setSelectedStudent(e.target.value)}
          >
            <option value="" disabled>
              Выберите студента
            </option>
            {Object.keys(students).map((name) => (
              <option key={name} value={name}>
                {name}
              </option>
            ))}
          </select>
        </label>
        <label className="externalpayment__popup_label">
          Тип оплаты:
          <select
            required
            className="externalpayment__popup_select"
            value={paymentType}
            onChange={(e) => setPaymentType(e.target.value)}
          >
            <option value="terminal (card)">terminal (card)</option>
            <option value="SBP">SBP</option>
            <option value="PP">PP</option>
            <option value="billing">billing</option>
            <option value="terminal (cash)">terminal (cash)</option>
          </select>
        </label>
        <label className="externalpayment__popup_label">
          Дата оплаты:
          <input
            required
            className="externalpayment__popup_input"
            type="date"
            value={paymentDate}
            onChange={(e) => setPaymentDate(e.target.value)}
          />
        </label>
        <label className="externalpayment__popup_label">
          Сумма платежа:
          <input
            className="externalpayment__popup_input"
            required
            type="number"
            value={paymentAmount}
            onChange={(e) => setPaymentAmount(Number(e.target.value))}
          />
        </label>
        <button
          className="externalpayment__popup_submit"
          onClick={handleSubmit}
        >
          Внести платеж
        </button>
        <button className="externalpayment__popup_close" onClick={onClose}>
          Закрыть
        </button>
      </div>
      {loading && <Loader />}
    </div>
  );
}

export default StudentExternalPaymentPopup;
