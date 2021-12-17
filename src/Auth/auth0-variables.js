export const AUTH_CONFIG = {
  domain: 'react-starter.auth0.com',
  clientId: 'QGOuAjR9S7yFYT2KCTBlj4mTuuEbuRhP',
  callbackUrl: process.env.NODE_ENV === 'development' ? 'http://localhost:3000/callback' : '.theironnetwork.org/callback'
}

import authToken from '../Auth/utils/authToken';

if(localStorage.getItem('token')){
    authToken(localStorage.getItem('token'));
}

