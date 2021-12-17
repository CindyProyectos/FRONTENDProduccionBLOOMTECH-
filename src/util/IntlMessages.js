/**
 * Language Provider Helper Component
 * Used to Display Localised Strings
 */
import React from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';

import authToken from '../Auth/utils/authToken';

if(localStorage.getItem('token')){
    authToken(localStorage.getItem('token'));
}


// Injected message
const InjectMassage = props => <FormattedMessage {...props} />;

export default injectIntl(InjectMassage, {
    withRef: false
});

export const errorCode = 202;