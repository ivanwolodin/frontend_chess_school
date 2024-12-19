import React from 'react';
import './StickyNewYearFooter.css';

const StickyNewYearFooter: React.FC = () => {
  return (
    <div className="sticky-new-year-footer">
      <div className="wreaths">
        <img src="/images/wreath-left.png" alt="Новогодний венок слева" />
        <img src="/images/wreath-right.png" alt="Новогодний венок справа" />
      </div>
      <p className="footer-text">
        С Новым годом! Пусть ваши мечты сбываются! 🎄✨
      </p>
    </div>
  );
};

export default StickyNewYearFooter;
