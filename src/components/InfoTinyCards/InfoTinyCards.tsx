import './InfoTinyCards.css';

const InfoTinyCards = () => {
  return (
    <div className="infotiny__cards">
      <img
        className="infotiny__card"
        src={require('../../assets/tiny_cards/competitions.jpg')}
        alt="faq"
      />
      <img
        className="infotiny__card"
        src={require('../../assets/tiny_cards/inside_s.jpg')}
        alt="basic"
      />
      <img
        className="infotiny__card"
        src={require('../../assets/tiny_cards/competitions.jpg')}
        alt="competitions"
      />
      <img
        className="infotiny__card"
        src={require('../../assets/tiny_cards/inside_s.jpg')}
        alt="prm"
      />
      <img
        className="infotiny__card"
        src={require('../../assets/tiny_cards/competitions.jpg')}
        alt="gallery"
      />
      <img
        className="infotiny__card"
        src={require('../../assets/tiny_cards/inside_s.jpg')}
        alt="inside"
      />
    </div>
  );
};

export default InfoTinyCards;
