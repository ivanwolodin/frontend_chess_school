import { Popup } from 'reactjs-popup';

import './SecurityPaymentInfoPopup.css';
import { PaymentInfoPopupProps } from '../../../../utils/interfaces';

const SecurityPaymentInfoPopup: React.FC<PaymentInfoPopupProps> = ({
  open,
  closeModal,
}) => {
  return (
    <Popup open={open} onClose={closeModal} closeOnEscape={true}>
      <div className="modal" style={{ backgroundColor: 'wheat' }}>
        <button className="close" onClick={closeModal}>
          &times;
        </button>
        <p className="statisticspaymentpopup__info">
          Здесь появится статистика всех Ваших платежей
        </p>
      </div>
    </Popup>
  );
};
export default SecurityPaymentInfoPopup;
