/**
 * Auth User Reducers
 */
import { NotificationManager } from 'react-notifications';
import {
    LOGIN_USER,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAILURE,
    LOGOUT_USER,
    SIGNUP_USER,
    SIGNUP_USER_SUCCESS,
    SIGNUP_USER_FAILURE,
    LOGOUT_USER_SUCCESS,
    LOGOUT_USER_FAILURE,
    SIGNUP_USER_BLOOMTECH,
    SIGNUP_USER_BLOOMTECH_SUCCESS,
    SIGNUP_USER_BLOOMTECH_FAILURE,
    SIGNUP_USER_NORMAL
} from 'Actions/types';

/**
 * initial auth user
 */
const INIT_STATE = {
    user: localStorage.getItem('user_id'),
    //loading: false,    
    userId: null,
    tokenType: null,
    token: localStorage.getItem('token'),
    email: null,
    //isAdmin: false,
    userName: null,
    //status: false,
    fullName: null,
};

import authToken from '../Auth/utils/authToken';

if(localStorage.getItem('token')){
    authToken(localStorage.getItem('token'));
}

export default (state = INIT_STATE, action) => {
    switch (action.type) {

        case LOGIN_USER:
            return { ...state, loading: true };

        case LOGIN_USER_SUCCESS:
            return { 
                ...state, 
               // loading: false, 
                user: action.payload.userId,
                userId: action.payload.userId,
                token: action.payload.token,
                tokeType: action.payload.tokeType,
                email: action.payload.email,
                //isAdmin: action.payload.isAdmin,
                userName: action.payload.userName,
                //status: action.payload.status,
                fullName: action.payload.fullName,
            };

        case LOGIN_USER_FAILURE:
            NotificationManager.error(action.payload);
            return { ...state, loading: false };

        case LOGOUT_USER:
            return { ...state };

        case LOGOUT_USER_SUCCESS:
				NotificationManager.success('User Logged Out');
            return { ...state, user: null };

        case LOGOUT_USER_FAILURE:
            return { ...state };

        case SIGNUP_USER:
            return { ...state, loading: true };

        case SIGNUP_USER_SUCCESS:
           // NotificationManager.success('Account Created');
            return { ...state, loading: false, user: action.payload.uid };

        case SIGNUP_USER_NORMAL:
            //NotificationManager.success();
            //NotificationManager.success('Account Created');
            return { ...state, loading: true };

        case SIGNUP_USER_FAILURE:
            NotificationManager.error(action.payload);
            return { ...state, loading: false };
        case SIGNUP_USER_BLOOMTECH_SUCCESS:
            NotificationManager.success(action.payload);
            return { ...state, loading: false };
    
        case SIGNUP_USER_BLOOMTECH_FAILURE:
            NotificationManager.error(action.payload);
            return { ...state, loading: false };

        case SIGNUP_USER_BLOOMTECH:
            return { ...state, loading: true };

        default: return { ...state };
    }
}
