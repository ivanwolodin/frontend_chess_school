import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './NewsCards.css';
import NewsCard from '../NewsCard/NewsCard';
import { newsData } from '../../utils/constants';

export default function NewsCards() {
  const settings = {
    dots: true,
    infinite: false, // Включите бесконечный цикл
    dotsClass: 'slick-dots slick-thumb',
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: <button className="slick-prev">&#10094;</button>,
    nextArrow: <button className="slick-next">&#10095;</button>,
  };

  return (
    <div className="news_cards">
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
    </div>
  );
}
