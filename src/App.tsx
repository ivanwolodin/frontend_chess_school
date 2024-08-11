import { BrowserRouter, Routes, Route } from 'react-router-dom';

import AboutSchool from './components/landing/AboutSchool/AboutSchool';
import AdmissionForm from './components/landing/AdmissionForm/AdmissionForm';
import CookieNotification from './components/landing/CookieNotification/CookieNotification';
import Footer from './components/landing/Footer/Footer';
import Header from './components/landing/Header/Header';
// import HorizontalLine from './components/landing/HorizontalLine/HorizontalLine';
import NewYearAdmission from './components/landing/NewYearAdmission/NewYearAdmission';
import Reviews from './components/landing/Reviews/Reviews';
import ScheduleCommercial from './components/landing/ScheduleCommercial/ScheduleCommercial';
import SecondHeader from './components/landing/SecondHeader/SecondHeader';
import TeachersCards from './components/landing/TeachersCards/TeachersCards';
import VideoSection from './components/landing/VideoSection/VideoSection';
// import WeAreTrustedBy from './components/landing/WeAreTrustedBy/WeAreTrustedBy';
import WhyWe from './components/landing/WhyWe/WhyWe';
// import YandexMap from './components/landing/YandexMap/YandexMap';
import SignIn from './components/personal_account/common_comps/SignIn/SignIn';

// import MainStudentPage from './components/personal_account/StudentPage/MainStudentPage/MainStudentPage';
// import MainTeacherPage from './components/personal_account/TeacherPage/MainTeacherPage/MainTeacherPage';

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
                <SecondHeader />
                <NewYearAdmission />
                <WhyWe />
                <ScheduleCommercial />
                <TeachersCards />
                <VideoSection videoId="gor6dptvj1Q" />
                <AdmissionForm />
                <Reviews />

                <Footer />
                <CookieNotification />
              </>
            }
          />
          <Route path="/log_in" element={<SignIn />} />
          <Route path="/about" element={<AboutSchool />} />
          {/* <Route path="/teacher" element={<MainTeacherPage />} /> */}
          {/* <Route path="/student" element={<MainStudentPage />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
