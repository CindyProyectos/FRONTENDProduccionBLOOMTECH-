/**
 * App Reducers
 */
import { createStore, combineReducers } from 'redux';
import settings from './settings';
import chatAppReducer from './ChatAppReducer';
import emailAppReducer from './EmailAppReducer';
import sidebarReducer from './SidebarReducer';
import todoAppReducer from './TodoAppReducer';
import authUserReducer from './AuthUserReducer';
import feedbacksReducer from './FeedbacksReducer';
import ecommerceReducer from './EcommerceReducer';
import CrmReducer from './CrmReducer';
import realTimePricingReducer from './RealTimePricingReducer';

import authToken from '../Auth/utils/authToken';

if(localStorage.getItem('token')){
    authToken(localStorage.getItem('token'));
}

const reducers = combineReducers({
   settings,
   chatAppReducer,
   emailApp: emailAppReducer,
   sidebar: sidebarReducer,
   todoApp: todoAppReducer,
   authUser: authUserReducer,
   feedback: feedbacksReducer,
   ecommerce: ecommerceReducer,
   CrmReducer: CrmReducer,
   realTimePricing: realTimePricingReducer,
});

export default reducers;
