import { call } from 'redux-saga/effects';
//import fetch from 'node-fetch';

export const sendRequest = (email) => {
  const response = fetch('http://localhost:4000', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email: email.payload }),
  });
  return response;
};
export const sendTokenRequest = (token) => {
  console.log('sendtokenrequest token is', token);
  const response = fetch('http://localhost:4000/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ token: token.payload }),
  });
  return response;
};

export const sendPasswordRequest = (password) => {
  console.log('sendpasswordrequest password is', password);
  const response = fetch('http://localhost:4000/password', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ password: password.payload }),
  });
  return response;
};

export function* networkRequest(apiFn, apiArgs) {
  try {
    const response = yield call(apiFn, apiArgs);
    const data = yield response.json();
    console.log('sendtokenrequest', response);
    return data;
  } catch (error) {
    console.log('sendtokenrequest error', error);
    console.log(error);
    throw error;
  }
}
