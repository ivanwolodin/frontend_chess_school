import { Popup } from 'reactjs-popup';

import './SecurityPaymentInfoPopup.css';
import { PaymentInfoPopupProps } from '../../../../utils/interfaces';

const SecurityPaymentInfoPopup: React.FC<PaymentInfoPopupProps> = ({
  open,
  closeModal,
}) => {
  return (
    <Popup open={open} onClose={closeModal} closeOnEscape={true}>
      <div className="modal">
        <button className="close" onClick={closeModal}>
          &times;
        </button>
        Тут слова про безопасность платежа на!
      </div>
    </Popup>
  );
};
export default SecurityPaymentInfoPopup;
