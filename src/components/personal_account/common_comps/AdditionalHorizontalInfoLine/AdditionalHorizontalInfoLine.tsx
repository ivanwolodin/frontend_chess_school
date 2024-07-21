import './AdditionalHorizontalInfoLine.css';

const AdditionalHorizontalInfoLine: React.FC = () => {
  return (
    <>
      <div className="additionalhorizontalinfoline__general">
        <div className="additionalhorizontalinfoline__additional_info">
          <p className="additionalhorizontalinfoline__name">
            Добрый день, <b>Василий Иванов!</b>
          </p>
          <p className="additionalhorizontalinfoline__payment_sum">
            В настоящий момент у Вас есть задолженность в размере{' '}
            <b>6700 рублей</b> &#129402;
          </p>
          <button className="additionalhorizontalinfoline__exit">
            {' '}
            Выйти из ЛК{' '}
          </button>
        </div>
      </div>
    </>
  );
};

export default AdditionalHorizontalInfoLine;
