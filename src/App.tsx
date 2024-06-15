import Header from './components/landing/Header/Header';
import Intro from './components/landing/Intro/Intro';
import InfoTinyCards from './components/landing/InfoTinyCards/InfoTinyCards';
import HorizontalLine from './components/landing/HorizontalLine/HorizontalLine';
import SliderNews from './components/landing/SliderNews/SliderNews';
import TeachersCards from './components/landing/TeachersCards/TeachersCards';
import VideoSection from './components/landing/VideoSection/VideoSection';
import AdmissionForm from './components/landing/AdmissionForm/AdmissionForm';
import YandexMap from './components/landing/YandexMap/YandexMap';
import Reviews from './components/landing/Reviews/Reviews';
import Footer from './components/landing/Footer/Footer';
import CookieNotification from './components/landing/CookieNotification/CookieNotification';
import WeAreTrustedBy from './components/landing/WeAreTrustedBy/WeAreTrustedBy';

import './App.css';

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
