import { useEffect, useRef, useState } from 'react';

import AdmissionForm from '../AdmissionForm/AdmissionForm';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import ScheduleTable from '../ScheduleTable/ScheduleTable';

import './Schedule.css';

const Schedule = () => {
  const [scrollToAdmissionForm, setScrollToAdmissionForm] = useState(false);
  const [cellData, setCellData] = useState({ group: '', day: '', time: '' });
  const scrollRef = useRef<HTMLElement>(null);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    scrollToTop();
  }, []);

  useEffect(() => {
    if (scrollToAdmissionForm && scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: 'smooth' });
      setScrollToAdmissionForm(false);
    }
  }, [scrollToAdmissionForm]);

  const handleCellClick = (group: string, day: string, time: string) => {
    setCellData({ group, day, time });
    setScrollToAdmissionForm(true);
  };

  return (
    <>
      <Header />
      <ScheduleTable onCellClick={handleCellClick} />
      <AdmissionForm scrollRef={scrollRef} cellData={cellData} />
      <Footer />
    </>
  );
};

export default Schedule;
