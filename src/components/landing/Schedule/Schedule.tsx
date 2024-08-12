import { useEffect } from 'react';

import AdmissionForm from '../AdmissionForm/AdmissionForm';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import ScheduleTable from '../ScheduleTable/ScheduleTable';

import './Schedule.css';

const Schedule = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  useEffect(() => {
    scrollToTop();
  });
  return (
    <>
      <Header />
      <ScheduleTable />
      <AdmissionForm />
      <Footer />
    </>
  );
};

export default Schedule;
