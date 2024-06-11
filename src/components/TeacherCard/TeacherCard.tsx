import { TeacherCardProps } from '../../utils/interfaces';

import './TeacherCard.css';

const TeacherCard = ({ name, src, position, alt }: TeacherCardProps) => {
  return (
    <div className="teachercard__general">
      <h2 className="teachercard__name">{name}</h2>
      <div className="teachercard__opapa">
        <img className="teachercard__image" src={src} alt={alt}></img>
        <p className="teachercard__position">{position}</p>
      </div>
    </div>
  );
};

export default TeacherCard;
