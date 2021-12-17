/**
 * Horizontal App
 */
import React, { Component } from 'react';
import { Route, withRouter, Redirect } from 'react-router-dom';

// app default layout
import RctCRMLayout from '../components/RctCRMLayout';

// router service
import routerService from "../services/_routerService";

import authToken from '../Auth/utils/authToken';

if(localStorage.getItem('token')){
    authToken(localStorage.getItem('token'));
}

class CRMLayout extends Component {
   render() {
      const { match, location } = this.props;
      if (location.pathname === '/dashboard') {
         return (<Redirect to={'/dashboard/crm/dashboard'} />);
      }
      return (
         <RctCRMLayout >
            {routerService && routerService.map((route, key) =>
               <Route key={key} path={`${match.url}/${route.path}`} component={route.component} />
            )}
         </RctCRMLayout >
      );
   }
}

export default withRouter(CRMLayout);
