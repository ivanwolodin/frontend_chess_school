import { InfoPopupProps } from '../../../utils/interfaces';
import './InfoPopup.css';

function InfoPopup({ onClose, title, text }: InfoPopupProps) {
  return (
    <div className="info__popup">
      <div className="info__popup_content">
        <h2 className="info__popup_title">{title}</h2>
        <p className="info__popup_text">{text}</p>
        <button className="info__popup_close" onClick={onClose}>
          Закрыть
        </button>
      </div>
    </div>
  );
}

export default InfoPopup;
