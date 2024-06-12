import Header from './components/Header/Header';
import Intro from './components/Intro/Intro';
import InfoTinyCards from './components/InfoTinyCards/InfoTinyCards';
import HorizontalLine from './components/HorizontalLine/HorizontalLine';
import SliderNews from './components/SliderNews/SliderNews';
import TeachersCards from './components/TeachersCards/TeachersCards';
import VideoSection from './components/VideoSection/VideoSection';
import AdmissionForm from './components/AdmissionForm/AdmissionForm';
import YandexMap from './components/YandexMap/YandexMap';
import Reviews from './components/Reviews/Reviews';
import Footer from './components/Footer/Footer';

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
      <AdmissionForm />
      <Reviews />
      <YandexMap />
      <HorizontalLine />
      <Footer />
    </div>
  );
}

export default App;
