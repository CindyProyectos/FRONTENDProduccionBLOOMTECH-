/**
 * App Routes
 */
import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

// app default layout
import RctAppLayout from 'Components/RctAppLayout';

// router service
import routerService from "../services/_routerService";

import authToken from '../Auth/utils/authToken';

if(localStorage.getItem('token')){
    authToken(localStorage.getItem('token'));
}

class DefaultLayout extends Component {
	render() {
		const { match } = this.props;
		return (
			<RctAppLayout>
				{routerService && routerService.map((route,key)=>
					<Route key={key} path={`${match.url}/${route.path}`} component={route.component} />
				)}
			</RctAppLayout>
		);
	}
}

export default withRouter(connect(null)(DefaultLayout));
