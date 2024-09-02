import React, { useState } from 'react';

import ApiService from '../../../../api/ApiService';
import PaymentPopup from '../../utility_popups/PaymentPopup/PaymentPopup';
import PaymentSecurityInfoPopup from '../../utility_popups/PaymentSecurityInfoPopup/PaymentSecurityInfoPopup';
import PaymentStatisticsPopup from '../../utility_popups/PaymentStatisticsPopup/PaymentStatisticsPopup';

import './StudentPayment.css';

interface StudentPaymentProps {
  apiService: ApiService;
}

const StudentPayment: React.FC<StudentPaymentProps> = ({ apiService }) => {
  const [openNewPaymentPopup, setNewPaymentPopup] = useState<boolean>(false);
  const [openPaymentPopup, setPaymentPopup] = useState<boolean>(false);
  const [openSecurityInfoPopup, setSecurityInfoPopup] =
    useState<boolean>(false);

  const handleSecurityPopupClick = () => {
    setNewPaymentPopup(true);
  };

  const handlePaymentPopupClick = () => {
    setPaymentPopup(true);
  };

  const handlePaymentSecurityPopupClick = () => {
    setSecurityInfoPopup(true);
  };

  const closePaymentStatisticsModal = () => setNewPaymentPopup(false);
  const closePaymentModal = () => setPaymentPopup(false);
  const closePaymentSecurityInfoModal = () => setSecurityInfoPopup(false);

  return (
    <div className="studentpayment__general">
      <div className="studentpayment__buttons">
        <div className="studentpayment__item">
          <button
            className="studentpayment__button"
            onClick={handleSecurityPopupClick}
          >
            <img
              className="studentpayment__icon"
              src={require('../../../../assets/icons/history_payments.png')}
              alt="btn"
            />
            {/*  */}
          </button>
          <p className="studentpayment__button_text">Статистика платежей</p>
        </div>
        <div className="studentpayment__item">
          <button
            className="studentpayment__button"
            onClick={handlePaymentPopupClick}
          >
            <img
              className="studentpayment__icon"
              src={require('../../../../assets/icons/new_payment.png')}
              alt="btn"
            />
          </button>
          <p className="studentpayment__button_text">Новая оплата</p>
        </div>
        <div className="studentpayment__item">
          <button
            className="studentpayment__button"
            onClick={handlePaymentSecurityPopupClick}
          >
            <img
              className="studentpayment__icon"
              src={require('../../../../assets/icons/secure_payment.png')}
              alt="btn"
            />
          </button>
          <p className="studentpayment__button_text">Безопасность платежа</p>
        </div>
      </div>
      <PaymentStatisticsPopup
        open={openNewPaymentPopup}
        closeModal={closePaymentStatisticsModal}
      />
      <PaymentPopup
        open={openPaymentPopup}
        closeModal={closePaymentModal}
        apiService={apiService}
      />
      <PaymentSecurityInfoPopup
        open={openSecurityInfoPopup}
        closeModal={closePaymentSecurityInfoModal}
      />
    </div>
  );
};

export default StudentPayment;
