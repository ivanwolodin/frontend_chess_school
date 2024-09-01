import React, { useEffect, useState } from 'react';

import Calendar from 'react-calendar';

import 'react-calendar/dist/Calendar.css';
import './StudentAttendance.css';

interface DayTypes {
  attended: number[];
  spravka: number[];
  unattended: number[];
}

interface MonthData {
  [monthName: string]: DayTypes; // Ожидается объект с ключами типа string (имена месяцев)
}

interface TileProperties {
  date: Date;
  view: string;
}

const StudentAttendance: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const minDate = new Date(currentYear - 1, 1, 1);
  const maxDate = new Date(currentYear + 1, 12, 31);

  const [days, setDays] = useState<MonthData>({
    июль: {
      attended: [3, 4, 5],
      spravka: [1, 19],
      unattended: [29],
    },
    август: {
      attended: [1, 4, 5],
      spravka: [2, 18],
      unattended: [29],
    },
  });

  const getTileClassName = ({ date, view }: TileProperties) => {
    if (view !== 'month') return '';

    const monthName = date.toLocaleString('ru-RU', { month: 'long' });
    const day = date.getDate();

    if (days[monthName]) {
      if (days[monthName].attended.includes(day)) {
        return 'attended';
      } else if (days[monthName].spravka.includes(day)) {
        return 'spravka';
      } else if (days[monthName].unattended.includes(day)) {
        return 'unattended';
      }
    }

    return 'day';
  };
  useEffect(() => {
    const attendanceData = localStorage.getItem('attendanceInfo');
    if (attendanceData) {
      const parsedData: MonthData = JSON.parse(attendanceData);
      setDays(parsedData);
    }
  }, []);

  return (
    <>
      <div className="studentattendance__general">
        <h1 className="studentattendance__title">Статистика посещений</h1>
        <Calendar
          className="studentattendance__calendar"
          locale={'ru-RU'}
          tileClassName={getTileClassName}
          showNeighboringMonth={false}
          // onClickDay={handleDateClick}
          minDetail="year"
          minDate={minDate}
          maxDate={maxDate}
        />
      </div>
    </>
  );
};

export default StudentAttendance;
