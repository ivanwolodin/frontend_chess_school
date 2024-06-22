import React, { useState } from 'react';
import './ManageAttendance.css';

const ManageAttendance: React.FC = () => {
  const items = [
    'АТ11',
    'АТ12',
    'АТ13',
    'СпецВТЧТ3',
    'АТВтЧт1',
    'АТВтЧт16',
    'АТ_ПТ14',
    'АТ_ПТ16',
    'СпецВТЧТ2',
    'СпецВТЧТ1',
  ];

  const months = [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь',
  ];

  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const handleLeftArrowClick = () => {
    setCurrentMonth((prevMonth) => (prevMonth === 0 ? 11 : prevMonth - 1));
  };

  const handleRightArrowClick = () => {
    setCurrentMonth((prevMonth) => (prevMonth === 11 ? 0 : prevMonth + 1));
  };

  const handleItemClick = (item: string) => {
    setSelectedItem(item);
  };

  const handleKeyDownDiv = (
    event: React.KeyboardEvent<HTMLDivElement>,
    action: () => void,
  ) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      action();
    }
  };

  const handleKeyDownLi = (
    event: React.KeyboardEvent<HTMLLIElement>,
    action: () => void,
  ) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      action();
    }
  };

  return (
    <div className="manageattendance__general">
      <div className="manageattendance__main_block">
        <h2 className="manageattendance__title">Группы: </h2>
        <ul className="manageattendance__group_list">
          {items.map((item, index) => (
            <li
              key={index}
              className={`manageattendance__group_item ${selectedItem === item ? 'manageattendance__group_item_selected' : ''}`}
              onClick={() => handleItemClick(item)}
              onKeyDown={(event) =>
                handleKeyDownLi(event, () => handleItemClick(item))
              }
              tabIndex={0}
              // eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role
              role="button"
            >
              {item}
            </li>
          ))}
        </ul>
        <div className="manageattendance__month_controls">
          <div
            className="manageattendance__month_controls_leftarrow"
            onClick={handleLeftArrowClick}
            onKeyDown={(event) => handleKeyDownDiv(event, handleLeftArrowClick)}
            tabIndex={0}
            role="button"
            aria-label="Previous month"
          ></div>
          <p className="manageattendance__month_controls_monthtitle">
            {months[currentMonth]}
          </p>
          <div
            className="manageattendance__month_controls_rightarrow"
            onClick={handleRightArrowClick}
            onKeyDown={(event) =>
              handleKeyDownDiv(event, handleRightArrowClick)
            }
            tabIndex={0}
            role="button"
            aria-label="Next month"
          ></div>
        </div>
        <div className="manageattendance__group_info">
          {selectedItem}
          <div className="manageattendance__preload_img"></div>
        </div>
      </div>
    </div>
  );
};

export default ManageAttendance;
