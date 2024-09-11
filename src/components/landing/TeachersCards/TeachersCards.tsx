import { teachersData } from '../../../utils/constants';
import TeacherCard from '../TeacherCard/TeacherCard';
import './TeachersCards.css';

const TeachersCards = () => {
  return (
    <section>
      <h2 className="teachers__cards_title">Наша команда</h2>
      <p className="teachers__cards_subtitle">
        Мы любим наше дело и поможем стать вам и вашим детям успешными людьми
      </p>
      <div className="teachers__cards">
        {teachersData.map((item, index) => (
          <TeacherCard
            key={index}
            name={item.name}
            src={item.src}
            position={item.position}
            alt={item.alt}
            info={item.info}
          />
        ))}
      </div>
    </section>
  );
};

export default TeachersCards;
