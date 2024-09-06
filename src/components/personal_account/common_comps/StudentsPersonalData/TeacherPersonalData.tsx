import React from 'react';

import { PersonalDataTableProps } from '../../../../utils/interfaces';
import { PersonalDataTable } from '../PersonalData/PersonalDataTable';

import './TeacherPersonalData.css';

const TeacherPersonalData: React.FC<PersonalDataTableProps> = ({ data }) => {
  return (
    <div className="teacherpersonaldata__general">
      <PersonalDataTable data={data} />
    </div>
  );
};

export default TeacherPersonalData;
