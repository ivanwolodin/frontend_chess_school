import { useState, useEffect } from 'react';
import './CookieNotification.css';

function CookieNotification() {
  const [showCookieNotice, setShowCookieNotice] = useState(true);

  useEffect(() => {
    const cookieNoticeShown = document.cookie
      .split(';')
      .some((cookie) => cookie.trim().startsWith('cookieNoticeShown=true'));

    if (!cookieNoticeShown) {
      setShowCookieNotice(true);
    } else {
      setShowCookieNotice(false);
    }
  }, []);

  const handleCloseNotice = () => {
    document.cookie =
      'cookieNoticeShown=true; expires=Fri, 31 Dec 9999 23:59:59 GMT';
    setShowCookieNotice(false);
  };

  return (
    <div
      className="cookie__notification"
      style={{ display: showCookieNotice ? 'block' : 'none' }}
    >
      <p className="cookie__text">
        Посещая страницы Сайта, заполняя формы ввода данных, Вы выражаете своё
        согласие с {}
        <a
          className="cookie__privacy_policy"
          href="https://xn--80aap0acqiny2a2bq.xn--p1ai/documents/privacypolicy.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Политикой конфиденциальности.
        </a>
      </p>
      <button className="cookie__button" onClick={handleCloseNotice}>
        Хорошо
      </button>
    </div>
  );
}

export default CookieNotification;
