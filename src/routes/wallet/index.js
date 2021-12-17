/**
 * Wallet Routes
 */
 import React from 'react';
 import { Redirect, Route, Switch } from 'react-router-dom';
 import { Helmet } from "react-helmet";
  // async components
 import {
     AsyncCustomerInformationComponent,
     AsyncWalletBTCComponent,
     AsyncWalletETHComponent,
     AsyncWalletUVADComponent,
 } from 'Components/AsyncComponent/AsyncComponent';
 
 const Wallet = ({ match }) => (
     <div className="content-wrapper">
         <Helmet>
             <title>Reactify | Tables</title>
             <meta name="description" content="Reactify Tables" />
         </Helmet>
         <Switch>
             <Redirect exact from={`${match.url}/`} to={`${match.url}/customer-information`} />
             <Route path={`${match.url}/bitcoin`} component={AsyncWalletBTCComponent} />
             <Route path={`${match.url}/ethereum`} component={AsyncWalletETHComponent} />
             <Route path={`${match.url}/uvad`} component={AsyncWalletUVADComponent} />
             <Route path={`${match.url}/customer-information`} component={AsyncCustomerInformationComponent} />
         </Switch>
     </div>
 );
 
  export default Wallet;