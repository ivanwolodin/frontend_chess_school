import { useEffect } from 'react';
import './SnowFall.css';

import snowflakeImage from '../../../assets/snowflake/snowflake.png';

const Snowfall = () => {
  useEffect(() => {
    const snowContainer = document.createElement('div');
    snowContainer.classList.add('snow-container');
    document.body.appendChild(snowContainer);

    const snowflakes = Array.from({ length: 100 }).map(() => {
      const snowflake = document.createElement('img');
      snowflake.classList.add('snowflake');
      snowflake.src = snowflakeImage;
      snowflake.alt = 'snowflake';
      snowflake.style.position = 'absolute';
      snowflake.style.top = `${Math.random() * -100}px`;
      snowflake.style.left = `${Math.random() * 100}vw`;
      snowflake.style.animationDuration = `${Math.random() * 0.5 + 5}s`;
      snowflake.style.animationDelay = `${Math.random() * 5}s`;
      snowflake.style.width = `${Math.random() * 15 + 10}px`;
      snowflake.style.height = snowflake.style.width;

      snowContainer.appendChild(snowflake);
      return snowflake;
    });

    return () => {
      snowflakes.forEach((snowflake) => snowflake.remove());
      snowContainer.remove();
    };
  }, []);

  return null;
};

export default Snowfall;
