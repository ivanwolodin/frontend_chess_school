import { Popup } from 'reactjs-popup';

import './PaymentPopup.css';
import { PaymentInfoPopupProps } from '../../../../utils/interfaces';

const PaymentPopup: React.FC<PaymentInfoPopupProps> = ({
  open,
  closeModal,
}) => {
  return (
    <Popup open={open} onClose={closeModal} closeOnEscape={true}>
      <div className="modal">
        <button className="close" onClick={closeModal}>
          &times;
        </button>
        А тут платим денюжки
      </div>
    </Popup>
  );
};
export default PaymentPopup;
