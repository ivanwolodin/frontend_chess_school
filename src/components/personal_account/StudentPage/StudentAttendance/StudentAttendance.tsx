import React from 'react';

import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './StudentAttendance.css';

interface DayTypes {
  attended: number[];
  spravka: number[];
  unattended: number[];
}

const days: Record<string, DayTypes> = {
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
};

interface TileProperties {
  date: Date;
  view: string;
}

const StudentAttendance: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const minDate = new Date(currentYear - 1, 1, 1);
  const maxDate = new Date(currentYear + 1, 12, 31);

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

  return (
    <>
      <div className="studentattendance__general">
        <div className="studentattendance__additional_info">
          <p className="studentattendance__name">
            Добрый день, <b>Василий Иванов!</b>
          </p>
          <p className="studentattendance__payment_sum">
            В настоящий момент у Вас есть задолженность в размере{' '}
            <b>6700 рублей</b> &#129402;
          </p>
          <button className="studentattendance__exit"> Выйти из ЛК </button>
        </div>
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
