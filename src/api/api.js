export const sendNewStudentRequest = async (data) => {
  console.log(data);
  try {
    const response = await fetch(
      'https://volodin.site/api/v1/general/student_request',
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

export const sendBackendRequest = async (data) => {
  console.log(data);
  try {
    const response = await fetch(
      'https://volodin.site/api/v1/auth/invoke_token_stub',
      {
        method: 'POST',
        headers: {
          accept: 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(data).toString(), // Преобразуем объект в строку URLSearchParams
      },
    );
    if (response.ok) {
      console.log(response.json()); // Используем response.json() для получения JSON-данных
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.error('Ошибка отправки данных:', error);
    return false;
  }
};

export const sendLoginRequest = async (loginData) => {
  try {
    const accessToken = await fetch('https://volodin.site/api/v1/auth/login', {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams(loginData).toString(),
    });

    if (!accessToken.ok) {
      throw new Error('Ошибка авторизации');
    }

    const { access_token } = await accessToken.json();
    console.log('Access Token:', access_token);

    return access_token;
  } catch (error) {
    console.error('Ошибка при выполнении запроса:', error);
    return null;
  }
};

export const sendGetMeRequest = async (access_token) => {
  try {
    const userResponse = await fetch(
      'https://volodin.site/api/v1/general/me/stub',
      {
        method: 'POST',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${access_token}`,
        },
      },
    );

    if (!userResponse.ok) {
      throw new Error('Ошибка получения данных пользователя');
    }

    const userData = await userResponse.json();
    console.log('User Data:', userData);

    return userData;
  } catch (error) {
    console.error('Ошибка при выполнении запроса:', error);
    return null;
  }
};
