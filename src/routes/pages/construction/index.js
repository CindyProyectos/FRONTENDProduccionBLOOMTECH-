/**
 * About Us Page
 */
import React, { Component } from 'react';
import { Helmet } from "react-helmet";

// page title bar
import PageTitleBar from 'Components/PageTitleBar/PageTitleBar';

// intl messages
import IntlMessages from 'Util/IntlMessages';

// rct card box
import { RctCard } from 'Components/RctCard';

export default class PageConstruction extends Component {
	render() {
		return (
			<div className="about-wrapper">
				<Helmet>
					<title>Page Under Construction</title>
					<meta name="description" content="Reactify About Us Page" />
				</Helmet>
				<PageTitleBar title={<IntlMessages id="sidebar.construction" />} match={this.props.match} />
				<div className="about-detail">
					<RctCard>
						<div className="row no-gutters row-eq-height align-items-center">
							<div className="col-sm-12 col-md-6 p-70">
								<div className="about-content align-items-center text-center">
									<span className="fw-bold d-block mb-20">{<IntlMessages id="sidebar.construction.message" />}</span>
									<p className="fs-14 mb-10">{<IntlMessages id="sidebar.construction.paragraph" />}</p>
									<h1 className="title mb-50">{<IntlMessages id="sidebar.construction.title" />}</h1>
									
									<div className="progress" style={{height:"20px"}}>
										<div className="progress-bar progress-bar-striped progress-bar-animated bg-warning" role="progressbar" style={{width:"50%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">50%</div>
									</div>
								</div>
							</div>
							<div className="col-sm-12 col-md-6">
								<div className="about-image">
									<img src={require('Assets/img/about-card-1.png')} alt="about gallery" className="img-fluid" width="743" height="495" />
								</div>
							</div>
						</div>
					</RctCard>
				</div>
			</div>
		);
	}
}
