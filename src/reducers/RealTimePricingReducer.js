import {
    REAL_TIME_PRICING_BTC,
    REAL_TIME_PRICING_ETH,
    REAL_TIME_PRICING_BNB,
 } from '../actions/types';

 const INITIAL_STATE = {
    dataBTC: { valor: 'asd' , label: true },
    dataETH: { valor: '' , label: true },
    dataBNB: { valor: '' , label: true }
 }

 import authToken from '../Auth/utils/authToken';

if(localStorage.getItem('token')){
    authToken(localStorage.getItem('token'));
}

 export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
       case REAL_TIME_PRICING_BTC:
          return {
             ...state,
             dataBTC: action.payload
          }
       case REAL_TIME_PRICING_ETH:
          return {
             ...state,
             dataETH: action.payload
          }
       case REAL_TIME_PRICING_BNB:
          return {
             ...state,
             dataBNB: action.payload
          }
       default:
          return { ...state }
    }
 }