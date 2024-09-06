import React from 'react';

import DataTable from 'react-data-table-component';

import './PersonalDataTable.css';
import {
  groupsDataColumnsSettings,
  personalDataColumnsSettings,
} from '../../../../utils/constants';
import {
  GroupDataTableProps,
  PersonalDataTableProps,
} from '../../../../utils/interfaces';

// Компонент для отображения персональных данных
const PersonalDataTable: React.FC<PersonalDataTableProps> = ({ data }) => {
  return (
    <div className="personaldatatable__general">
      <DataTable
        className="personaldatatable__data"
        title="Персональные данные"
        data={data}
        columns={personalDataColumnsSettings}
        pagination
        paginationPerPage={10}
        paginationRowsPerPageOptions={[10]}
      />
    </div>
  );
};

const GroupDataTable: React.FC<GroupDataTableProps> = ({ data }) => {
  return (
    <div className="groupdatatable__general">
      <DataTable
        className="groupdatatable__data"
        title="Групповые данные"
        data={data}
        columns={groupsDataColumnsSettings}
        pagination
        paginationPerPage={10}
        paginationRowsPerPageOptions={[10]}
      />
    </div>
  );
};

export { PersonalDataTable, GroupDataTable };
