import { AdditionalHorizontalInfoLineProps } from '../../../../utils/interfaces';
import { useAuth } from '../../AuthContext/AuthContext';
import './AdditionalHorizontalInfoLine.css';

const AdditionalHorizontalInfoLine: React.FC<
  AdditionalHorizontalInfoLineProps
> = ({ setToggled }) => {
  const { logout } = useAuth();
  const handleClick = () => {
    setToggled();
  };
  const handleLogout = () => {
    logout();
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
          <button
            className="additionalhorizontalinfoline__exit"
            onClick={handleLogout}
          >
            {' '}
            Выйти из ЛК{' '}
          </button>
        </div>
      </div>
    </>
  );
};

export default AdditionalHorizontalInfoLine;
