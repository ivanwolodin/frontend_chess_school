import React from 'react';

import DataTable from 'react-data-table-component';

import './PersonalDataTable.css';
import {
  groupsDataColumnsSettings,
  adminPersonalDataColumnsSettings,
  teacherPersonalDataColumnsSettings,
} from '../../../../utils/constants';
import {
  GroupDataTableProps,
  AdminPersonalDataTableProps,
  TeacherPersonalDataTableProps,
} from '../../../../utils/interfaces';

const AdminPersonalDataTable: React.FC<AdminPersonalDataTableProps> = ({
  data,
}) => {
  return (
    <div className="personaldatatable__general">
      <DataTable
        className="personaldatatable__data"
        title="Персональные данные"
        data={data}
        columns={adminPersonalDataColumnsSettings}
        pagination
        paginationPerPage={10}
        paginationRowsPerPageOptions={[10]}
      />
    </div>
  );
};

const TeacherPersonalDataTable: React.FC<TeacherPersonalDataTableProps> = ({
  data,
}) => {
  return (
    <div className="personaldatatable__general">
      <DataTable
        className="personaldatatable__data"
        title="Персональные данные"
        data={data}
        columns={teacherPersonalDataColumnsSettings}
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

export { AdminPersonalDataTable, GroupDataTable, TeacherPersonalDataTable };
