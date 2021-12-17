/**
 * Horizontal App
 */
import React, { Component } from 'react';
import { Route, withRouter, Redirect } from 'react-router-dom';

// horizontal layout
import RctHorizontalLayout from 'Components/RctHorizontalLayout';

// router service
import routerService from "../services/_routerService";

import authToken from '../Auth/utils/authToken';

if(localStorage.getItem('token')){
    authToken(localStorage.getItem('token'));
}

class RctHorizontalApp extends Component {
	render() {
		const { match, location } = this.props;
		if (location.pathname === '/horizontal') {
			return (<Redirect to={'/horizontal/dashboard/ecommerce'} />);
		}
		return (
			<RctHorizontalLayout>
				{routerService && routerService.map((route,key)=>
					<Route key={key} path={`${match.url}/${route.path}`} component={route.component} />
				)}
			</RctHorizontalLayout>
		);
	}
}

export default withRouter(RctHorizontalApp);
