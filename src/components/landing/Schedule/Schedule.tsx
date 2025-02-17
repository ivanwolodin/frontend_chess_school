import { useEffect, useRef, useState } from 'react';

import ApiService from '../../../api/ApiService';
import AdmissionForm from '../AdmissionForm/AdmissionForm';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Prices from '../Prices/Prices';
import ScheduleTable from '../ScheduleTable/ScheduleTable';
// import Snowfall from '../SnowFall/SnowFall';
// import StickyNewYearFooter from '../StickyNewYearFooter/StickyNewYearFooter';

import './Schedule.css';

interface ScheduleProps {
  apiService: ApiService;
}
const Schedule: React.FC<ScheduleProps> = ({ apiService }) => {
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

  const handlePriceClick = (group: string, day: string, time: string) => {
    setCellData({ group, day, time });
    setScrollToAdmissionForm(true);
  };

  return (
    <>
      {/* <Snowfall /> */}
      <Header />
      <ScheduleTable onCellClick={handleCellClick} />
      <Prices handlePriceClick={handlePriceClick} />
      <AdmissionForm
        scrollRef={scrollRef}
        cellData={cellData}
        apiService={apiService}
      />
      <Footer />
      {/* <StickyNewYearFooter /> */}
    </>
  );
};

export default Schedule;
