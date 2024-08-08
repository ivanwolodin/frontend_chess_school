export const sendDataToServer = async (data) => {
  console.log(data);
  try {
    const response = await fetch(
      'https://ivanwolodin.pythonanywhere.com/student_request_admission',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      },
    );
    if (response.ok) {
      return 'Ваша заявка принята!';
    } else {
      return 'Что-то сломалось';
    }
  } catch (error) {
    console.error('Ошибка отправки данных:', error);
    return 'Что-то сломалось';
  }
};
