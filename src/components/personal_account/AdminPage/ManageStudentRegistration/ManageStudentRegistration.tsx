import React, { useState } from 'react';

import { ManageStudentRegistrationProps } from '../../../../utils/interfaces';
import { PersonalDataTable } from '../../common_comps/PersonalData/PersonalDataTable';
import RegisterNewStudentPopup from '../../utility_popups/RegisterNewStudentPopup/RegisterNewStudentPopup';

import './ManageStudentRegistration.css';

const ManageStudentRegistration: React.FC<ManageStudentRegistrationProps> = ({
  data,
  apiService,
}) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <>
      <div className="managestudentregistration__general">
        <PersonalDataTable data={data} />
        <button
          className="managestudentregistration__button"
          onClick={openPopup}
        >
          Добавить нового ученика
        </button>
      </div>
      {isPopupOpen && (
        <RegisterNewStudentPopup
          open={isPopupOpen}
          closeModal={closePopup}
          apiService={apiService}
        />
      )}
    </>
  );
};

export default ManageStudentRegistration;
