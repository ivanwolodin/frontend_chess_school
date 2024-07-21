import React, { useEffect, useRef, useState } from 'react';

import './AttendanceTable.css';
import { StudentAttendance, MonthData } from '../../../../utils/interfaces';

const AttendanceTable: React.FC<MonthData> = ({ full, ...studentData }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedCell, setSelectedCell] = useState<{
    studentName: string;
    day: string;
  } | null>(null);
  const [attendanceData, setAttendanceData] = useState(studentData);
  const [isSaveButtonActive, setIsSaveButtonActive] = useState(false);

  useEffect(() => {
    if (JSON.stringify(attendanceData) !== JSON.stringify(studentData)) {
      setAttendanceData(studentData);
    }
  }, [attendanceData, studentData]);

  const handleCellClick = (studentName: string, day: string) => {
    const className = getCellClassName(studentName, day);
    if (className !== 'attendance__cell_inactive') {
      setIsDropdownOpen(true);
      setSelectedCell({ studentName, day });
    }
  };

  const handleDropdownItemClick = (
    status: 'attended' | 'unattended' | 'spravka',
  ) => {
    if (selectedCell) {
      setAttendanceData((prevData) => {
        const updatedData = { ...prevData };
        const studentAttendance = updatedData[
          selectedCell.studentName
        ] as StudentAttendance;

        studentAttendance.attended = studentAttendance.attended.filter(
          (day) => day !== selectedCell.day,
        );
        studentAttendance.unattended = studentAttendance.unattended.filter(
          (day) => day !== selectedCell.day,
        );
        studentAttendance.spravka = studentAttendance.spravka.filter(
          (day) => day !== selectedCell.day,
        );

        if (status === 'attended') {
          studentAttendance.attended.push(selectedCell.day);
        } else if (status === 'unattended') {
          studentAttendance.unattended.push(selectedCell.day);
        } else if (status === 'spravka') {
          studentAttendance.spravka.push(selectedCell.day);
        }

        setIsSaveButtonActive(true);
        setIsDropdownOpen(false);
        return updatedData;
      });
    }
  };

  const handleDropdownItemKeyPress = (
    event: React.KeyboardEvent<HTMLDivElement>,
    status: 'attended' | 'unattended' | 'spravka',
  ) => {
    if (event.key === 'Enter' || event.key === ' ') {
      handleDropdownItemClick(status);
    }
  };

  const isStudentAttendance = (
    data: StudentAttendance | string[],
  ): data is StudentAttendance => {
    return (data as StudentAttendance).attended !== undefined;
  };

  const getCellClassName = (studentName: string, day: string): string => {
    const studentAttendance = attendanceData[studentName];
    if (isStudentAttendance(studentAttendance)) {
      if (studentAttendance.attended.includes(day)) {
        return 'attendance__cell_attended';
      } else if (studentAttendance.spravka.includes(day)) {
        return 'attendance__cell_spravka';
      } else if (studentAttendance.unattended.includes(day)) {
        return 'attendance__cell_unattended';
      }
    }
    return 'attendance__cell_inactive';
  };

  const dropdownRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSaveButtonClick = () => {
    console.log('Updated attendance data:', attendanceData);
    setIsSaveButtonActive(false);
  };

  return (
    <div className="attendance__general">
      <div className="attendance__table">
        <table className="attendance__register">
          <thead>
            <tr>
              <th> </th>
              {full.map((key, index) => (
                <th className="attendance__date" key={index}>
                  {key}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Object.keys(attendanceData).map((studentName, rowIndex) => (
              <tr key={rowIndex}>
                <td className="attendance__student_name">{studentName}</td>
                {full.map((day, colIndex) => (
                  <td
                    key={colIndex}
                    className={getCellClassName(studentName, day)}
                    onClick={() => handleCellClick(studentName, day)}
                  >
                    {isDropdownOpen &&
                      selectedCell &&
                      selectedCell.studentName === studentName &&
                      selectedCell.day === day && (
                        <div ref={dropdownRef} className="attendance__dropdown">
                          <div
                            className="attendance__item"
                            role="button"
                            tabIndex={0}
                            onClick={() => handleDropdownItemClick('attended')}
                            onKeyPress={(event) =>
                              handleDropdownItemKeyPress(event, 'attended')
                            }
                          >
                            <div className="attendance__square attendance__cell_attended"></div>
                            <div>Посетил</div>
                          </div>
                          <div
                            className="attendance__item"
                            role="button"
                            tabIndex={0}
                            onClick={() =>
                              handleDropdownItemClick('unattended')
                            }
                            onKeyPress={(event) =>
                              handleDropdownItemKeyPress(event, 'unattended')
                            }
                          >
                            <div className="attendance__square attendance__cell_unattended"></div>
                            <div>Пропустил</div>
                          </div>
                          <div
                            className="attendance__item"
                            role="button"
                            tabIndex={0}
                            onClick={() => handleDropdownItemClick('spravka')}
                            onKeyPress={(event) =>
                              handleDropdownItemKeyPress(event, 'spravka')
                            }
                          >
                            <div className="attendance__square attendance__cell_spravka"></div>
                            <div>Болел</div>
                          </div>
                        </div>
                      )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button
        className={`${
          isSaveButtonActive
            ? 'attendance__save_button'
            : 'attendance__save_button attendance__save_button_disabled'
        }`}
        onClick={handleSaveButtonClick}
        disabled={!isSaveButtonActive}
      >
        Сохранить
      </button>
    </div>
  );
};

export default AttendanceTable;
