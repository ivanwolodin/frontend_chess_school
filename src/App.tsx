import { useRef } from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import AboutSchool from './components/landing/AboutSchool/AboutSchool';
import AdmissionForm from './components/landing/AdmissionForm/AdmissionForm';
import CookieNotification from './components/landing/CookieNotification/CookieNotification';
import Footer from './components/landing/Footer/Footer';
import Header from './components/landing/Header/Header';
import NewYearAdmission from './components/landing/NewYearAdmission/NewYearAdmission';
import Reviews from './components/landing/Reviews/Reviews';
import Schedule from './components/landing/Schedule/Schedule';
import ScheduleCommercial from './components/landing/ScheduleCommercial/ScheduleCommercial';
import SecondHeader from './components/landing/SecondHeader/SecondHeader';
import SignIn from './components/landing/SignIn/SignIn';
import TeachersCards from './components/landing/TeachersCards/TeachersCards';
import VideoSection from './components/landing/VideoSection/VideoSection';
import WhyWe from './components/landing/WhyWe/WhyWe';

function App() {
  const admissionFormRef = useRef<HTMLDivElement | null>(null);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <SecondHeader />
                <NewYearAdmission
                  scrollToForm={() =>
                    admissionFormRef.current?.scrollIntoView({
                      behavior: 'smooth',
                    })
                  }
                />
                <WhyWe />
                <ScheduleCommercial />
                <TeachersCards />
                <VideoSection videoId="gor6dptvj1Q" />
                <AdmissionForm scrollRef={admissionFormRef} />
                <Reviews />
                <Footer />
                <CookieNotification />
              </>
            }
          />
          <Route path="/log_in" element={<SignIn />} />
          <Route path="/about" element={<AboutSchool />} />
          <Route path="/schedule" element={<Schedule />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
