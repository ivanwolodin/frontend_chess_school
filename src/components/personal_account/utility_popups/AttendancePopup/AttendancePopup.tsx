import React from 'react';

import { Popup } from 'reactjs-popup';

import { months } from '../../../../utils/constants';
import { AttendancePopupProps } from '../../../../utils/interfaces';
import AttendanceTable from '../../TeacherPage/ManageAttendance/AttendanceTable/AttendanceTable';
import './AttendancePopup.css';

const AttendancePopup: React.FC<AttendancePopupProps> = ({
  open,
  selectedItem,
  currentMonth,
  closeModal,
  handleLeftArrowClick,
  handleRightArrowClick,
  attendanceData,
  groupsInfo,
}) => {
  // const getAttendanceForSelectedItem = () => {
  //   if (!selectedItem) return null;

  //   const selectedMonth = months[currentMonth];
  //   const groupData = attendanceData[selectedItem];
  //   // if (!groupData || !groupData[selectedMonth]) return null;

  //   return groupData[selectedMonth];
  // };

  // const attendanceInfo = getAttendanceForSelectedItem();
  // console.log(attendanceData);

  return (
    <Popup
      open={open}
      onClose={closeModal}
      closeOnEscape={true}
      closeOnDocumentClick={false}
    >
      <div className="modal">
        <button className="close" onClick={closeModal}>
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
            {months[currentMonth]}
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
                month={months[currentMonth]}
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
