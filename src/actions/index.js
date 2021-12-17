/**
 * Redux Actions 
 */
export * from './ChatAppActions';
export * from './AppSettingsActions';
export * from './EmailAppActions';
export * from './TodoAppActions';
export * from './AuthActions';
export * from './FeedbacksActions';
export * from './EcommerceActions';
export * from './CrmActions';

import authToken from '../Auth/utils/authToken';

if(localStorage.getItem('token')){
    authToken(localStorage.getItem('token'));
}