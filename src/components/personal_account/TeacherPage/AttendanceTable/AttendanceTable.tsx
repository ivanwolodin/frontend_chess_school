import React, { useEffect, useRef, useState } from 'react';

import './AttendanceTable.css';
import { StudentAttendance, MonthData } from '../../../../utils/interfaces';

interface Props extends MonthData {}

const AttendanceTable: React.FC<Props> = ({ full, ...studentData }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [selectedCell, setSelectedCell] = useState<{
    studentName: string;
    day: string;
  } | null>(null);
  const handleCellClick = (studentName: string, day: string) => {
    const className = getCellClassName(studentName, day);
    if (className !== 'attendance__cell') {
      console.log(`Clicked cell for ${studentName} on day ${day}`);
      setIsDropdownOpen(true);
      setSelectedCell({ studentName: studentName, day: day });
      console.log(`selectedCell = ${selectedCell?.day}`);
      console.log(`isDropdownOpen = ${isDropdownOpen}`);
    }
  };

  const isStudentAttendance = (
    data: StudentAttendance | string[],
  ): data is StudentAttendance => {
    return (data as StudentAttendance).attended !== undefined;
  };

  const getCellClassName = (studentName: string, day: string): string => {
    const studentAttendance = studentData[studentName];
    if (isStudentAttendance(studentAttendance)) {
      if (studentAttendance.attended.includes(day)) {
        return 'attendance__cell_attended';
      } else if (studentAttendance.spravka.includes(day)) {
        return 'attendance__cell_spravka';
      } else if (studentAttendance.unattended.includes(day)) {
        return 'attendance__cell_unattended';
      }
    }
    return 'attendance__cell';
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
            {Object.keys(studentData).map((studentName, rowIndex) => (
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
                          <div className="item">
                            <div className="square green"></div>
                            <div>Посетил</div>
                          </div>
                          <div className="item">
                            <div className="square red"></div>
                            <div>Пропустил</div>
                          </div>
                          <div className="item">
                            <div className="square yellow"></div>
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
      <button className="attendance__save_button">Сохранить</button>
    </div>
  );
};

export default AttendanceTable;
