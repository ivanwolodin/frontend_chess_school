import { Popup } from 'reactjs-popup';

import { PaymentInfoPopupProps } from '../../../../utils/interfaces';
import './PaymentSecurityInfoPopup.css';

const PaymentSecurityInfoPopup: React.FC<PaymentInfoPopupProps> = ({
  open,
  closeModal,
}) => {
  return (
    <Popup
      className="paymentsecurityinfo__popup"
      open={open}
      onClose={closeModal}
      closeOnEscape={true}
    >
      <div className="paymentsecurityinfo__popup paymentsecurityinfo__general">
        <button className="close" onClick={closeModal}>
          &times;
        </button>
        <h2 className="paymentsecurityinfo__title">Безопасность платежа</h2>
        <p className="paymentsecurityinfo__text">
          На нашем сайте Вы не вводите никакие данные, содержащие
          конфиденциальную информацию. Необходимо указать только сумму, которую
          хотите заплатить, после чего Вы попадете на адрес Платежного шлюза
          Сбербанка (https://api.yookassa.ru/v3/payments...) <br /> <br />
          Ввод данных банковской карты происходит лишь на странице Платежного
          шлюза. Эта информация недоступна ни нам, ни третьим лицам. <br />{' '}
          <br />
          Верификация Вашей карты и безопасность Ваших средств гарантируется
          системой Сбербанка. <br /> <br />
          После обработки транзакции, Вы вернетесь на наш сайт, где мы оповестим
          Вас о статусе Вашего платежа.
        </p>
        <img
          className="paymentsecurityinfo__buttom_icon"
          src={require('../../../../assets/icons/sberbank.png')}
          alt="btn"
        />
      </div>
    </Popup>
  );
};
export default PaymentSecurityInfoPopup;
