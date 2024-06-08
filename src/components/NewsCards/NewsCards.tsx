import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './NewsCards.css';
import NewsCard from './NewsCard';

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
    <div className="slider-container">
      <Slider {...settings}>
        <NewsCard title="1" />
        <NewsCard title="2" />
        <NewsCard title="3" />
        <NewsCard title="4" />
        <NewsCard title="5" />
        <NewsCard title="6" />
        <NewsCard title="7" />
      </Slider>
    </div>
  );
}
