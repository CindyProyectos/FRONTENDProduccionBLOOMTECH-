/**
 * Auth Sagas
 */
import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import {
    auth,
    facebookAuthProvider,
    googleAuthProvider,
    twitterAuthProvider,
    githubAuthProvider
} from '../firebase';

import authToken from '../Auth/utils/authToken';

import {
    LOGIN_USER,
    LOGIN_USER_BLOOMTECH,
    LOGIN_FACEBOOK_USER,
    LOGIN_GOOGLE_USER,
    LOGIN_TWITTER_USER,
    LOGIN_GITHUB_USER,
    LOGOUT_USER,
    SIGNUP_USER,
    SIGNUP_USER_BLOOMTECH,
    SIGNUP_USER_NORMAL,
    SIGNUP_USER_AUTH,
    SIGNUP_USER_SPONSOR
} from 'Actions/types';

import {
    signinUserSuccess,
    signinUserFailure,
    signUpUserInFirebaseSuccess,
    signUpUserInFirebaseFailure,
    logoutUserFromFirebaseSuccess,
    logoutUserFromFirebaseFailure,
    signUpUserInBloomtechSuccess,
    signUpUserInBloomtechFailure,
    signinUserAuthSuccess,
    signinUserAuthFailure,
    signinUserSponsorSuccess,
    signinUserSponsorFailure    
} from 'Actions';
import { NotificationManager } from 'react-notifications';

import {apiCall} from 'MyApi';
import { errorCode } from '../util/IntlMessages';

/**
 * Sigin User With Email and Password Request
 */
const signInUserWithEmailPasswordRequest = async (user, password) =>
    await auth.signInWithEmailAndPassword(user, password)
        .then(authUser => authUser)
        .catch(error => error);

/**
 * Signin User With Facebook Request 
 */
const signInUserWithFacebookRequest = async () =>
    await auth.signInWithPopup(facebookAuthProvider)
        .then(authUser => authUser)
        .catch(error => error);

/**
* Signin User With Google Request
*/
const signInUserWithGoogleRequest = async () =>
    await auth.signInWithPopup(googleAuthProvider)
        .then(authUser => authUser)
        .catch(error => error);

/**
* Signin User With Twitter Request
*/
const signInUserWithTwitterRequest = async () =>
    await auth.signInWithPopup(twitterAuthProvider)
        .then(authUser => authUser)
        .catch(error => error);

if(localStorage.getItem('token')){
    authToken(localStorage.getItem('token'));
}
/**
* Signin User With Github Request
*/
const signInUserWithGithubRequest = async () =>
    await auth.signInWithPopup(githubAuthProvider)
        .then(authUser => authUser)
        .catch(error => error);

/**
 * Signout Request
 */
const signOutRequest = async () =>
    await auth.signOut().then(authUser => authUser).catch(error => error);

/**
 * Create User
 */
const createUserWithEmailPasswordRequest = async (user, password) =>
    await auth.createUserWithEmailAndPassword(user, password)
        .then(authUser => authUser)
        .catch(error => error);


/**
 * Signin User With Email & Password
 */
function* signInUserWithEmailPassword({ payload }) {
	const { user, password } = payload.user;
	const { history } = payload;
	try {
		const signInUser = yield call(signInUserWithEmailPasswordRequest, user, password);

		if (signInUser.message) {
			yield put(signinUserFailure(signInUser.message));
		}
		else {

			/*localStorage.setItem('user_id', JSON.stringify(signInUser.user.uid));
			var getData = JSON.parse(localStorage.getItem('user_id'))
			yield put(signinUserSuccess(getData));
			history.push('/');
			NotificationManager.success('User Logged In');*/
		}
	}
	catch (error) {
		yield put(signinUserFailure(error));
	}
}

/**
 * Signin User With Email & Password
 */
