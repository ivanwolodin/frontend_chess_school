import React from 'react';

import { TeacherPersonalDataTableProps } from '../../../../utils/interfaces';
import { TeacherPersonalDataTable } from '../PersonalData/PersonalDataTable';

import './TeacherPersonalData.css';

const TeacherPersonalData: React.FC<TeacherPersonalDataTableProps> = ({
  data,
}) => {
  return (
    <div className="teacherpersonaldata__general">
      <TeacherPersonalDataTable data={data} />
    </div>
  );
};

export default TeacherPersonalData;
