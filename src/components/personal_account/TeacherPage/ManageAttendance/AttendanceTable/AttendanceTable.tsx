import React, { useEffect, useRef, useState } from 'react';

import {
  AttendanceData,
  AttendanceRecord,
  ClassDates,
} from '../../../../../utils/interfaces';

import './AttendanceTable.css';

interface Props {
  attendanceInfo: AttendanceData;
  classDates: ClassDates;
  groupName: string;
  month: string;
}

interface AttendanceChange {
  attended: number[];
  unattended: number[];
  spravka: number[];
}

interface AttendanceChanges {
  [studentName: string]: {
    [groupName: string]: {
      [monthName: string]: AttendanceChange;
    };
  };
}

const AttendanceTable: React.FC<Props> = ({
  attendanceInfo,
  classDates,
  groupName,
  month,
}) => {
  const [isSaveButtonActive, setIsSaveButtonActive] = useState(false);
  const [activeCell, setActiveCell] = useState<{
    studentName: string;
    date: number;
  } | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Структура для хранения изменений
  const [attendanceChanges, setAttendanceChanges] = useState<AttendanceChanges>(
    {},
  );

  const groupAttendance = attendanceInfo[groupName]?.[month];
  const dates = classDates[groupName]?.[month];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setActiveCell(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  if (!groupAttendance || !dates) {
    return <div>Нет данных за этот период</div>;
  }

  const getAttendanceClassName = (
    date: number,
    studentAttendance: AttendanceRecord,
  ) => {
    if (studentAttendance.attended.includes(date)) {
      return 'attendance__cell_general attendance__cell_attended';
    } else if (studentAttendance.unattended.includes(date)) {
      return 'attendance__cell_general attendance__cell_unattended';
    } else if (studentAttendance.spravka.includes(date)) {
      return 'attendance__cell_general attendance__cell_spravka';
    }
    return 'attendance__cell_general attendance__cell_inactive';
  };

  const handleCellClick = (
    studentName: string,
    date: number,
    className: string,
  ) => {
    if (className === 'attendance__cell_general attendance__cell_inactive')
      return;
    setIsDropdownOpen(true);
    setActiveCell({ studentName, date });
  };

  const handleOptionSelect = (
    studentName: string,
    date: number,
    status: 'attended' | 'unattended' | 'spravka',
  ) => {
    setIsDropdownOpen(false);
    const studentData = groupAttendance.find(
      (student) => Object.keys(student)[0] === studentName,
    );

    if (!studentData) {
      setIsDropdownOpen(false);
      return;
    }

    const studentAttendance = studentData[studentName];

    studentAttendance.attended = studentAttendance.attended.filter(
      (d) => d !== date,
    );
    studentAttendance.unattended = studentAttendance.unattended.filter(
      (d) => d !== date,
    );
    studentAttendance.spravka = studentAttendance.spravka.filter(
      (d) => d !== date,
    );

    studentAttendance[status].push(date);

    setAttendanceChanges((prevChanges) => {
      const updatedChanges = { ...prevChanges };

      if (!updatedChanges[studentName]) {
        updatedChanges[studentName] = {};
      }

      if (!updatedChanges[studentName][groupName]) {
        updatedChanges[studentName][groupName] = {};
      }

      updatedChanges[studentName][groupName][month] = {
        attended: [...studentAttendance.attended],
        unattended: [...studentAttendance.unattended],
        spravka: [...studentAttendance.spravka],
      };

      return updatedChanges;
    });

    setIsSaveButtonActive(true);
    setActiveCell(null);
  };

  const submitNewAttendance = () => {
    console.log('Измененные данные:', attendanceChanges);

    // Логика для отправки изменений на backend
    /*
    fetch('/api/update-attendance', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(attendanceChanges),
    })
    .then(response => response.json())
    .then(data => console.log(data));
    */

    setAttendanceChanges({});
    setIsSaveButtonActive(false);
  };

  const handleDropdownClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  return (
    <div className="attendance__general">
      <table className="attendance__register">
        <thead>
          <tr>
            <th> </th>
            {dates.map((date, index) => (
              <th className="attendance__date" key={index}>
                {date}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {groupAttendance.map((studentData, index) => {
            const studentName = Object.keys(studentData)[0];
            const studentAttendance = studentData[studentName];
            return (
              <tr key={index}>
                <td className="attendance__student_name">{studentName}</td>
                {dates.map((date) => {
                  const cellClass = getAttendanceClassName(
                    date,
                    studentAttendance,
                  );
                  return (
                    <td
                      key={date}
                      className={cellClass}
                      onClick={() =>
                        handleCellClick(studentName, date, cellClass)
                      }
                    >
                      {isDropdownOpen &&
                        activeCell?.studentName === studentName &&
                        activeCell?.date === date && (
                          // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
                          <div
                            className="attendance__dropdown"
                            ref={dropdownRef}
                            onClick={handleDropdownClick}
                          >
                            <div
                              className="attendance__item"
                              role="button"
                              tabIndex={0}
                              onClick={() =>
                                handleOptionSelect(
                                  studentName,
                                  date,
                                  'attended',
                                )
                              }
                              onKeyPress={() => {}}
                            >
                              <div className="attendance__square attendance__cell_attended"></div>
                              <div>Посетил</div>
                            </div>
                            <div
                              className="attendance__item"
                              role="button"
                              tabIndex={0}
                              onClick={() =>
                                handleOptionSelect(studentName, date, 'spravka')
                              }
                              onKeyPress={() => {}}
                            >
                              <div className="attendance__square attendance__cell_spravka"></div>
                              <div>Справка</div>
                            </div>
                            <div
                              className="attendance__item"
                              role="button"
                              tabIndex={0}
                              onClick={() =>
                                handleOptionSelect(
                                  studentName,
                                  date,
                                  'unattended',
                                )
                              }
                              onKeyPress={() => {}}
                            >
                              <div className="attendance__square attendance__cell_unattended"></div>
                              <div>Пропустил</div>
                            </div>
                          </div>
                        )}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <button
        className={`${
          isSaveButtonActive
            ? 'attendance__save_button'
            : 'attendance__save_button attendance__save_button_disabled'
        }`}
        onClick={submitNewAttendance}
        disabled={!isSaveButtonActive}
      >
        Сохранить
      </button>
    </div>
  );
};

export default AttendanceTable;
