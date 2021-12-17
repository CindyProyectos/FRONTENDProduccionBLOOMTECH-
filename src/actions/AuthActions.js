/**
 * Auth Actions
 * Auth Action With Google, Facebook, Twitter and Github
 */
import {
    LOGIN_USER,
    LOGIN_USER_BLOOMTECH,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAILURE,
    LOGOUT_USER,
    LOGOUT_USER_SUCCESS,
    SIGNUP_USER,
    SIGNUP_USER_SUCCESS,
    SIGNUP_USER_FAILURE,
    LOGIN_FACEBOOK_USER,
    LOGIN_GOOGLE_USER,
    LOGIN_TWITTER_USER,
    LOGIN_GITHUB_USER,
    LOGOUT_USER_FAILURE,
    SIGNUP_USER_BLOOMTECH,
    SIGNUP_USER_BLOOMTECH_SUCCESS,
    SIGNUP_USER_BLOOMTECH_FAILURE,
    SIGNUP_USER_AUTH,
    SIGNUP_USER_AUTH_SUCCESS,
    SIGNUP_USER_AUTH_FAILURE,
    SIGNUP_USER_SPONSOR,
    SIGNUP_USER_SPONSOR_SUCCESS,
    SIGNUP_USER_SPONSOR_FAILURE,
    SIGNUP_USER_NORMAL
} from './types';

import authToken from '../Auth/utils/authToken';

if(localStorage.getItem('token')){
    authToken(localStorage.getItem('token'));
}

/**
 * Redux Action To Sigin User With Firebase
 */
export const signinUserInFirebase = (user, history) => ({
    type: LOGIN_USER,
    payload: { user, history }
});
/**
 * Redux Action To Sigin User And Password Bloomtech
 */
export const signinUserInBloomtech= (user, history) => ({
    type: LOGIN_USER_BLOOMTECH,
    payload: { user, history }
});

/**
 * Redux Action Signin User Success
 */
export const signinUserSuccess = (info) => ({
    type: LOGIN_USER_SUCCESS,
    payload: info
});

/**
 * Redux Action To Signup User Success
 */
export const signUpUserInFirebaseSuccess = (user) => ({
    type: SIGNUP_USER_SUCCESS,
    payload: user
});

/**
 * Redux Action To Signup User Failure
 */
export const signUpUserInFirebaseFailure = (error) => ({
    type: SIGNUP_USER_FAILURE,
    payload: error
});

/**
 * Redux Action Signin User Failure
 */
export const signinUserFailure = (error) => ({
    type: LOGIN_USER_FAILURE,
    payload: error
})

/**
 * Redux Action To Signout User From  Firebase
 */
export const logoutUserFromFirebase = () => ({
    type: LOGOUT_USER
});

/**
 * Redux Action Signout User Success
 */
export const logoutUserFromFirebaseSuccess = () => ({
    type: LOGOUT_USER_SUCCESS
});

/**
 * Redux Action Signout User Failure
 */
export const logoutUserFromFirebaseFailure = () => ({
    type: LOGOUT_USER_FAILURE
});

/**
 * Redux Action To Signup User In Firebase
 */
export const signupUserInFirebase = (user, history) => ({
    type: SIGNUP_USER,
    payload: { user, history }
})

/**
 * Redux Action To Signin User In Firebase With Facebook
 */
export const signinUserWithFacebook = (history) => ({
    type: LOGIN_FACEBOOK_USER,
    payload: history
})

/**
 * Redux Action To Signin User In Firebase With Google
 */
export const signinUserWithGoogle = (history) => ({
    type: LOGIN_GOOGLE_USER,
    payload: history
})

/**
 * Redux Action To Signin User In Firebase With Github
 */
export const signinUserWithGithub = (history) => ({
    type: LOGIN_GITHUB_USER,
    payload: history
});

/**
 * Redux Action To Signin User In Firebase With Twitter
 */
export const signinUserWithTwitter = (history) => ({
    type: LOGIN_TWITTER_USER,
    payload: history
});

/**
 * Redux Action To Sigin User With Bloomtech
 */
 export const signupUserInBloomtech = (user, history) => ({
    type: SIGNUP_USER_BLOOMTECH,
    payload: { user, history }
});


export const signupUserNormal = (user, history) => ({
    type: SIGNUP_USER_NORMAL,
    payload: { user, history }
});



/**
 * Redux Action To Signup User Bloomtech Success
 */
 export const signUpUserInBloomtechSuccess = (message) => ({
    type: SIGNUP_USER_BLOOMTECH_SUCCESS,
    payload: message
});

/**
 * Redux Action To Signup User Bloomtech Failure
 */
 export const signUpUserInBloomtechFailure = (error) => ({
    type: SIGNUP_USER_BLOOMTECH_FAILURE,
    payload: error
});

/**
 * Redux Action To Signup User Auth
 */
 export const signinUserAuth = (user, history) => ({
    type: SIGNUP_USER_AUTH,
    payload: { user, history }
});

/**
 * Redux Action To Signup User Auth Success
 */
 export const signinUserAuthSuccess = (message) => ({
    type: SIGNUP_USER_AUTH_SUCCESS,
    payload: message
});

/**
 * Redux Action To Signup User Auth Failure
 */
 export const signinUserAuthFailure = (error) => ({
    type: SIGNUP_USER_AUTH_FAILURE,
    payload: error
});

/**
 * Redux Action To Signup User Sponsor
 */
 export const signinUserSponsor = (user, history) => ({
    type: SIGNUP_USER_SPONSOR,
    payload: { user, history }
});

/**
 * Redux Action To Signup User Sponsor
 */
 export const signinUserSponsorSuccess = (message) => ({
    type: SIGNUP_USER_SPONSOR_SUCCESS,
    payload: message
});

/**
 * Redux Action To Signup User Sponsor
 */
 export const signinUserSponsorFailure = (error) => ({
    type: SIGNUP_USER_SPONSOR_FAILURE,
    payload: error
});