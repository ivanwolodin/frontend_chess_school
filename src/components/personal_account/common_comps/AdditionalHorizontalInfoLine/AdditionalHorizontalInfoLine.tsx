import { useState } from 'react';

import { AdditionalHorizontalInfoLineProps } from '../../../../utils/interfaces';
import { useAuth } from '../../AuthContext/AuthContext';

import './AdditionalHorizontalInfoLine.css';

const AdditionalHorizontalInfoLine: React.FC<
  AdditionalHorizontalInfoLineProps
> = ({ setToggled, userRole }) => {
  const { logout } = useAuth();

  const handleClick = () => {
    setToggled();
  };

  const handleLogout = () => {
    logout();
  };

  const name = localStorage.getItem('name');
  const sumToPay = Number(localStorage.getItem('sumToPay'));

  let message;
  if (userRole.role === 'teacher') {
    message = (
      <p className="additionalhorizontalinfoline__name">
        Добрый день, <b>{name}</b>
      </p>
    );
  } else if (userRole.role === 'student' && sumToPay > 0) {
    message = (
      <p className="additionalhorizontalinfoline__name">
        Добрый день, <b>{name}</b>
        {'    '}В настоящий момент у Вас есть задолженность в размере{' '}
        <b>{sumToPay} рублей</b> &#129402;
      </p>
    );
  } else if (userRole.role === 'student' && sumToPay === 0) {
    message = (
      <p className="additionalhorizontalinfoline__name">
        Добрый день, <b>{name}</b>
        {'    '}Задолженности нет! &#128522;
      </p>
    );
  }

  const [menuIcon, setMenuIcon] = useState(
    require('../../../../assets/icons/home.png'),
  );
  const [exitIcon, setExitIcon] = useState(
    require('../../../../assets/icons/exit.png'),
  );

  return (
    <div className="additionalhorizontalinfoline__general">
      <div className="additionalhorizontalinfoline__additional_info">
        <button
          className="additionalhorizontalinfoline__toggle_button"
          onClick={handleClick}
          onMouseEnter={() =>
            setMenuIcon(require('../../../../assets/icons/home2.png'))
          }
          onMouseLeave={() =>
            setMenuIcon(require('../../../../assets/icons/home.png'))
          }
        >
          <img
            className="additionalhorizontalinfoline__menu_icon"
            src={menuIcon}
            alt="btn"
          />
        </button>
        {message}
        <button
          className="additionalhorizontalinfoline__exit"
          onClick={handleLogout}
          onMouseEnter={() =>
            setExitIcon(require('../../../../assets/icons/exit2.png'))
          }
          onMouseLeave={() =>
            setExitIcon(require('../../../../assets/icons/exit.png'))
          }
        >
          <img
            className="additionalhorizontalinfoline__exit_icon"
            src={exitIcon}
            alt="btn"
          />
        </button>
      </div>
    </div>
  );
};

export default AdditionalHorizontalInfoLine;
