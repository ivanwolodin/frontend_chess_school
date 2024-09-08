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
      // console.log(`${this._serverUrl}/${path}`);
      const response = await fetch(`${this._serverUrl}/${path}`, options);

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
    const { access_token } = response;
    // console.log('Access Token:', access_token);

    return access_token;
  }

  async sendGetStudentRequest(access_token) {
    const response = await this.sendRequest('student', {
      method: 'GET',
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

  async sendGetAdminData(access_token) {
    const response = await this.sendRequest('admin/fetch_data', {
      method: 'GET',
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

  async sendAddStudent(data) {
    const response = await this.sendRequest('admin/student', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
      body: JSON.stringify(data),
    });

    if (response.error) {
      return null;
    }

    return response;
  }

  async getPaymentUrl(sumToPay) {
    const response = await this.sendRequest('student/make_payment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
      body: JSON.stringify({ sum_to_pay: sumToPay }),
    });

    if (response.error) {
      return null;
    }

    return response;
  }

  async validatePaymentStatus(orderId) {
    const response = await this.sendRequest(
      `student/validate_payment?idempotence_our_order_number=${orderId}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      },
    );

    if (response.error) {
      return null;
    }

    return response;
  }

  async changeUserPassword(old_password, new_password) {
    const response = await this.sendRequest('auth/password', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
      body: JSON.stringify({
        old_password: old_password,
        new_password: new_password,
      }),
    });

    if (response.error) {
      return null;
    }

    return response;
  }
}

export default ApiService;
