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

  async newStudentReq(data) {
    await this._sendRequest('general/student_request', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return true;
  }

  async _sendRequest(path, options) {
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
      // TODO: сделать обработку 500 нормально
      window.location.href = '/500';
      console.error('Ошибка при выполнении запроса:', error);
      return {
        error:
          'Ошибка сети или сервера. Проверьте подключение и попробуйте снова.',
      };
    }
  }

  async getAccessToken(loginData) {
    const response = await this._sendRequest('auth/login', {
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

  async getStudentData(access_token) {
    const response = await this._sendRequest('student', {
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

  async getAdminData(access_token) {
    const response = await this._sendRequest('admin/fetch_data', {
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

  async addNewStudent(data) {
    const response = await this._sendRequest('admin/student', {
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
    const response = await this._sendRequest('student/make_payment', {
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
    const response = await this._sendRequest(
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
    const response = await this._sendRequest('auth/password', {
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

  async resetUserPassword(email) {
    const response = await this._sendRequest('auth/reset_password', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
      }),
    });

    if (response.error) {
      return null;
    }

    return response;
  }

  async checkResetPasswordLink(resetLink) {
    const response = await this._sendRequest('auth/reset_password_url', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        reset_link: resetLink,
      }),
    });

    if (response.error) {
      return null;
    }

    return response;
  }
}

export default ApiService;
