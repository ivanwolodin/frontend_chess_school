import { NewsCardProps } from '../../utils/interfaces';
import './NewsCard.css';

const NewsCard = ({ title, src, text, date }: NewsCardProps) => {
  return (
    <div className="news_card">
      <img className="newscard__image" src={src} alt="some" />
      <div className="newscard__dot"></div>
      <div className="newscard__background">
        <h2 className="newscard__title">{title}</h2>
        <p>{text}</p>
        <p>{date}</p>
      </div>
    </div>
  );
};

export default NewsCard;
