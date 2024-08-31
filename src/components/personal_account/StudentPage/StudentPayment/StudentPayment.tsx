import React, { useState } from 'react';

import './StudentPayment.css';
import PaymentPopup from '../../utility_popups/PaymentPopup/PaymentPopup';
import SecurityPaymentInfoPopup from '../../utility_popups/SecurityPaymentInfoPopup/SecurityPaymentInfoPopup';

const StudentPayment = () => {
  const [openSecurityPopup, setOpenSecurityPopup] = useState<boolean>(false);
  const [openPaymentPopup, setPaymentPopup] = useState<boolean>(false);

  const handleSecurityPopupClick = () => {
    setOpenSecurityPopup(true);
  };

  const handlePaymentPopupClick = () => {
    setPaymentPopup(true);
  };

  const closeSecurityModal = () => setOpenSecurityPopup(false);
  const closePaymentModal = () => setPaymentPopup(false);

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
            onClick={handlePaymentPopupClick}
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
      <SecurityPaymentInfoPopup
        open={openSecurityPopup}
        closeModal={closeSecurityModal}
      />
      <PaymentPopup open={openPaymentPopup} closeModal={closePaymentModal} />
    </div>
  );
};

export default StudentPayment;
