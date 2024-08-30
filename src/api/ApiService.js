class ApiService {
  constructor() {
    this._serverUrl = process.env.REACT_APP_BACKEND_URL;
    this.headers = {};
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  async sendNewStudentRequest(data) {
    await this.sendRequest('general/student_request', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return true;
  }

  async sendRequest(path, options) {
    try {
      console.log(`${this._serverUrl}/${path}`);
      const response = await fetch(`${this._serverUrl}/${path}`, options);
      console.log(response);
      if (!response.ok) {
        console.error(
          `Ошибка запроса: ${response.status} ${response.statusText}`,
        );
        return {
          error: `Ошибка запроса: ${response.status} ${response.statusText}`,
        };
      }

      if (response.headers.get('Content-Type').includes('application/json')) {
        return await response.json();
      } else {
        return response;
      }
    } catch (error) {
      console.error('Ошибка при выполнении запроса:', error);
      return {
        error:
          'Ошибка сети или сервера. Проверьте подключение и попробуйте снова.',
      };
    }
  }

  async sendLoginRequest(loginData) {
    const response = await this.sendRequest('auth/login', {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams(loginData).toString(),
    });

    if (response.error) {
      return null;
    }
    console.log(response);
    const { access_token } = response;
    console.log('Access Token:', access_token);

    return access_token;
  }

  async sendGetMeRequest(access_token) {
    const response = await this.sendRequest('general/me/stub', {
      method: 'POST',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${access_token}`,
      },
    });

    if (response.error) {
      return null;
    }

    return response;
  }
}

export default ApiService;
