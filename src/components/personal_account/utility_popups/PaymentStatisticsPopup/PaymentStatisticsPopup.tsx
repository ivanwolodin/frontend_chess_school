import { useEffect, useState } from 'react';

import { Popup } from 'reactjs-popup';

import './PaymentStatisticsPopup.css';
import { PaymentInfoPopupProps } from '../../../../utils/interfaces';

const PaymentStatisticsPopup: React.FC<PaymentInfoPopupProps> = ({
  open,
  closeModal,
}) => {
  const [payments, setPayments] = useState<
    { amount: string; date: string }[] | null
  >(null);

  useEffect(() => {
    const storedPayments = localStorage.getItem('payments');
    if (storedPayments) {
      setPayments(JSON.parse(storedPayments));
    }
  }, []);

  return (
    <Popup
      className="security__popup"
      open={open}
      onClose={closeModal}
      closeOnEscape={true}
    >
      <div className="security__popup">
        <button className="close" onClick={closeModal}>
          &times;
        </button>

        {payments && payments.length > 0 ? (
          <>
            <p className="statisticspaymentpopup__info">Совершенные оплаты</p>
            <ul className="payment-list">
              {payments.map((payment, index) => (
                <li className="payment-list__item" key={index}>
                  Сумма:{' '}
                  <span className="payment-list__amount">{payment.amount}</span>
                  , Дата:{' '}
                  <span className="payment-list__date">{payment.date}</span>
                </li>
              ))}
            </ul>
          </>
        ) : (
          <p className="statisticspaymentpopup__info">
            Здесь появится статистика всех Ваших платежей
          </p>
        )}

        <div className="statisticspaymentpopup__buttom_elem">
          <img
            className="statisticspaymentpopup__buttom_icon"
            src={require('../../../../assets/icons/money_icon.png')}
            alt="btn"
          />
        </div>
      </div>
    </Popup>
  );
};

export default PaymentStatisticsPopup;
