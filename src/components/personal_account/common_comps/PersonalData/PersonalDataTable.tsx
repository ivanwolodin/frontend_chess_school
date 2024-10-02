import React, { useState } from 'react';

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
  AdminPersonalTableRowData,
} from '../../../../utils/interfaces';
import AllStudentDataPopup from '../../utility_popups/AllStudentDataPopup/AllStudentDataPopup';

const AdminPersonalDataTable: React.FC<AdminPersonalDataTableProps> = ({
  data,
  apiService,
}) => {
  const [showAllStudentDataPopup, setShowAllStudentDataPopup] = useState(false);
  const [studentId, setStudentId] = useState(0);
  const [studentName, setStudentName] = useState('Имя Неизвестно');
  const handleRowClicked = (row: AdminPersonalTableRowData) => {
    console.log(`Имя: ${row.name}, Возраст: ${row.usual_price}`);
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
