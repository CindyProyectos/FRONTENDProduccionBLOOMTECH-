import axios from 'axios';

import authToken from '../Auth/utils/authToken';

if(localStorage.getItem('token')){
    authToken(localStorage.getItem('token'));
}

export default
   axios.create({
      baseURL: 'https://reactify.theironnetwork.org/data/',
      timeout: 2000
   });