import React, { useState, useRef } from 'react';
import './ManageAttendance.css';

const ManageAttendance: React.FC = () => {
  const [width, setWidth] = useState<number>(400); // Изначальная ширина
  // const [groupTitle, setGroupTitle] = useState<string>(''); // Заголовок группы
  const containerRef = useRef<HTMLDivElement>(null);
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

  // const handleKeyDownLi = (
  //   event: React.KeyboardEvent<HTMLLIElement>,
  //   action: () => void,
  // ) => {
  //   if (event.key === 'Enter' || event.key === ' ') {
  //     event.preventDefault();
  //     action();
  //   }
  // };
  const items = [
    'СпецВТЧТ5',
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

  const handleMouseDown = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    const startX = e.clientX;

    const handleMouseMove = (e: MouseEvent) => {
      const newWidth = width + (e.clientX - startX);
      setWidth(newWidth);
    };

    const handleMouseUp = () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  // const handleItemClick = (item: string) => {
  //   setGroupTitle(item);
  // };

  return (
    <div className="manageattendance__general">
      <div
        ref={containerRef}
        className="manageattendance__container"
        style={{ width: `${width}px` }}
      >
        <div className="manageattendance__title">Список групп</div>
        <div className="manageattendance__group_list">
          {items.map((item, index) => (
            <button
              key={index}
              className="manageattendance__group_item"
              onClick={() => handleItemClick(item)}
            >
              {item}
            </button>
          ))}
        </div>
        <button
          className="manageattendance__vertical_line"
          onMouseDown={handleMouseDown}
        ></button>
      </div>
      <div className="manageattendance__month_controls">
        <div className="manageattendance__month_arrows">
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
