import { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { Popup } from 'reactjs-popup';

import './PaymentPopup.css';
import { PaymentInfoPopupProps } from '../../../../utils/interfaces';
import { isTokenValid } from '../../../../utils/usefulFunctions';

const PaymentPopup: React.FC<PaymentInfoPopupProps> = ({
  open,
  closeModal,
  apiService,
}) => {
  const [enteredAmount, setEnteredAmount] = useState<string>(
    localStorage.getItem('sumToPay') || '5600',
  );
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredAmount(event.target.value);
  };
  const navigate = useNavigate();
  const handlePaymentClick = async () => {
    const accessToken = localStorage.getItem('accessToken');

    if (isTokenValid(accessToken)) {
      if (Number(enteredAmount) < 1) {
        return;
      }
      const paymentUrl = await apiService?.getPaymentUrl(enteredAmount);
      const urlToRedirect = paymentUrl ?? '';

      if (urlToRedirect) {
        window.location.href = urlToRedirect;
        // window.open(urlToRedirect);
      } else {
        alert(
          'В данный момент функционал оплат недоступен. Мы работаем над восстановлением',
        );
      }
    } else {
      alert('Авторизуйтесь, пожалуйста, заново');
      localStorage.clear();
      navigate('/log_in');
    }
  };

  return (
    <Popup open={open} onClose={closeModal} closeOnEscape={true}>
      <div className="paymentpopup">
        <button className="close" onClick={closeModal}>
          &times;
        </button>
        <div className="paymentpopup__gen">
          <img
            className="paymentpopup__icon"
            src={require('../../../../assets/icons/playing_children.png')}
            alt="btn"
          />
          <div className="paymentpopup__general">
            <p className="paymentpopup__info">Окно оплаты</p>
            <p className="paymentpopup__payment_sum">Сумма к оплате:</p>
            <input
              type="number"
              className="paymentpopup__input"
              value={enteredAmount}
              onChange={handleInputChange}
              required
              min="1"
            />
            <button
              className="paymentpopup__confirm_button"
              onClick={handlePaymentClick}
            >
              Оплатить
            </button>
          </div>
        </div>
      </div>
    </Popup>
  );
};

export default PaymentPopup;
