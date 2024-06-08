import './InfoTinyCard.css';
import { InfoTinyCardProps } from '../../utils/interfaces';

const InfoTinyCard = ({ src, alt }: InfoTinyCardProps) => {
  return <img className="infotiny__card" src={src} alt={alt} />;
};

export default InfoTinyCard;
