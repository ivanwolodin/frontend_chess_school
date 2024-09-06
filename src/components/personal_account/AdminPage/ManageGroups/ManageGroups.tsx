import React from 'react';

import { GroupDataTableProps } from '../../../../utils/interfaces';
import { GroupDataTable } from '../../common_comps/PersonalData/PersonalDataTable';

import './ManageGroups.css';

const ManageGroups: React.FC<GroupDataTableProps> = ({ data }) => {
  return (
    <>
      <div className="managegroups__general">
        <GroupDataTable data={data} />
      </div>
    </>
  );
};

export default ManageGroups;
