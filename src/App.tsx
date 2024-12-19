import { useEffect, useRef, useState } from 'react';

import { decodeToken } from 'react-jwt';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ApiService from './api/ApiService';
import ErrorPage from './components/general/ErrorPage/ErrorPage';
import NotFoundPage from './components/general/NotFoundPage/NotFoundPage';
import AboutPrograms from './components/landing/AboutPrograms/AboutPrograms';
import AboutSchool from './components/landing/AboutSchool/AboutSchool';
import AdmissionForm from './components/landing/AdmissionForm/AdmissionForm';
import CookieNotification from './components/landing/CookieNotification/CookieNotification';
import Footer from './components/landing/Footer/Footer';
import Header from './components/landing/Header/Header';
import NewYearAdmission from './components/landing/NewYearAdmission/NewYearAdmission';
import PasswordReset from './components/landing/PasswordReset/PasswordReset';
import Reviews from './components/landing/Reviews/Reviews';
import Schedule from './components/landing/Schedule/Schedule';
import ScheduleCommercial from './components/landing/ScheduleCommercial/ScheduleCommercial';
import SecondHeader from './components/landing/SecondHeader/SecondHeader';
import SignIn from './components/landing/SignIn/SignIn';
import Snowfall from './components/landing/SnowFall/SnowFall';
import StickyNewYearFooter from './components/landing/StickyNewYearFooter/StickyNewYearFooter';
import TeachersCards from './components/landing/TeachersCards/TeachersCards';
import VideoSection from './components/landing/VideoSection/VideoSection';
import WeAreTrustedBy from './components/landing/WeAreTrustedBy/WeAreTrustedBy';
import WhyWe from './components/landing/WhyWe/WhyWe';
import { AuthProvider } from './components/personal_account/AuthContext/AuthContext';
import PrivateWrapper from './components/personal_account/PrivateWrapper/PrivateWrapper';
import { TokenData, UserRole } from './utils/interfaces';

function App() {
  const admissionFormRef = useRef<HTMLDivElement | null>(null);
  const apiService = new ApiService();

  const initialRole = () => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      const decodedToken = decodeToken<TokenData>(token);
      return decodedToken?.role || 'unauthorized';
    }
    return 'unauthorized';
  };

  const [userRole, setUserRole] = useState<UserRole>({ role: initialRole() });

  const handleUserRole = (role: UserRole) => {
    setUserRole({ role: role.role });
  };

  const checkAndSetUserRole = () => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      const decodedToken = decodeToken<TokenData>(token);
      if (decodedToken?.role) {
        handleUserRole({ role: decodedToken.role });
      }
    } else {
      handleUserRole({ role: 'unauthorized' });
    }
  };

  useEffect(() => {
    checkAndSetUserRole();
  }, []);

  return (
    <>
      <BrowserRouter>
        <AuthProvider apiService={apiService} handleUSerRole={handleUserRole}>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Snowfall />
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
                  <AboutPrograms />
                  <TeachersCards />
                  <WeAreTrustedBy />
                  <VideoSection videoId="gor6dptvj1Q" />
                  <AdmissionForm
                    scrollRef={admissionFormRef}
                    apiService={apiService}
                  />
                  <Reviews />
                  <Footer />
                  <CookieNotification />
                  <StickyNewYearFooter />
                </>
              }
            />
            <Route path="/about" element={<AboutSchool />} />
            <Route
              path="/schedule"
              element={<Schedule apiService={apiService} />}
            />

            <Route
              path="/log_in"
              element={<SignIn apiService={apiService} />}
            />
            <Route
              path="/personal_account"
              element={
                <PrivateWrapper apiService={apiService} userRole={userRole} />
              }
            />
            <Route
              path="/reset_pswd_link"
              element={<PasswordReset apiService={apiService} />}
            />
            <Route path="/500" element={<ErrorPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
