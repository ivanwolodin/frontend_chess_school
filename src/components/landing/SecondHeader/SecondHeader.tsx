import './SecondHeader.css';

const SecondHeader = () => {
  return (
    <section className="second-header__general">
      <div className="second-header__icons">
        <img
          className="second-header__icon"
          src={require('../../../assets/icons/vk.png')}
          alt="y"
        />
        <img
          className="second-header__icon"
          src={require('../../../assets/icons/book_icon.png')}
          alt="y"
        />
        <img
          className="second-header__icon"
          src={require('../../../assets/icons/y.png')}
          alt="y"
        />
        <img
          className="second-header__icon"
          src={require('../../../assets/icons/taplink.jpg')}
          alt="y"
        />
        <img
          className="second-header__icon"
          src={require('../../../assets/icons/book_icon.png')}
          alt="y"
        />
        <img
          className="second-header__icon"
          src={require('../../../assets/icons/y.png')}
          alt="y"
        />
      </div>
      <img className="second-header__logo" alt="logo"></img>
      <div className="second-header__quotation">
        Шахматы – это не просто игра, это спорт для ума!
      </div>
    </section>
  );
};

export default SecondHeader;
