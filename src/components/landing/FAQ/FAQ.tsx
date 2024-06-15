import React from 'react';
import './FAQ.css';

const FAQ: React.FC = () => {
  return (
    <div className="feedback-container">
      <h2>Отзывы</h2>

      <details className="feedback">
        <summary>Отзыв 1</summary>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
          sagittis quam. Suspendisse potenti.
        </p>
      </details>

      <details className="feedback">
        <summary>Отзыв 2</summary>
        <p>
          Nulla facilisi. Donec ac elit non justo elementum feugiat sit amet at
          lorem. Maecenas vitae neque in urna dictum bibendum.
        </p>
      </details>

      <details className="feedback">
        <summary>Отзыв 3</summary>
        <p>
          Donec vel ligula et quam tincidunt faucibus. Maecenas non turpis nec
          nulla tristique dictum.
        </p>
      </details>

      <details className="feedback">
        <summary>Отзыв 4</summary>
        <p>
          Duis et quam vel sapien vehicula ultrices. Phasellus sit amet lectus
          non dolor egestas ullamcorper eu ac dui.
        </p>
      </details>
    </div>
  );
};

export default FAQ;