function* signInUserWithEmailPasswordBloomtech({ payload }) {
	const { user, password } = payload.user;
	const { history } = payload;
	try {
        
        const dataSendApi={
            "user": user,
            "password":password
        }
        const headers= {
            "Content-type": "application/json",
            "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
            "Access-Control-Allow-Origin":"*",                       
            "Access-Control-Allow-Methods":"GET, PUT, POST, OPTIONS, DELETE",
            "Allow":"GET,POST,OPTIONS,PUT,DELETE",
        }
       
       const signInUser = yield call(apiCall,`/user/login`, dataSendApi, headers,'POST');
        //console.log(signInUser.data);

        if (signInUser.status === errorCode && signInUser.data.message) {
			yield put(signinUserFailure(signInUser.data.message));
		} else {
            if(signInUser == 'null' || signInUser.data == ""){
                NotificationManager.error('Ingrese correctamente sus credenciales');
            }else{
                //ingreso del usuario autenticado
                //const { accessToken, type } = signInUser.data;
                const userInfo = { 
                    token: accessToken, 
                    //tokeType: signInUser.data.usuario, //OJO 
                    userId: signInUser.data.id_usuario,
                    email: signInUser.data.email,
                    //isAdmin: signInUser.data.usuario, //myInfo.data.esAdmin,
                    roles: 'ROLE_' + signInUser.data.rol,
                    rol: 'ROLE_' + signInUser.data.rol,
                    userName: signInUser.data.usuario,  
                    status: signInUser.data.estado,
                    fullName: signInUser.data.nombres, 
                    authorities: 'ROLE_' + signInUser.data.rol, 
                    
                };
                //console.log(userInfo);
                const rol = 'ROLE_' + signInUser.data.rol;

                signInUser.data.rol = rol;

                const { accessToken, type } = signInUser.data;
                localStorage.clear();
                localStorage.setItem('iduser',signInUser.data.id_usuario);
                localStorage.setItem('token',signInUser.data.token);
                localStorage.setItem('dniuser',signInUser.data.dni);
                localStorage.setItem('emailuser',signInUser.data.email);
                localStorage.setItem('estadouser',signInUser.data.estado);
                localStorage.setItem('roles', signInUser.data.rol);
                localStorage.setItem('rol', signInUser.data.rol);  

                /*console.log(signInUser.data.foto)
                const blob = new Blob(signInUser.data.foto, { type: 'application/binary' }); 
                console.log("sdfsdfsdfsdf")
                console.log(blob)*/


                //const imageUrl = URL.createObjectURL(signInUser.data.foto);
                
                //let imageUrl = URL.createObjectURL(signInUser.data.foto);
                //console.log(imageUrl)
                /*console.log(signInUser.data.foto)
                const blob = new Blob(signInUser.data.foto, {type: 'application/octet-binary'}); 
                const imageUrl = URL.createObjectURL(blob);
                console.log(imageUrl)
                console.log(imageUrl);*/
                //const imageUrl = URL.createObjectURL(signInUser.data.foto);
                //console.log(imageUrl);

                localStorage.setItem('fotouser', signInUser.data.foto);
                localStorage.setItem('nombreuser',signInUser.data.nombres);
                localStorage.setItem('telefonouser',signInUser.data.telefono);
                localStorage.setItem('user',signInUser.data.usuario);
                


                ///implemenatacion del localstorage
                /*localStorage.setItem('user_id', JSON.stringify(signInUser.user.uid));
			var getData = JSON.parse(localStorage.getItem('user_id'))
			yield put(signinUserSuccess(getData));
			history.push('/');
			NotificationManager.success('User Logged In');*/
            //console.log(localStorage.setItem('email', dato1));
                /*localStorage.setItem('type_token', "bean");
                localStorage.setItem('token', signInUser.data.token);
                localStorage.setItem('email', signInUser.data.email);
                localStorage.setItem('user_id', signInUser.data.id_usuario);
                localStorage.setItem('username', signInUser.data.usuario);
                localStorage.setItem('status', signInUser.data.estado);
                console.log("Probando metodos");
                console.log(localStorage.setItem('email', signInUser.data.email));*/
                yield put(signinUserSuccess(userInfo));
                history.push('app/home/main');                   
                NotificationManager.success('Bienvenido');
            }
        }

        /*if (signInUser.status === errorCode && signInUser.data.message) {
			yield put(signinUserFailure(signInUser.data.message));
		} else {          
            const { accessToken, type } = signInUser.data;
            const headersAuth= {
                "Content-type": "application/json",
                "Authorization": type +' '+ accessToken,
            }
            //OJO CON ESTA FUNCION
            const myInfo = yield call(apiCall,`/auth/me`, null, headersAuth,'GET');


            // localStorage.setItem('type_token', JSON.stringify(signInUser.data.type));
			// localStorage.setItem('token', JSON.stringify(accessToken));
			// localStorage.setItem('email', JSON.stringify(myInfo.data.email));
			// localStorage.setItem('user_id', JSON.stringify(myInfo.data.user.id));
			// localStorage.setItem('username', JSON.stringify(myInfo.data.user.username));
			// localStorage.setItem('status', JSON.stringify(myInfo.data.user.estadoS));
			
            /*
            const userInfo = { 
                token: accessToken, 
                tokeType: type, 
                userId: myInfo.data.user.id,
                email: myInfo.data.email,
                isAdmin: myInfo.data.esAdmin,
                userName: myInfo.data.user.username,
                status: myInfo.data.user.estadoS,
                fullName: myInfo.data.user.nombresApellidos,
            };
            yield put(signinUserSuccess(userInfo));
			history.push('/');
			NotificationManager.success('User Logged In');
		}*/
	}
	catch (error) {
        if(error.response && error.response.data.message){
            yield put(signinUserFailure(error.response.data.Message));
        }else{
            yield put(signinUserFailure("error"));
        }
	}
}

