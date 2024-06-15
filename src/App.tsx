import { BrowserRouter, Routes, Route } from 'react-router-dom';

import AdmissionForm from './components/landing/AdmissionForm/AdmissionForm';
import CookieNotification from './components/landing/CookieNotification/CookieNotification';
import Footer from './components/landing/Footer/Footer';
import Header from './components/landing/Header/Header';
import HorizontalLine from './components/landing/HorizontalLine/HorizontalLine';
import InfoTinyCards from './components/landing/InfoTinyCards/InfoTinyCards';
import Intro from './components/landing/Intro/Intro';
import Reviews from './components/landing/Reviews/Reviews';
import SliderNews from './components/landing/SliderNews/SliderNews';
import TeachersCards from './components/landing/TeachersCards/TeachersCards';
import VideoSection from './components/landing/VideoSection/VideoSection';
import WeAreTrustedBy from './components/landing/WeAreTrustedBy/WeAreTrustedBy';
import YandexMap from './components/landing/YandexMap/YandexMap';
import SignIn from './components/personal_account/SignIn/SignIn';

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
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
