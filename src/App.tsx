import Header from './landing/components/Header/Header';
import Intro from './landing/components/Intro/Intro';
import InfoTinyCards from './landing/components/InfoTinyCards/InfoTinyCards';
import HorizontalLine from './landing/components/HorizontalLine/HorizontalLine';
import SliderNews from './landing/components/SliderNews/SliderNews';
import TeachersCards from './landing/components/TeachersCards/TeachersCards';
import VideoSection from './landing/components/VideoSection/VideoSection';
import AdmissionForm from './landing/components/AdmissionForm/AdmissionForm';
import YandexMap from './landing/components/YandexMap/YandexMap';
import Reviews from './landing/components/Reviews/Reviews';
import Footer from './landing/components/Footer/Footer';
import CookieNotification from './landing/components/CookieNotification/CookieNotification';
import WeAreTrustedBy from './landing/components/WeAreTrustedBy/WeAreTrustedBy';

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