/**
 * Signin User With Facebook Account
 */
function* signinUserWithFacebookAccount({ payload }) {
    try {
        const signUpUser = yield call(signInUserWithFacebookRequest);
        if (signUpUser.message) {
            yield put(signinUserFailure(signUpUser.message));
        } else {
            localStorage.setItem('user_id', signUpUser.uid);
            yield put(signinUserSuccess(signUpUser));
            payload.push('/')
        }
    } catch (error) {
        yield put(signinUserFailure(error));
    }
}

/**
 * Signin User With Google Account
 */
function* signinUserWithGoogleAccount({ payload }) {
    try {
        const signUpUser = yield call(signInUserWithGoogleRequest);
        if (signUpUser.message) {
            yield put(signinUserFailure(signUpUser.message));
        } else {
            localStorage.setItem('user_id', signUpUser.uid);
            yield put(signinUserSuccess(signUpUser));
            payload.push('/')
        }
    } catch (error) {
        yield put(signinUserFailure(error));
    }
}

/**
 * Signin User With Twitter Account
 */
function* signinUserWithTwitterAccount({ payload }) {
    try {
        const signUpUser = yield call(signInUserWithTwitterRequest);
        if (signUpUser.message) {
            yield put(signinUserFailure(signUpUser.message));
        } else {
            localStorage.setItem('user_id', signUpUser.uid);
            yield put(signinUserSuccess(signUpUser));
            payload.push('/')
        }
    } catch (error) {
        yield put(signinUserFailure(error));
    }
}

/**
 * Signin User With Github Account
 */
function* signinUserWithGithubAccount({ payload }) {
    try {
        const signUpUser = yield call(signInUserWithGithubRequest);
        if (signUpUser.message) {
            yield put(signinUserFailure(signUpUser.message));
        } else {
            localStorage.setItem('user_id', signUpUser.uid);
            yield put(signinUserSuccess(signUpUser));
            payload.push('/')
        }
    } catch (error) {
        yield put(signinUserFailure(error));
    }
}

/**
 * Signout User
 */
function* signOut() {
    try {
        yield call(signOutRequest);
        localStorage.removeItem('user_id');
        yield put(logoutUserFromFirebaseSuccess())
    } catch (error) {
        yield put(logoutUserFromFirebaseFailure());
    }
}

/**
 * Create User In Firebase
 */
function* createUserWithEmailPassword({ payload }) {
    const { email, password } = payload.user;
    const { history } = payload
    try {
        const signUpUser = yield call(createUserWithEmailPasswordRequest, email, password);
        if (signUpUser.message) {
            yield put(signUpUserInFirebaseFailure(signUpUser.message));
        } else {
            localStorage.setItem('user_id', signUpUser.uid);
            yield put(signUpUserInFirebaseSuccess(signUpUser));
            history.push('/')
        }
    } catch (error) {
        yield put(signUpUserInFirebaseFailure(error));
    }
}

/**
 * Create User In Bloomtech
 */
 function* createUserWithEmailPasswordBloomtech({ payload }) {
    const { nombres, telefono, email, rol, estado, usuario, clave_invitacion, contrasena, foto, fecha_creacion, fecha_modificacion, rango, dni} = payload.user;
    const { history } = payload
    try {
        const headers = {
            "Content-type": "application/json",
            "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
            "Access-Control-Allow-Origin":"*",                       
            "Access-Control-Allow-Methods":"GET, PUT, POST, OPTIONS, DELETE",
            "Allow":"GET,POST,OPTIONS,PUT,DELETE",
        }
        const dataSendApi = {
            "nombres": nombres,
            "telefono": telefono,
            "email": email,
            "rol": rol,
            "estado": estado,
            "usuario": usuario,
            "clave_invitacion": clave_invitacion,
            "contrasena": contrasena,
            "foto": foto,
            "fecha_creacion": fecha_creacion,
            "fecha_modificacion": fecha_modificacion,
            "rango": rango,
            "dni": dni
        }
        
        console.log(dataSendApi);
        const signUpUser =  yield call(apiCall,'/user/save', dataSendApi, headers,'POST');
        console.log(signUpUser);

        if (signUpUser.status === errorCode) {
			yield put(signinUserFailure(signUpUser.data.message));
		} else {
            if(signUpUser == 'null' || signUpUser.data == ""){
                NotificationManager.error('"El correo electrónico y/o usuario ya estan en uso"');
            }else{
                yield put(signUpUserInBloomtechSuccess("Usuario agregado con éxito"));
                history.push('/signinbloomtech')
            }
        }

        /*if (signUpUser.status === errorCode && signUpUser.data == "") {
			yield put(signUpUserInBloomtechFailure(signUpUser.data.message));
		} else {
            yield put(signUpUserInBloomtechSuccess("Usuario agregado con éxitoooo"));
            history.push('/signinbloomtech')
        }*/

    } catch (error) {
        if(error.response && error.response.data.errors){
           yield put(signUpUserInBloomtechFailure(error.response.data.errors)); //mensaje del backend
        } else {
           yield put(signUpUserInBloomtechFailure("El usuario, dni y/o email ya estan en uso"));    
        }
    }
}


