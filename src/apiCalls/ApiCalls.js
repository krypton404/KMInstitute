let url = 'http://192.168.56.1:8080';
export function register(email) {
  return fetch(url + '/register?' + new URLSearchParams({email: email}), {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({}),
  }).then(response => {
    return response.json();
  });
}

export function verifyOTP(email, OTP) {
  return fetch(
    url + '/verifyotp?' + new URLSearchParams({email: email, otp: OTP}),
    {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({}),
    },
  ).then(response => {
    return response.json();
  });
}

export function login(email, password) {
  return fetch(
    url + '/login?' + new URLSearchParams({email: email, password: password}),
    {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({}),
    },
  ).then(response => response.json());
}

export function updateDetails(token, name, password, number) {
  return fetch(
    url +
      '/updateDetails?' +
      new URLSearchParams({name: name, password: password, number: number}),
    {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: token,
      },
      body: JSON.stringify({}),
    },
  ).then(response => response.json());
}

export function checktoken(token) {
  return fetch(url + '/checktoken', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: token,
    },
    body: JSON.stringify({}),
  }).then(response => response.json());
}

export function loadNotices(token) {
  return fetch(url + '/loadnotices', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: token,
    },
  }).then(response => response.json());
}

export function loadPDFLinks(token) {
  return fetch(url + '/loadpdflinks', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: token,
    },
  }).then(response => response.json());
}

export function postPDFLink(token, name, url) {
  return fetch(
    url + '/postpdflink?' + new URLSearchParams({name: name, url: url}),
    {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: token,
      },
    },
  ).then(response => response.json());
}

export function postNotice(token, title, description) {
  return fetch(
    url +
      '/postnotice?' +
      new URLSearchParams({title: title, description: description}),
    {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: token,
      },
    },
  ).then(response => response.json());
}
