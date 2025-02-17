import { useEffect } from 'react';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import HorizontalLine from '../HorizontalLine/HorizontalLine';
import InfoTinyCards from '../InfoTinyCards/InfoTinyCards';
import Intro from '../Intro/Intro';
import SliderNews from '../SliderNews/SliderNews';
// import Snowfall from '../SnowFall/SnowFall';
import StickyNewYearFooter from '../StickyNewYearFooter/StickyNewYearFooter';
import WeAreTrustedBy from '../WeAreTrustedBy/WeAreTrustedBy';
import YandexMap from '../YandexMap/YandexMap';

import './AboutSchool.css';

const AboutSchool = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  useEffect(() => {
    scrollToTop();
  });
  return (
    <>
      {/* <Snowfall /> */}
      <Header />
      <Intro />
      <InfoTinyCards />
      <HorizontalLine />
      <SliderNews />
      <WeAreTrustedBy />
      <HorizontalLine />
      <YandexMap />
      <HorizontalLine />
      <Footer />
      <StickyNewYearFooter />
    </>
  );
};

export default AboutSchool;
