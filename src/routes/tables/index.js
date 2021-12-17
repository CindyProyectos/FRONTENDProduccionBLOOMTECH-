/**
 * Tables Routes
 */
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Helmet } from "react-helmet";
// async components
import {
    AsyncBasicTableComponent,
    AsyncDataTableComponent,
    AsyncResponsiveTableComponent,
    AsyncPricingTableComponent
} from 'Components/AsyncComponent/AsyncComponent';

const Pages = ({ match }) => (
    <div className="content-wrapper">
        <Helmet>
            <title>Reactify | Tables</title>
            <meta name="description" content="Reactify Tables" />
        </Helmet>
        <Switch>
            <Redirect exact from={`${match.url}/`} to={`${match.url}/real-time-pricing`} />
            <Route path={`${match.url}/basic`} component={AsyncBasicTableComponent} />
            <Route path={`${match.url}/data-table`} component={AsyncDataTableComponent} />
            <Route path={`${match.url}/responsive`} component={AsyncResponsiveTableComponent} />
            <Route path={`${match.url}/real-time-pricing`} component={AsyncPricingTableComponent} />
        </Switch>
    </div>
);

export default Pages;
