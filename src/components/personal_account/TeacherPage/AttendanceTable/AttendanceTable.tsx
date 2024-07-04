/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';

import './AttendanceTable.css';
import { StudentAttendance, MonthData } from '../../../../utils/interfaces';

interface Props extends MonthData {}

const AttendanceTable: React.FC<Props> = ({ full, ...studentData }) => {
  const [isLiOpened, setLiOpened] = useState(false);
  const [selectedCell, setSelectedCell] = useState<{
    studentName: string;
    day: string;
  } | null>(null);

  const handleCellClick = (studentName: string, day: string) => {
    const className = getCellClassName(studentName, day);
    if (className !== 'attendance__cell') {
      setSelectedCell({ studentName, day });
    }
  };

  const handleStatusChange = (status: string) => {
    if (selectedCell) {
      const { studentName, day } = selectedCell;
      const studentAttendance = studentData[studentName] as StudentAttendance;
      if (studentAttendance) {
        // Update the attendance status
        studentAttendance.attended = studentAttendance.attended.filter(
          (d: string) => d !== day,
        );
        studentAttendance.spravka = studentAttendance.spravka.filter(
          (d: string) => d !== day,
        );
        studentAttendance.unattended = studentAttendance.unattended.filter(
          (d: string) => d !== day,
        );

        if (status === 'attended') {
          studentAttendance.attended.push(day);
        } else if (status === 'spravka') {
          studentAttendance.spravka.push(day);
        } else if (status === 'unattended') {
          studentAttendance.unattended.push(day);
        }
      }
      setSelectedCell(null);
      setLiOpened(!isLiOpened);
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

  return (
    <div className="attendance__general">
      <div className="attendance__table">
        <table>
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
            {Object.keys(studentData).map((studentName, rowIndex) => {
              const studentAttendance = studentData[studentName];
              if (!isStudentAttendance(studentAttendance)) return null;
              return (
                <tr key={rowIndex}>
                  <td className="attendance__student_name">{studentName}</td>
                  {full.map((day, colIndex) => (
                    <td
                      key={colIndex}
                      className={getCellClassName(studentName, day)}
                      onClick={() => handleCellClick(studentName, day)}
                    >
                      {selectedCell &&
                        selectedCell.studentName === studentName &&
                        selectedCell.day === day && (
                          <div
                            className={`${isLiOpened ? '' : 'attendance__dropdown'}`}
                          >
                            <div onClick={() => handleStatusChange('attended')}>
                              Посетил
                            </div>
                            <div
                              onClick={() => handleStatusChange('unattended')}
                            >
                              Пропустил
                            </div>
                            <div onClick={() => handleStatusChange('spravka')}>
                              Болел
                            </div>
                          </div>
                        )}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <button className="attendance__save_button">Сохранить</button>
    </div>
  );
};

export default AttendanceTable;
