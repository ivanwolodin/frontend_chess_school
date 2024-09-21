import React from 'react';

import { Popup } from 'reactjs-popup';

import { months, monthsRus } from '../../../../utils/constants';
import { AttendancePopupProps } from '../../../../utils/interfaces';
import AttendanceTable from '../../TeacherPage/ManageAttendance/AttendanceTable/AttendanceTable';

import './AttendancePopup.css';

const AttendancePopup: React.FC<AttendancePopupProps> = ({
  open,
  selectedItem,
  currentMonth,
  closeModalWithoutSaving,
  closeModalOnSaving,
  handleLeftArrowClick,
  handleRightArrowClick,
  attendanceData,
  groupsInfo,
  changeStudentAttendance,
}) => {
  return (
    <Popup
      open={open}
      onClose={closeModalWithoutSaving}
      closeOnEscape={true}
      closeOnDocumentClick={false}
    >
      <div className="modal">
        <button className="close" onClick={closeModalWithoutSaving}>
          &times;
        </button>
        {selectedItem && (
          <>
            <h3 className="attendancepopup__group_title">{selectedItem}</h3>
          </>
        )}
        <div className="attendancepopup__month_arrows">
          <div
            className="attendancepopup__month_controls_leftarrow"
            onClick={handleLeftArrowClick}
            onKeyDown={() => {}}
            tabIndex={0}
            role="button"
            aria-label="Previous month"
          ></div>
          <p className="attendancepopup__month_controls_monthtitle">
            {monthsRus[currentMonth]}
          </p>
          <div
            className="attendancepopup__month_controls_rightarrow"
            onClick={handleRightArrowClick}
            onKeyDown={() => {}}
            tabIndex={0}
            role="button"
            aria-label="Next month"
          ></div>
        </div>
        {selectedItem && (
          <>
            {attendanceData ? (
              <AttendanceTable
                attendanceInfo={attendanceData}
                classDates={groupsInfo}
                groupName={selectedItem}
                closeModalOnSaving={closeModalOnSaving}
                month={months[currentMonth]}
                changeStudentAttendance={changeStudentAttendance}
              />
            ) : (
              <p className="attendancepopup__no_data">
                Нет данных за этот месяц.
              </p>
            )}
          </>
        )}
      </div>
    </Popup>
  );
};

export default AttendancePopup;
