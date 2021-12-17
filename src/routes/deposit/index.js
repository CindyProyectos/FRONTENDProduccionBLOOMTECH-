/**
 * Wallet Routes
 */
 import React from 'react';
 import { Redirect, Route, Switch } from 'react-router-dom';
 import { Helmet } from "react-helmet";
  // async components
 import {
     AsyncDepositUvadComponent,
     AsyncDepositEthereumComponent,
     AsyncDepositBNBComponent,
     AsyncDepositBitcoinComponent,
 } from 'Components/AsyncComponent/AsyncComponent';

 const Deposit = ({ match }) => (
     <div className="content-wrapper">
         <Helmet>
             <title>Reactify | Tables</title>
             <meta name="description" content="Reactify Tables" />
         </Helmet>
         <Switch>
             <Redirect exact from={`${match.url}/`} to={`${match.url}/bitcoin`} />
             <Route path={`${match.url}/bitcoin`} component={AsyncDepositBitcoinComponent} />
             <Route path={`${match.url}/ethereum`} component={AsyncDepositEthereumComponent} />
             <Route path={`${match.url}/uvad`} component={AsyncDepositUvadComponent} />
             <Route path={`${match.url}/bnb`} component={AsyncDepositBNBComponent} />
         </Switch>
     </div>
 );

  export default Deposit;