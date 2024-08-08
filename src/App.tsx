import { BrowserRouter, Routes, Route } from 'react-router-dom';

import AdmissionForm from './components/landing/AdmissionForm/AdmissionForm';
import CookieNotification from './components/landing/CookieNotification/CookieNotification';
import Footer from './components/landing/Footer/Footer';
import Header from './components/landing/Header/Header';
import HorizontalLine from './components/landing/HorizontalLine/HorizontalLine';
import InfoTinyCards from './components/landing/InfoTinyCards/InfoTinyCards';
import Intro from './components/landing/Intro/Intro';
import NewYearAdmission from './components/landing/NewYearAdmission/NewYearAdmission';
import Reviews from './components/landing/Reviews/Reviews';
import SliderNews from './components/landing/SliderNews/SliderNews';
import TeachersCards from './components/landing/TeachersCards/TeachersCards';
import VideoSection from './components/landing/VideoSection/VideoSection';
import WeAreTrustedBy from './components/landing/WeAreTrustedBy/WeAreTrustedBy';
import WhyWe from './components/landing/WhyWe/WhyWe';
import YandexMap from './components/landing/YandexMap/YandexMap';
import SignIn from './components/personal_account/common_comps/SignIn/SignIn';
import MainStudentPage from './components/personal_account/StudentPage/MainStudentPage/MainStudentPage';
import MainTeacherPage from './components/personal_account/TeacherPage/MainTeacherPage/MainTeacherPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <NewYearAdmission />
                <WhyWe />
                <Intro />
                <InfoTinyCards />
                <HorizontalLine />
                <SliderNews />
                <TeachersCards />
                <VideoSection videoId="gor6dptvj1Q" />
                <WeAreTrustedBy />
                <AdmissionForm />
                <Reviews />
                <YandexMap />
                <HorizontalLine />
                <Footer />
                <CookieNotification />
              </>
            }
          />
          <Route path="/log_in" element={<SignIn />} />
          <Route path="/teacher" element={<MainTeacherPage />} />
          <Route path="/student" element={<MainStudentPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
