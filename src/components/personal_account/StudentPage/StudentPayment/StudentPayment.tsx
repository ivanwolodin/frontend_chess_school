import React, { useState } from 'react';

import './StudentPayment.css';
import PaymentPopup from '../PaymentPopup/PaymentPopup';
import SecurityPaymentInfoPopup from '../SecurityPaymentInfoPopup/SecurityPaymentInfoPopup';

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
      <button onClick={handleSecurityPopupClick}>безопасность платежа</button>
      <button onClick={handlePaymentPopupClick}>Сделать платеж на</button>
      <SecurityPaymentInfoPopup
        open={openSecurityPopup}
        closeModal={closeSecurityModal}
      />
      <PaymentPopup open={openPaymentPopup} closeModal={closePaymentModal} />
    </div>
  );
};

export default StudentPayment;
