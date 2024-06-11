import { tinyCardsData } from '../../utils/constants';
import InfoTinyCard from '../InfoTinyCard/InfoTinyCard';

import './InfoTinyCards.css';

const InfoTinyCards = () => {
  return (
    <section className="infotiny__cards">
      {tinyCardsData.map((card, index) => (
        <InfoTinyCard key={index} src={card.src} alt={card.alt} />
      ))}
    </section>
  );
};

export default InfoTinyCards;
