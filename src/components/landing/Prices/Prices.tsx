import './Prices.css';

const Prices = ({
  handlePriceClick,
}: {
  handlePriceClick: (group: string, day: string, time: string) => void;
}) => {
  return (
    <section className="prices">
      <h2 className="prices__title">Стоимость занятий</h2>
      <p className="prices__subtitle">
        Выберите свой вариант и запишитесь на первое занятие
      </p>

      <div className="prices__cards">
        <div className="prices__card prices__card_yellow">
          <div className="prices__card-header">
            <p className="prices__card-number">4</p>
            <p className="prices__card-text">занятия</p>
          </div>
          <div className="prices__card-price">3 200 руб</div>
          <div className="prices__card-info">
            <p className="prices__card-info-text">1 занятие в неделю</p>
            <p className="prices__card-info-text">Групповые тренировки</p>
            <p className="prices__card-info-text">
              Стоимость 1 занятия 800 рублей
            </p>
          </div>
          <button
            disabled
            className="prices__card-button"
            onClick={() => handlePriceClick('В группе,', '1 занятие,', '2 800')}
          >
            Выбрать
          </button>
        </div>

        <div className="prices__card prices__card_blue">
          <div className="prices__card-header">
            <p className="prices__card-number">8</p>
            <p className="prices__card-text">занятий</p>
          </div>
          <div className="prices__card-price">5 600 руб</div>
          <div className="prices__card-info">
            <p className="prices__card-info-text">2 занятия в неделю</p>
            <p className="prices__card-info-text">Групповые тренировки</p>
            <p className="prices__card-info-text">
              Стоимость 1 занятия 700 рублей
            </p>
          </div>
          <button
            disabled
            className="prices__card-button"
            onClick={() => handlePriceClick('В группе,', '2 занятия,', '4 800')}
          >
            Выбрать
          </button>
        </div>

        <div className="prices__card prices__card_yellow">
          <div className="prices__card-header">
            <p className="prices__card-number">12</p>
            <p className="prices__card-text">занятий</p>
          </div>
          <div className="prices__card-price">7 800 руб</div>
          <div className="prices__card-info">
            <p className="prices__card-info-text">3 занятия в неделю</p>
            <p className="prices__card-info-text">Групповые тренировки</p>
            <p className="prices__card-info-text">
              Стоимость 1 занятия 650 рублей
            </p>
          </div>
          <button
            disabled
            className="prices__card-button"
            onClick={() => handlePriceClick('В группе,', '3 занятия,', '6 900')}
          >
            Выбрать
          </button>
        </div>
      </div>
    </section>
  );
};

export default Prices;
