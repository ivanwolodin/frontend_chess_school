import './AdditionalHorizontalInfoLine.css';

interface AdditionalHorizontalInfoLineProps {
  setToggled: () => void;
}

const AdditionalHorizontalInfoLine: React.FC<
  AdditionalHorizontalInfoLineProps
> = ({ setToggled }) => {
  const handleClick = () => {
    setToggled();
  };
  return (
    <>
      <div className="additionalhorizontalinfoline__general">
        <div className="additionalhorizontalinfoline__additional_info">
          <button
            className="additionalhorizontalinfoline__toggle_button"
            onClick={handleClick}
          >
            &#9776;
          </button>
          <p className="additionalhorizontalinfoline__name">
            Добрый день, <b>Василий Иванов!</b>
            {'    '}В настоящий момент у Вас есть задолженность в размере{' '}
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
