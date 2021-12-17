/**
 * Home Routes
 */
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

// async components
import {
   AsyncHomePage
} from 'Components/AsyncComponent/AsyncComponent';

const Home = ({ match }) => (
   <div className="dashboard-wrapper">
      <Switch>
         <Redirect exact from={`${match.url}/`} to={`${match.url}/main`} />
         <Route path={`${match.url}/main`} component={AsyncHomePage} />
      </Switch>
   </div>
);

export default Home;
