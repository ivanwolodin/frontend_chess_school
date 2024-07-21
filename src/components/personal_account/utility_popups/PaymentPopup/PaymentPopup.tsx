import { useState } from 'react';

import { Popup } from 'reactjs-popup';

import './PaymentPopup.css';
import { PaymentInfoPopupProps } from '../../../../utils/interfaces';

const PaymentPopup: React.FC<PaymentInfoPopupProps> = ({
  open,
  closeModal,
}) => {
  const [enteredAmount, setEnteredAmount] = useState('5400.00');
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredAmount(event.target.value);
  };

  const handlePaymentClick = () => {
    console.log('I am doing payment!');
  };

  return (
    <Popup open={open} onClose={closeModal} closeOnEscape={true}>
      <div className="modal" style={{ backgroundColor: 'wheat' }}>
        <button className="close" onClick={closeModal}>
          &times;
        </button>
        <div className="paymentpopup__general">
          <p className="paymentpopup__info">Окно оплаты</p>
          <p className="paymentpopup__recommended">
            Рекомендованная сумма: <b>5400.00 рублей</b>
          </p>
          <p className="paymentpopup__payment_sum">Сумма к оплате:</p>
          <input
            type="number"
            className="paymentpopup__input"
            value={enteredAmount}
            onChange={handleInputChange}
          />
          <button
            className="paymentpopup__confirm_button"
            onClick={handlePaymentClick}
          >
            Оплатить
          </button>
        </div>
      </div>
    </Popup>
  );
};
export default PaymentPopup;
