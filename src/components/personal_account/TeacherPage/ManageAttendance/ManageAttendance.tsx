import React, { useState, useRef } from 'react';

import './ManageAttendance.css';
import { attendanceData } from '../../../../utils/constants';
import AttendancePopup from '../../utility_popups/AttendancePopup/AttendancePopup';

const ManageAttendance: React.FC = () => {
  const [width, setWidth] = useState<number>(400);
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);
  const handleLeftArrowClick = () => {
    setCurrentMonth((prevMonth) => (prevMonth === 0 ? 11 : prevMonth - 1));
  };

  const handleRightArrowClick = () => {
    setCurrentMonth((prevMonth) => (prevMonth === 11 ? 0 : prevMonth + 1));
  };

  const handleItemClick = (item: string) => {
    setSelectedItem(item);
    setOpen(true);
  };

  const items = Object.keys(attendanceData);

  const handleMouseDown = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    const startX = e.clientX;
    const containerWidth = containerRef.current?.offsetWidth || 0;

    const handleMouseMove = (e: MouseEvent) => {
      const newWidth = width + (e.clientX - startX);
      setWidth(Math.min(newWidth, containerWidth));
    };

    const handleMouseUp = () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  return (
    <>
      <div
        className={`${open ? 'manageattendance__general manageattendance__general_blur' : 'manageattendance__general'}`}
      >
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
        <AttendancePopup
          open={open}
          selectedItem={selectedItem}
          currentMonth={currentMonth}
          closeModal={closeModal}
          handleLeftArrowClick={handleLeftArrowClick}
          handleRightArrowClick={handleRightArrowClick}
        />
      </div>
    </>
  );
};

export default ManageAttendance;
