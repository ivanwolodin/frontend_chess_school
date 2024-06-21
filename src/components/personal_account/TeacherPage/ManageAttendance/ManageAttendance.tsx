import './ManageAttendance.css';

const ManageAttendance: React.FC = () => {
  const items = [
    'АТ11',
    'АТ12',
    'АТ13',
    'СпецВТЧТ',
    'АТВтЧт1',
    'АТВтЧт16',
    'АТ_ПТ14',
    'АТ_ПТ16',
    'СпецВТЧТ',
    'СпецВТЧТ',
  ];

  return (
    <div className="manageattendance__general">
      <div className="manageattendance__main_block">
        <h2 className="manageattendance__title">Группы: </h2>
        <ul className="manageattendance__group_list">
          {items.map((item, index) => (
            <li key={index} className="manageattendance__group_item">
              {item}
            </li>
          ))}
        </ul>
        <div className="manageattendance__month_controls">
          <div className="manageattendance__month_controls_leftarrow"></div>
          <p className="manageattendance__month_controls_monthtitle">Июнь</p>
          <div className="manageattendance__month_controls_rightarrow"></div>
        </div>
      </div>
    </div>
  );
};

export default ManageAttendance;
