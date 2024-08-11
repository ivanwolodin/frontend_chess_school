import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import HorizontalLine from '../HorizontalLine/HorizontalLine';
import InfoTinyCards from '../InfoTinyCards/InfoTinyCards';
import Intro from '../Intro/Intro';
import SliderNews from '../SliderNews/SliderNews';
import WeAreTrustedBy from '../WeAreTrustedBy/WeAreTrustedBy';
import YandexMap from '../YandexMap/YandexMap';

import './AboutSchool.css';

const AboutSchool = () => {
  return (
    <>
      <Header />
      <Intro />
      <InfoTinyCards />
      <HorizontalLine />
      <SliderNews />
      <WeAreTrustedBy />
      <YandexMap />
      <HorizontalLine />
      <Footer />
    </>
  );
};

export default AboutSchool;
