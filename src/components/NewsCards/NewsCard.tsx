import './NewsCards.css';

// TODO: переписать через интерфейс
const NewsCard = ({ title }: { title: string }) => {
  return (
    <div className="news_card">
      <img
        className="news_card__image"
        src="https://via.placeholder.com/300x300/00ff00"
        alt="some"
      />
      <div className="news_card__dot"></div>
      <div className="news_card__background">
        <h2>{title}</h2>
        <p>Какой-то текст</p>
        <p>06.07.2024</p>
      </div>
    </div>
  );
};

export default NewsCard;
