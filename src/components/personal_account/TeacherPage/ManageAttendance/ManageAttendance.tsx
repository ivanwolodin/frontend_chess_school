import React, { useState, useRef } from 'react';
import './ManageAttendance.css';

const ManageAttendance: React.FC = () => {
  const [width, setWidth] = useState<number>(400); // Изначальная ширина
  const [groupTitle, setGroupTitle] = useState<string>(''); // Заголовок группы
  const containerRef = useRef<HTMLDivElement>(null);

  const items = [
    'Группа 1',
    'Группа 2',
    'Группа 3',
    'Группа 4',
    'Группа 5',
    'Группа 6',
    'Группа 7',
    'Группа 8',
    'Группа 9',
    'Группа 10',
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

  const handleItemClick = (item: string) => {
    setGroupTitle(item);
  };

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
      <div className="manageattendance__details">
        <div className="manageattendance__group_title">{groupTitle}</div>
        {/* Здесь можно добавить таблицу или другие детали */}
      </div>
    </div>
  );
};

export default ManageAttendance;
