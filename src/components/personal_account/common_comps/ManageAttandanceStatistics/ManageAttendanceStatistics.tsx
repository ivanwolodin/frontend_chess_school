import React, { useState } from 'react';
import './ManageAttandanceStatistics.css';

interface Student {
  id: number;
  name: string;
}

interface Group {
  id: number;
  name: string;
  students: Student[];
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface AttendanceRecord {
  date: string;
  studentId: number;
  status: 'present' | 'absent' | 'sick';
}

const ManageAttendanceStatistics: React.FC = () => {
  const [groups] = useState<Group[]>([
    {
      id: 1,
      name: 'Group 1',
      students: [
        { id: 1, name: 'Student 1' },
        { id: 2, name: 'Student 2' },
      ],
    },
    {
      id: 2,
      name: 'Group 2',
      students: [
        { id: 3, name: 'Student 3' },
        { id: 4, name: 'Student 4' },
      ],
    },
  ]);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [selectedGroup, setSelectedGroup] = useState<Group | null>(null);

  const handleGroupClick = (group: Group) => {
    setSelectedGroup(group);
  };

  return (
    <div className="manage-attendance">
      <div className="manage-attendance__groups">
        {groups.map((group) => (
          // eslint-disable-next-line jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events
          <div
            key={group.id}
            className="manage-attendance__group"
            onClick={() => handleGroupClick(group)}
          >
            {group.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageAttendanceStatistics;
