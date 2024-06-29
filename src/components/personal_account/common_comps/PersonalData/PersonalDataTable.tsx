import './PersonalDataTable.css';

import DataTable from 'react-data-table-component';

import { personalDataColumnsSettings } from '../../../../utils/constants';
import { PersonalDataTableProps } from '../../../../utils/interfaces';

const PersonalDataTable: React.FC<PersonalDataTableProps> = ({ data }) => {
  return (
    <div className="personaldatatable__general">
      <DataTable
        className="personaldatatable__data"
        title="Персональные данные"
        data={data}
        columns={personalDataColumnsSettings}
      />
    </div>
  );
};

export default PersonalDataTable;
