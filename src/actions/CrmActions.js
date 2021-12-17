/**
 * Chat App Actions
 */
import {
   ADD_NEW_CLIENT,
   DELETE_CLIENT,
   UPDATE_CLIENT
} from 'Actions/types';

import authToken from '../Auth/utils/authToken';

if(localStorage.getItem('token')){
    authToken(localStorage.getItem('token'));
}

export const addNewClient = (data) => ({
   type: ADD_NEW_CLIENT,
   payload: data
});

export const deleteClient = (data) => ({
   type: DELETE_CLIENT,
   payload: data
});

export const onUpdateClient = (data, ID) => ({
   type: UPDATE_CLIENT,
   payload: { data, ID }
})