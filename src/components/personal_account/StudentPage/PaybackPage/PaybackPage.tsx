import React, { useState, useEffect } from 'react';

// import { useNavigate } from 'react-router-dom';

function PaymentCallback() {
  const [paymentStatus, setPaymentStatus] = useState('');
  //   const navigate = useNavigate();
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const paymentId = urlParams.get('payment_id');
    const paymentStatus = urlParams.get('status');

    // Проверка наличия ID и статуса платежа
    if (paymentId && paymentStatus) {
      // Проверьте статус платежа на сервере (если необходимо)
      // ...

      // Обновите состояние приложения
      setPaymentStatus(paymentStatus);

      // Перенаправьте пользователя на соответствующую страницу
      if (paymentStatus === 'success') {
        console.log('Success');
      } else {
        console.log('Error');
      }
    } else {
      // Выведите сообщение об ошибке (например, "Ошибка обработки платежа")
    }
  }, []);

  return (
    <div>
      {paymentStatus === 'success' && (
        <p>Оплата прошла успешно! Спасибо за покупку!</p>
      )}
      {paymentStatus === 'failed' && (
        <p>Ошибка оплаты. Пожалуйста, попробуйте снова.</p>
      )}
    </div>
  );
}

export default PaymentCallback;
