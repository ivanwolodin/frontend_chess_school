export const sendNewStudentRequest = async (data) => {
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
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.error('Ошибка отправки данных:', error);
    return false;
  }
};
