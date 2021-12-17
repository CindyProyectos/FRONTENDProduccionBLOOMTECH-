/**
 * Redux Store
 */
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from "redux-saga";
import reducers from '../reducers';
import RootSaga from "../sagas";
import authToken from '../Auth/utils/authToken';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

export function configureStore(initialState) {

    const store = createStore(
        reducers,
        initialState,
        compose(applyMiddleware(...middlewares))
    );

    sagaMiddleware.run(RootSaga);

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers/index', () => {
            const nextRootReducer = require('../reducers/index');
            store.replaceReducer(nextRootReducer);
        });
    }

    if(localStorage.getItem('token')){
        authToken(localStorage.getItem('token'));
    }

    return store;
}