function* createUserWithEmailPasswordNormal({ payload }) {
    const { nombres, telefono, email, rol, estado, usuario, clave_invitacion, contrasena, foto, fecha_creacion, fecha_modificacion, rango, dni} = payload.user;
    const { history } = payload
    try {
        const headers = {
            "Content-type": "application/json",
            "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
            "Access-Control-Allow-Origin":"*",                       
            "Access-Control-Allow-Methods":"GET, PUT, POST, OPTIONS, DELETE",
            "Allow":"GET,POST,OPTIONS,PUT,DELETE",
        }
        const dataSendApi = {
            "nombres": nombres,
            "telefono": telefono,
            "email": email,
            "rol": rol,
            "estado": estado,
            "usuario": usuario,
            "clave_invitacion": clave_invitacion,
            "contrasena": contrasena,
            "foto": foto,
            "fecha_creacion": fecha_creacion,
            "fecha_modificacion": fecha_modificacion,
            "rango": rango,
            "dni": dni
        }
        
        const signUpUser =  yield call(apiCall,'/user/save', dataSendApi, headers,'POST');
        console.log(signUpUser);
        

        if (signUpUser.status == errorCode) {
			yield put(signUpUserInBloomtechFailure(signUpUser.data.message));
		} else {
            yield put(signUpUserInBloomtechSuccess("Usuario agregado con éxito"));
            history.push('/signinbloomtech')
        }

    } catch (error) {
        if(error.response && error.response.data.errors){
           yield put(signUpUserInBloomtechFailure(error.response.data.errors)); //mensaje del backend
        } else {
           yield put(signUpUserInBloomtechFailure("El correo electrónico y/o usuario ya estan en uso"));
        }
    
    }
}

/**
 * Create User Sponsor
 */
 function* createUserSponsor({ payload }) {
    const { nombres, telefono, email, rol, estado, usuario, clave_invitacion, contrasena, foto, fecha_creacion, fecha_modificacion, rango, dni, sponsor} = payload.user;
    const { history } = payload
    try {
        const headers = {
            "Content-type": "application/json",
            "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
            "Access-Control-Allow-Origin":"*",                       
            "Access-Control-Allow-Methods":"GET, PUT, POST, OPTIONS, DELETE",
            "Allow":"GET,POST,OPTIONS,PUT,DELETE",
        }
        const dataSendApi = {
            "nombres": nombres,
            "telefono": telefono,
            "email": email,
            "rol": rol,
            "estado": estado,
            "usuario": usuario,
            "clave_invitacion": clave_invitacion,
            "contrasena": contrasena,
            "foto": foto,
            "fecha_creacion": fecha_creacion,
            "fecha_modificacion": fecha_modificacion,
            "rango": rango,
            "dni": dni
        }
        //validar que el sponsor sea solo un numero
        /*if(type(sponsor) != int){
        }else{
            console.log("Console 3");
            yield put(signUpUserInBloomtechFailure("Debe ingresar un número en este campo"));
        }*/  

            const signUpUser =  yield call(apiCall,'/user/refer/'+sponsor, dataSendApi, headers,'PUT'); 


            if (signUpUser.status === errorCode) {
			yield put(signUpUserInBloomtechFailure(signUpUser.data.errors));
		} else {
            if(signUpUser == 'null' || signUpUser.data == ""){
                NotificationManager.error('No se reconoce al sponsor ingresado');
            }else{
                yield put(signUpUserInBloomtechSuccess("Usuario Sponsor agregado con éxito"));
                history.push('/');
            }
        }

    } catch (error) {
        if(error.response && error.response.data.Mensaje){
            yield put(signUpUserInBloomtechFailure(error.response.data.Mensaje)); //mensaje del backend
         } else {
            yield put(signUpUserInBloomtechFailure(error.response.data.errors));
         }
    }
}

