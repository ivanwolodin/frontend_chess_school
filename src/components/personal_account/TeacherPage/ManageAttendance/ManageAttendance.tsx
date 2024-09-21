import React, { useState, useRef } from 'react';

import { ManageAttendanceProps } from '../../../../utils/interfaces';
import AttendancePopup from '../../utility_popups/AttendancePopup/AttendancePopup';

import './ManageAttendance.css';

function deepCopy<T>(obj: T): T {
  return JSON.parse(JSON.stringify(obj));
}

const ManageAttendance: React.FC<ManageAttendanceProps> = ({
  attendanceData,
  groupsInfo,
  changeStudentAttendance,
}) => {
  const [width, setWidth] = useState<number>(600);
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [open, setOpen] = useState(false);

  const [deepCopyAttendanceData, setDeepCopyAttendanceData] = useState(
    deepCopy(attendanceData),
  );

  const closeModalWithoutSaving = () => {
    setDeepCopyAttendanceData(deepCopy(attendanceData));
    setOpen(false);
  };
  const handleLeftArrowClick = () => {
    setCurrentMonth((prevMonth) => (prevMonth === 0 ? 11 : prevMonth - 1));
  };

  const handleRightArrowClick = () => {
    setCurrentMonth((prevMonth) => (prevMonth === 11 ? 0 : prevMonth + 1));
  };
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

  const handleItemClick = (item: string) => {
    setSelectedItem(item);
    setOpen(true);
  };

  return (
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
          {Object.keys(attendanceData).map((groupName, index) => (
            <button
              className="manageattendance__group_item"
              key={index}
              onClick={() => handleItemClick(groupName)}
            >
              {groupName}
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
        closeModalWithoutSaving={closeModalWithoutSaving}
        closeModalOnSaving={closeModalWithoutSaving}
        handleLeftArrowClick={handleLeftArrowClick}
        handleRightArrowClick={handleRightArrowClick}
        attendanceData={deepCopyAttendanceData}
        groupsInfo={groupsInfo}
        changeStudentAttendance={changeStudentAttendance}
      />
    </div>
  );
};

export default ManageAttendance;
