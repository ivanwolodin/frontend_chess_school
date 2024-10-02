import { useEffect, useState } from 'react';

import Calendar from 'react-calendar';
import { useNavigate } from 'react-router-dom';

import { AllStudentDataPopupProps } from '../../../../utils/interfaces';
import { isTokenValid } from '../../../../utils/usefulFunctions';
import Loader from '../../../general/Loader/Loader';

import './AllStudentDataPopup.css';

interface DayTypes {
  attended: number[];
  spravka: number[];
  unattended: number[];
}

interface MonthData {
  [monthName: string]: DayTypes;
}

interface TileProperties {
  date: Date;
  view: string;
}

interface Payment {
  amount: number;
  date: string;
}

function AllStudentDataPopup({
  onClose,
  apiService,
  studentId,
  studentName,
}: AllStudentDataPopupProps) {
  const navigate = useNavigate();
  const [days, setDays] = useState<MonthData>({});
  const [recommendedSum, setRecommendedSum] = useState(0);
  const [payments, setPayments] = useState<Payment[]>([]); // Состояние для хранения оплат
  const [loading, setLoading] = useState(false);

  const getTileClassName = ({ date, view }: TileProperties) => {
    if (view !== 'month') return '';

    const monthName = date.toLocaleString('ru-RU', { month: 'long' });
    const day = date.getDate();
    const currentDate = new Date();

    if (days[monthName]) {
      if (days[monthName].attended.includes(day)) {
        const classDate = new Date(date.getFullYear(), date.getMonth(), day);

        if (classDate.getTime() > currentDate.getTime()) {
          return 'studying_day';
        }
        return 'attended';
      } else if (days[monthName].spravka.includes(day)) {
        return 'spravka';
      } else if (days[monthName].unattended.includes(day)) {
        return 'unattended';
      }
    }

    return 'day';
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const accessToken = localStorage.getItem('accessToken');
        if (isTokenValid(accessToken)) {
          const student = await apiService.getAllStudentData(studentId);
          if (student) {
            setDays(student.attendance_info);
            setPayments(student.all_payments);
            setRecommendedSum(student.sum_to_pay);
          }
          setLoading(false);
        } else {
          alert('Авторизуйтесь, пожалуйста, заново');
          localStorage.clear();
          navigate('/log_in');
        }
      } catch (error) {
        alert('Не могу получить данные от сервера');
        setLoading(false);
      }
    };

    fetchData();
  }, [studentId]);

  return (
    <div className="allstudentdata__popup">
      <div className="allstudentdata__general">
        <div className="allstudentdata__popup_calendar">
          <h1 className="allstudentdata__popup_student_name">{studentName}</h1>
          <Calendar
            className="studentattendance__calendar"
            locale={'ru-RU'}
            tileClassName={getTileClassName}
            showNeighboringMonth={false}
            minDetail="year"
          />
          <button className="allstudentdata__popup_close" onClick={onClose}>
            Закрыть
          </button>
        </div>
        <div className="allstudentdata__popup_payments">
          <p className="allstudentdata__payments_title">Оплаты</p>
          <ul className="allstudentdata__payments_list">
            {payments.map((payment, index) => (
              <li className="allstudentdata__payments_item" key={index}>
                <span className="allstudentdata__payments_amount">
                  {payment.amount} ₽
                </span>
                <span className="allstudentdata__payments_date">
                  {' '}
                  &nbsp; &nbsp;{payment.date}
                </span>
              </li>
            ))}
          </ul>
          <p className="allstudentdata__recommended_sum">
            Сумма к оплате: {recommendedSum} ₽
          </p>
        </div>
      </div>
      {loading && <Loader />}
    </div>
  );
}

export default AllStudentDataPopup;
