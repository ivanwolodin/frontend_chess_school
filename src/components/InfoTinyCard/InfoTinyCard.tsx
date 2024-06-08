import { InfoTinyCardProps } from '../utils/interfaces';

import './InfoTinyCard.css';

const InfoTinyCard = ({ src, alt }: InfoTinyCardProps) => {
  return <img className="infotiny__card" src={src} alt={alt} />;
};

export default InfoTinyCard;
