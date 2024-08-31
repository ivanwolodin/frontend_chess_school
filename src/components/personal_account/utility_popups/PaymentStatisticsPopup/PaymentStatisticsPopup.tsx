import { Popup } from 'reactjs-popup';

import './PaymentStatisticsPopup.css';
import { PaymentInfoPopupProps } from '../../../../utils/interfaces';

const PaymentStatisticsPopup: React.FC<PaymentInfoPopupProps> = ({
  open,
  closeModal,
}) => {
  return (
    <Popup
      className="security__popup"
      // contentStyle={{ width: '300px' }}
      open={open}
      onClose={closeModal}
      closeOnEscape={true}
    >
      <div className="security__popup">
        <button className="close" onClick={closeModal}>
          &times;
        </button>
        <p className="statisticspaymentpopup__info">
          Здесь появится статистика всех Ваших платежей
        </p>
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
