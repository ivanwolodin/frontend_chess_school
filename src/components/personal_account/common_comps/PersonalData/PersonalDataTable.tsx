import React from 'react';

import DataTable from 'react-data-table-component';
import './PersonalDataTable.css';

import { personalDataColumnsSettings } from '../../../../utils/constants';
import {
  PersonalDataTableProps,
  PersonalTableRowData,
} from '../../../../utils/interfaces';

const PersonalDataTable: React.FC<PersonalDataTableProps> = ({ data }) => {
  const handleRowClicked = (row: PersonalTableRowData) => {
    alert(`Имя: ${row.name}, Возраст: ${row.fat}`);
  };

  return (
    <div className="personaldatatable__general">
      <DataTable
        className="personaldatatable__data"
        title="Персональные данные"
        data={data}
        columns={personalDataColumnsSettings}
        pagination
        paginationPerPage={10}
        onRowClicked={handleRowClicked}
      />
    </div>
  );
};

export default PersonalDataTable;
