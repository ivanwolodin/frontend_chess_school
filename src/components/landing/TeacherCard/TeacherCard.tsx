import { TeacherCardProps } from '../../../utils/interfaces';
import './TeacherCard.css';

const TeacherCard = ({ name, src, position, alt, info }: TeacherCardProps) => {
  return (
    <div className="teachercard__general">
      <h2 className="teachercard__name">{name}</h2>
      <div className="teachercard__opapa">
        <div className="teachercard__image-container">
          <div className="teachercard__image-front">
            <img className="teachercard__image" src={src} alt={alt} />
          </div>
          <div className="teachercard__image-back">
            <p className="teachercard__description">{info}</p>
          </div>
        </div>
        <p className="teachercard__position">{position}</p>
      </div>
    </div>
  );
};

export default TeacherCard;
