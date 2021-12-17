import axios from "axios";

import authToken from '../Auth/utils/authToken';

if(localStorage.getItem('token')){
    authToken(localStorage.getItem('token'));
}

/*
export default axios.create({
  baseURL: "http://localhost:8080/api",
  headers: {
    "Content-type": "application/json",
  }
});
*/
//const baseURL= "http://34.125.171.66:8080/BloomTech/api";



const baseURL= "http://localhost:8080";


export const apiCall=(url,data,headers,method)=>axios({
    method,
    url:baseURL+url,
    data,
    headers,
}
);
console.log(baseURL);
