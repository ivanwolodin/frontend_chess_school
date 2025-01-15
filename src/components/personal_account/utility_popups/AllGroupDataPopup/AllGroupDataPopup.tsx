import { useEffect, useState } from 'react';

import { AllGroupDataPopupProps } from '../../../../utils/interfaces';
import './AllGroupDataPopup.css';

interface StudentData {
  student_name: string;
  paid: number;
  debt: number;
  birth_day: string;
}

function AllGroupDataPopup({ onClose, groupTitle }: AllGroupDataPopupProps) {
  const [students, setStudents] = useState<StudentData[]>([]);
  const formatDate = (dateString: string): string => {
    const [year, month, day] = dateString.split('-'); // Предполагаем, что дата в формате год-месяц-день
    return `${day}.${month}.${year}`;
  };

  useEffect(() => {
    const groupsData = JSON.parse(
      localStorage.getItem('groupsPaidData') || '{}',
    );

    const groupData = groupsData[groupTitle] || [];

    const sortedData = groupData.sort((a: StudentData, b: StudentData) =>
      a.student_name.localeCompare(b.student_name),
    );
    console.log(sortedData);
    setStudents(sortedData);
  }, [groupTitle]);

  return (
    <div className="info__popup">
      <div className="info__popup_content">
        <h2 className="info__popup_title">{groupTitle}</h2>
        <table className="info__popup_table">
          <thead>
            <tr>
              <th>Фамилия</th>
              <th>Оплачено</th>
              <th>Долг</th>
              <th>Дата рождения</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={index}>
                <td>{student.student_name}</td>
                <td>{student.paid}</td>
                <td>{student.debt}</td>
                <td>{formatDate(student.birth_day)}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="info__popup_close" onClick={onClose}>
          Закрыть
        </button>
      </div>
    </div>
  );
}

export default AllGroupDataPopup;
