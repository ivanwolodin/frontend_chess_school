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

  const role = localStorage.getItem('role');
  const name = localStorage.getItem('name');
  const sumToPay = Number(localStorage.getItem('sumToPay'));

  let message;
  if (role === 'teacher') {
    message = (
      <p className="additionalhorizontalinfoline__name">
        Добрый день, <b>{name}</b>
      </p>
    );
  } else if (role === 'student' && sumToPay > 0) {
    message = (
      <p className="additionalhorizontalinfoline__name">
        Добрый день, <b>{name}</b>
        {'    '}В настоящий момент у Вас есть задолженность в размере{' '}
        <b>{sumToPay} рублей</b> &#129402;
      </p>
    );
  } else if (role === 'student' && sumToPay === 0) {
    message = (
      <p className="additionalhorizontalinfoline__name">
        Добрый день, <b>{name}</b>
        {'    '}Задолженности нет! &#128522;
      </p>
    );
  }

  return (
    <div className="additionalhorizontalinfoline__general">
      <div className="additionalhorizontalinfoline__additional_info">
        <button
          className="additionalhorizontalinfoline__toggle_button"
          onClick={handleClick}
        >
          &#9776;
        </button>
        {message}
        <button
          className="additionalhorizontalinfoline__exit"
          onClick={handleLogout}
        >
          Выйти из ЛК
        </button>
      </div>
    </div>
  );
};

export default AdditionalHorizontalInfoLine;
