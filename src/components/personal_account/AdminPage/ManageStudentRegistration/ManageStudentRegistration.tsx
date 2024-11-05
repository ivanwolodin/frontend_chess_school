import React, { useState } from 'react';

import { ManageStudentRegistrationProps } from '../../../../utils/interfaces';
import { AdminPersonalDataTable } from '../../common_comps/PersonalData/PersonalDataTable';
import RegisterNewStudentPopup from '../../utility_popups/RegisterNewStudentPopup/RegisterNewStudentPopup';
import StudentExternalPaymentPopup from '../../utility_popups/StudentExternalPaymentPopup/StudentExternalPaymentPopup';

import './ManageStudentRegistration.css';

const ManageStudentRegistration: React.FC<ManageStudentRegistrationProps> = ({
  data,
  apiService,
}) => {
  const [isRegisterNewStudentPopupOpen, setRegisterNewStudentPopupOpen] =
    useState(false);

  const [isNewPaymentPopupOpen, setNewPaymentPopupOpen] = useState(false);

  const openRegisterPopup = () => {
    setRegisterNewStudentPopupOpen(true);
  };

  const openExternalPaymentPopup = () => {
    setNewPaymentPopupOpen(true);
  };

  const closeRegisterPopup = () => {
    setRegisterNewStudentPopupOpen(false);
  };

  return (
    <>
      <div className="managestudentregistration__general">
        <AdminPersonalDataTable data={data} apiService={apiService} />
        <div className="managestudentregistration__buttons">
          <button
            className="managestudentregistration__button"
            onClick={openRegisterPopup}
          >
            Добавить нового ученика
          </button>
          <button
            className="managestudentregistration__button_payment"
            onClick={openExternalPaymentPopup}
          >
            Добавить новую оплату
          </button>
        </div>
      </div>
      {isRegisterNewStudentPopupOpen && (
        <RegisterNewStudentPopup
          open={isRegisterNewStudentPopupOpen}
          closeModal={closeRegisterPopup}
          apiService={apiService}
        />
      )}
      {isNewPaymentPopupOpen && (
        <StudentExternalPaymentPopup
          onClose={() => setNewPaymentPopupOpen(false)}
          apiService={apiService}
        />
      )}
    </>
  );
};

export default ManageStudentRegistration;
