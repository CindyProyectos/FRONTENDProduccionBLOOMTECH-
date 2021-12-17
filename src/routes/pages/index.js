/**
 * Pages Routes
 */
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

// async components
import {
    AsyncGalleryComponent,
    AsyncFeedbackComponent,
    AsyncReportComponent,
    AsyncFaqComponent,
    AsyncPricingComponent,
    AsyncBlankComponent,
    AsyncPageUnderConstruction,
    AsyncPanelPage,
    AsyncMyTeamPage,
    AsyncAllTeamPage,
    AsyncDepositUSDPage,
    AsyncWithdrawPage,
    AsyncAddUsersPage,
    AsyncListUsersPage,
} from 'Components/AsyncComponent/AsyncComponent';
//Aqui estan las llamadas para cada pagina
const Pages = ({ match }) => (
    <div className="content-wrapper">
        <Switch>
            <Redirect exact from={`${match.url}/`} to={`${match.url}/gallery`} />
            <Route path={`${match.url}/gallery`} component={AsyncGalleryComponent} />
            <Route path={`${match.url}/pricing`} component={AsyncPricingComponent} />
            <Route path={`${match.url}/blank`} component={AsyncBlankComponent} />
            <Route path={`${match.url}/feedback`} component={AsyncFeedbackComponent} />
            <Route path={`${match.url}/report`} component={AsyncReportComponent} />
            <Route path={`${match.url}/faq`} component={AsyncFaqComponent} />
            <Route path={`${match.url}/construction`} component={AsyncPageUnderConstruction} />
            <Route path={`${match.url}/panel`} component={AsyncPanelPage} />
            <Route path={`${match.url}/myteam`} component={AsyncMyTeamPage} />
            <Route path={`${match.url}/allteam`} component={AsyncAllTeamPage} />
            <Route path={`${match.url}/depositusd`} component={AsyncDepositUSDPage} />
            <Route path={`${match.url}/withdraw`} component={AsyncWithdrawPage} />
            <Route path={`${match.url}/addusers`} component={AsyncAddUsersPage} />
            <Route path={`${match.url}/listusers`} component={AsyncListUsersPage} />
        </Switch>
    </div>
);

export default Pages;
