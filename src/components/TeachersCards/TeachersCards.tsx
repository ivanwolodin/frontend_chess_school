import { teachersData } from '../../utils/constants';
import TeacherCard from '../TeacherCard/TeacherCard';
import './TeachersCards.css';

const TeachersCards = () => {
  return (
    <section className="teachers__cards">
      {teachersData.map((item, index) => (
        <TeacherCard
          key={index}
          name={item.name}
          src={item.src}
          position={item.position}
          alt={item.alt}
        />
      ))}
    </section>
  );
};

export default TeachersCards;
