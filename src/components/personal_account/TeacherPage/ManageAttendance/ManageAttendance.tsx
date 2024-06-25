import React, { useState, useRef } from 'react';
import './ManageAttendance.css';
interface AttendanceRecord {
  attended: string[];
  spravka: string[];
  unattended: string[];
}

interface MonthData {
  [key: string]: AttendanceRecord;
}

interface GroupData {
  [key: string]: MonthData;
}

interface AttendanceData {
  [key: string]: GroupData;
}

const attendanceData: AttendanceData = {
  АТ1: {
    Июнь: {
      'Володин Иван': {
        attended: ['1', '2', '6', '15'],
        spravka: ['20'],
        unattended: [],
      },
      'Ильин Вова': {
        attended: ['6', '2', '3', '19'],
        spravka: ['24'],
        unattended: ['30'],
      },
      'Сотина Алиса': {
        attended: ['6', '2', '3', '19'],
        spravka: ['24'],
        unattended: ['30'],
      },
    },
    Июль: {
      'Володин Иван': {
        attended: ['1'],
        spravka: [],
        unattended: [],
      },
      'Ильин Вова': {
        attended: [],
        spravka: [],
        unattended: [],
      },
    },
    Август: {
      'Володин Иван': {
        attended: ['1'],
        spravka: [],
        unattended: [],
      },
      'Ильин Вова': {
        attended: [],
        spravka: [],
        unattended: [],
      },
      'Сахарова Алиса': {
        attended: [],
        spravka: [],
        unattended: [],
      },
      'Гиря Оля': {
        attended: [],
        spravka: [],
        unattended: [],
      },
    },
  },
  АТ2: {
    Июнь: {},
    Июль: {},
    Август: {},
  },
};

const ManageAttendance: React.FC = () => {
  const [width, setWidth] = useState<number>(400);
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

  const items = Object.keys(attendanceData);

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

  const getAttendanceForSelectedItem = () => {
    if (!selectedItem) return null;

    const selectedMonth = months[currentMonth];
    const groupData = attendanceData[selectedItem];
    if (!groupData || !groupData[selectedMonth]) return null;

    return groupData[selectedMonth];
  };

  const attendanceInfo = getAttendanceForSelectedItem();

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
        <div
          className={`${selectedItem === null ? 'manageattendance__group_info' : ''}`}
        >
          {selectedItem && (
            <>
              <h3>
                {selectedItem} - {months[currentMonth]}
              </h3>
              {attendanceInfo ? (
                <table>
                  <thead>
                    <tr>
                      <th>Имя</th>
                      <th>Посещено</th>
                      <th>Справка</th>
                      <th>Пропущено</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.keys(attendanceInfo).map((name) => (
                      <tr key={name}>
                        <td>{name}</td>
                        <td>
                          {attendanceInfo[name].attended.map((day) => (
                            <span key={day} className="attended">
                              {day}
                            </span>
                          ))}
                        </td>
                        <td>
                          {attendanceInfo[name].spravka.map((day) => (
                            <span key={day} className="spravka">
                              {day}
                            </span>
                          ))}
                        </td>
                        <td>
                          {attendanceInfo[name].unattended.map((day) => (
                            <span key={day} className="unattended">
                              {day}
                            </span>
                          ))}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <p>Нет данных за этот месяц.</p>
              )}
            </>
          )}
          <div
            className={`${selectedItem === null ? 'manageattendance__preload_img' : ''}`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ManageAttendance;
