import { useState, useEffect } from 'react';

import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './SliderNews.css';
import { newsData } from '../../../utils/constants';
import NewsCard from '../NewsCard/NewsCard';

export default function SliderNews() {
  const [slidesToShow, setSlidesToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const settings = {
    dots: true,
    infinite: false,
    dotsClass: 'slick-dots slick-thumb',
    speed: 500,
    slidesToShow,
    slidesToScroll: 1,
    arrows: false,
    prevArrow: <button className="slick-prev">&#10094;</button>,
    nextArrow: <button className="slick-next">&#10095;</button>,
  };

  return (
    <section className="news_cards">
      <div className="slider-container">
        <Slider {...settings}>
          {newsData.map((item, index) => (
            <NewsCard
              key={index}
              title={item.title}
              src={item.src}
              text={item.text}
              date={item.date}
            />
          ))}
        </Slider>
      </div>
    </section>
  );
}
