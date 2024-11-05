import React, { useState } from 'react';

import DataTable from 'react-data-table-component';

import './PersonalDataTable.css';
import {
  groupsDataColumnsSettings,
  adminPersonalDataColumnsSettings,
  teacherPersonalDataColumnsSettings,
  salaryDataColumnsSettings,
} from '../../../../utils/constants';
import {
  GroupDataTableProps,
  AdminPersonalDataTableProps,
  TeacherPersonalDataTableProps,
  AdminPersonalTableRowData,
  TeacherPersonalTableRowData,
  SalaryDataTableProps,
} from '../../../../utils/interfaces';
import AllStudentDataPopup from '../../utility_popups/AllStudentDataPopup/AllStudentDataPopup';

const conditionalRowStyles = [
  {
    when: (row: AdminPersonalTableRowData | TeacherPersonalTableRowData) =>
      row.recommended_sum > 700,
    style: {
      backgroundColor: 'rgba(255, 0, 0, 0.3)',
      // color: 'red',
    },
  },
];

const conditionalAdminRowStyles = [
  {
    when: (row: AdminPersonalTableRowData | TeacherPersonalTableRowData) =>
      row.recommended_sum > 700,
    style: {
      backgroundColor: 'rgba(255, 0, 0, 0.3)',
      // color: 'red',
    },
  },
  {
    when: (row: AdminPersonalTableRowData) => row.status['is_student'] == false,
    style: {
      backgroundColor: 'rgba(10, 10, 10, 0.3)',
      color: 'rgba(0, 0, 0, 0.27)',
    },
  },
];

const AdminPersonalDataTable: React.FC<AdminPersonalDataTableProps> = ({
  data,
  apiService,
}) => {
  const [showAllStudentDataPopup, setShowAllStudentDataPopup] = useState(false);
  const [studentId, setStudentId] = useState(0);
  const [studentName, setStudentName] = useState('Имя Неизвестно');
  const handleRowClicked = (row: AdminPersonalTableRowData) => {
    setStudentId(Number(row.id));
    setShowAllStudentDataPopup(true);
    setStudentName(row.name);
  };
  return (
    <div className="personaldatatable__general">
      <DataTable
        className="personaldatatable__data"
        title="Персональные данные"
        data={data}
        columns={adminPersonalDataColumnsSettings}
        pagination
        paginationPerPage={10}
        onRowClicked={handleRowClicked}
        paginationRowsPerPageOptions={[10, 20, 30, 200]}
        conditionalRowStyles={conditionalAdminRowStyles}
        defaultSortFieldId={2}
        defaultSortAsc={true}
      />
      {showAllStudentDataPopup && (
        <AllStudentDataPopup
          onClose={() => setShowAllStudentDataPopup(false)}
          apiService={apiService}
          studentId={studentId}
          studentName={studentName}
        />
      )}
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
        paginationRowsPerPageOptions={[10, 20, 40]}
        conditionalRowStyles={conditionalRowStyles}
        defaultSortFieldId={1}
        defaultSortAsc={true}
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

const SalaryDataTable: React.FC<SalaryDataTableProps> = ({ data }) => {
  return (
    <div className="groupdatatable__general">
      <DataTable
        className="groupdatatable__data"
        title="Зарплата"
        data={data}
        columns={salaryDataColumnsSettings}
        pagination
        paginationPerPage={10}
        paginationRowsPerPageOptions={[10]}
      />
    </div>
  );
};

export {
  AdminPersonalDataTable,
  GroupDataTable,
  TeacherPersonalDataTable,
  SalaryDataTable,
};
