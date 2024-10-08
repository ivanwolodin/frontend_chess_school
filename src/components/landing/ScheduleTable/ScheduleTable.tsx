import { scheduleData } from '../../../utils/constants';
import './ScheduleTable.css';

const handleCellClick = (
  group: string,
  day: string,
  time: string,
  onCellClick: (group: string, day: string, time: string) => void,
) => {
  onCellClick(group, day, time);
};

const renderCell = (
  group: string,
  day: string,
  time: string,
  cellIndex: number,
  onCellClick: (group: string, day: string, time: string) => void,
) => {
  const hasData = !!time;
  const cellClass = hasData ? 'cell-clickable cell-link' : '';

  return (
    <td
      key={cellIndex}
      className={cellClass}
      onClick={() => hasData && handleCellClick(group, day, time, onCellClick)}
    >
      {time}
    </td>
  );
};

const renderTableRows = (
  onCellClick: (group: string, day: string, time: string) => void,
) => {
  const days = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];

  return scheduleData.map((entry, rowIndex) => {
    const cells = days.map((day, cellIndex) => {
      const timeEntry = entry.times.find((time) => time.day === day);
      return timeEntry ? (
        renderCell(entry.group, day, timeEntry.time, cellIndex, onCellClick)
      ) : (
        <td key={cellIndex}></td>
      );
    });

    return (
      <tr key={rowIndex}>
        <td>{entry.group}</td>
        {cells}
      </tr>
    );
  });
};

const ScheduleTable = ({
  onCellClick,
}: {
  onCellClick: (group: string, day: string, time: string) => void;
}) => (
  <div className="schedule-table__general">
    <h1 className="schedule-table__title">Расписание</h1>
    <p className="schedule-table__text">Учебный год 2024-2025</p>
    <table className="schedule-table__content">
      <thead>
        <tr>
          <th>Группа</th>
          <th>ПН</th>
          <th>ВТ</th>
          <th>СР</th>
          <th>ЧТ</th>
          <th>ПТ</th>
          <th>СБ</th>
          <th>ВС</th>
        </tr>
      </thead>
      <tbody>{renderTableRows(onCellClick)}</tbody>
    </table>
  </div>
);

export default ScheduleTable;
