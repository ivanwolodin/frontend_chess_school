import React from 'react';

import './AttendanceTable.css';
import { StudentAttendance, MonthData } from '../../../../utils/interfaces';

interface Props extends MonthData {}

const AttendanceTable: React.FC<Props> = ({ full, ...studentData }) => {
  const handleCellClick = (studentName: string, day: string) => {
    console.log(`Clicked cell for ${studentName} on day ${day}`);
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
            {Object.keys(studentData).map((studentName, rowIndex) => (
              <tr key={rowIndex}>
                <td className="attendance__student_name">{studentName}</td>
                {full.map((day, colIndex) => (
                  <td
                    key={colIndex}
                    className={getCellClassName(studentName, day)}
                    onClick={() => handleCellClick(studentName, day)}
                  ></td>
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
