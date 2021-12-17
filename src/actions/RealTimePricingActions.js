import {
    REAL_TIME_PRICING_BTC,
    REAL_TIME_PRICING_ETH,
    REAL_TIME_PRICING_BNB,
 } from './types';

 import authToken from '../Auth/utils/authToken';

if(localStorage.getItem('token')){
    authToken(localStorage.getItem('token'));
}
 
 export const getPriceBTC = () => {
    return dispatch => {
         return fetch('http://34.125.171.66:8080/BloomTech/api/pagoCripto/all/checkPriceBTC',{
            method:'GET'
         })
         .then((response) => response.json())
         .then((responseJson) => {
            console.log('BTC2');
            console.log(responseJson);
            dispatch({type: REAL_TIME_PRICING_BTC, payload: responseJson})
         })
         .catch((error) => {
            console.error(error);
         });
    }
 }
 
 export const getPriceETH = () => {
    return dispatch => {
        return fetch('http://34.125.171.66:8080/BloomTech/api/pagoCripto/all/checkPriceETH',{
           method:'GET'
        })
        .then((response) => response.json())
        .then((responseJson) => {
           console.log('BTC2');
           console.log(responseJson);
           dispatch({type: REAL_TIME_PRICING_ETH, payload: responseJson})
        })
        .catch((error) => {
           console.error(error);
        });
    }
}
 
export const getPriceBNB = () => {
    return dispatch => {
        return fetch('http://34.125.171.66:8080/BloomTech/api/pagoCripto/all/checkPriceBNB',{
           method:'GET'
        })
        .then((response) => response.json())
        .then((responseJson) => {
           console.log('BTC2');
           console.log(responseJson);
           dispatch({type: REAL_TIME_PRICING_BNB, payload: responseJson})
        })
        .catch((error) => {
           console.error(error);
        });
    }
}