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
        <button
          className="studentpayment__button"
          onClick={handleSecurityPopupClick}
        >
          Статистика платежей
        </button>
        <button
          className="studentpayment__button"
          onClick={handlePaymentPopupClick}
        >
          Сделать платеж
        </button>
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
