/**
 * Wallet Routes
 */
 import React from 'react';
 import { Redirect, Route, Switch } from 'react-router-dom';
 import { Helmet } from "react-helmet";
  // async components
 import {
    AsyncConvertComponent,
    AsyncConvertHistoryComponent,
 } from 'Components/AsyncComponent/AsyncComponent';

 const Convert = ({ match }) => (
     <div className="content-wrapper">
         <Helmet>
             <title>Reactify | Tables</title>
             <meta name="description" content="Reactify Tables" />
         </Helmet>
         <Switch>
             <Redirect exact from={`${match.url}/`} to={`${match.url}/convert`} />
             <Route path={`${match.url}/convert`} component={AsyncConvertComponent} />
             <Route path={`${match.url}/history`} component={AsyncConvertHistoryComponent} />
         </Switch>
     </div>
 );

  export default Convert;