/**
 * Create User In your account
 */
 function* createUserinyourAccount({ payload }) {
    const { nombres, telefono, email, rol, estado, usuario, clave_invitacion, contrasena, foto, fecha_creacion, fecha_modificacion, rango, dni} = payload.user;
    const { history } = payload
    try {
        const headers = {
            "Content-type": "application/json",
            "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
            "Access-Control-Allow-Origin":"*",                       
            "Access-Control-Allow-Methods":"GET, PUT, POST, OPTIONS, DELETE",
            "Allow":"GET,POST,OPTIONS,PUT,DELETE",
        }
        const dataSendApi = {
            "nombres": nombres,
            "telefono": telefono,
            "email": email,
            "rol": rol,
            "estado": estado,
            "usuario": usuario,
            "clave_invitacion": clave_invitacion,
            "contrasena": contrasena,
            "foto": foto,
            "fecha_creacion": fecha_creacion,
            "fecha_modificacion": fecha_modificacion,
            "rango": rango,
            "dni": dni
        }
        
        const signUpUser =  yield call(apiCall,'/user/save', dataSendApi, headers,'POST');


        if (signUpUser.status === errorCode) {
			yield put(signUpUserInBloomtechFailure(signUpUser.data.errors));
		} else {
            if(signUpUser == 'null' || signUpUser.data == ""){
                NotificationManager.error('"El correo electrónico y/o usuario ya estan en uso"');
            }else{
                yield put(signUpUserInBloomtechSuccess("Usuario agregado con éxito"));
                history.push('/');
            }
        }

    } catch (error) {
        if(error.response && error.response.data.Mensaje){
            yield put(signUpUserInBloomtechFailure(error.response.data.Mensaje)); //mensaje del backend
         } else {
            yield put(signUpUserInBloomtechFailure(error.response.data.errors));
         }
    }
}


/**
 * Signin User In Firebase
 */
export function* signinUserInFirebase() {
    yield takeEvery(LOGIN_USER, signInUserWithEmailPassword);
}

/**
 * Signin User In Firebase
 */
export function* signinUserInBloomtech() {
    yield takeEvery(LOGIN_USER_BLOOMTECH, signInUserWithEmailPasswordBloomtech);
}

/**
 * Signin User With Facebook
 */
export function* signInWithFacebook() {
    yield takeEvery(LOGIN_FACEBOOK_USER, signinUserWithFacebookAccount);
}

/**
 * Signin User With Google
 */
export function* signInWithGoogle() {
    yield takeEvery(LOGIN_GOOGLE_USER, signinUserWithGoogleAccount);
}

/**
 * Signin User With Twitter
 */
export function* signInWithTwitter() {
    yield takeEvery(LOGIN_TWITTER_USER, signinUserWithTwitterAccount);
}

/**
 * Signin User With Github
 */
export function* signInWithGithub() {
    yield takeEvery(LOGIN_GITHUB_USER, signinUserWithGithubAccount);
}

/**
 * Signout User From Firebase
 */
export function* signOutUser() {
    yield takeEvery(LOGOUT_USER, signOut);
}

/**
 * Create User
 */
export function* createUserAccount() {
    yield takeEvery(SIGNUP_USER, createUserWithEmailPassword);
}

/**
 * Create User Bloomtech
 */
 export function* createUserAccountBloomtech() {
    yield takeEvery(SIGNUP_USER_BLOOMTECH, createUserWithEmailPasswordBloomtech);
}

/**
 * Create Normal User
 */
 export function* createUserAccountNormal() {
    yield takeEvery(SIGNUP_USER_NORMAL, createUserWithEmailPasswordNormal);
}

/**
 * Create User in your account
 */
 export function* signinUserInyourAccount() {
    yield takeEvery(SIGNUP_USER_AUTH, createUserinyourAccount);
}

/**
 * Create User sponsor
 */
 export function* signinUserSponsor() {
    yield takeEvery(SIGNUP_USER_SPONSOR, createUserSponsor);
}


/**
 * Auth Root Saga
 */
export default function* rootSaga() {
    yield all([
        fork(signinUserInBloomtech),
        fork(signinUserInFirebase),
        fork(signInWithFacebook),
        fork(signInWithGoogle),
        fork(signInWithTwitter),
        fork(signInWithGithub),
        fork(signOutUser),
        fork(createUserAccount),
        fork(createUserAccountBloomtech),
        fork(createUserAccountNormal),
        fork(signinUserInyourAccount),
        fork(signinUserSponsor),
    ]);
}