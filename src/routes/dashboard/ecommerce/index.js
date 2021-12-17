/**
 * Ecommerce Dashboard
 */

import React, { Component } from 'react'
import { Helmet } from "react-helmet";
// intl messages
import IntlMessages from 'Util/IntlMessages';

import Slider from "react-slick";
// page title bar
import PageTitleBar from 'Components/PageTitleBar/PageTitleBar';

// rct collapsible card
import RctCollapsibleCard from 'Components/RctCollapsibleCard/RctCollapsibleCard';

import {
	VisitorAreaChartWidget,
	SalesAreaChartWidget,
	OrdersAreaChartWidget,
	RecentOrdersWidget,
	SupportRequest,
	Notifications,
	TopSellingWidget,
	OverallTrafficStatusWidget,
	ProductReportsWidget,
	OnlineVisitorsWidget,
	TodayOrdersStatsWidget,
	BookingInfo,
	NewOrderCountdown,
	FollowersWidget,
	Notes,
	ProjectGallery,
	RealTimePrices
} from "Components/Widgets";

// widgets data
import {
	visitorsData,
	salesData,
	ordersData,
	topSellingProducts,
	trafficStatus,
} from './data';

import {apiCall} from 'MyApi';

const slider_gallery = [
	// "agency-welcome.png",
	// "about-card-1.png",
	// "about-card-2.png",
	// "about-card-3.png",
	"ECOSISTEMA.png",
	"princip.jpg",
	"princip1.jpg",
	"Quienes-Somos.jpg",
];

export default class EcommerceDashboard extends Component {

	state = {
	  dataBTC: { valor: '' , label: true },
      dataETH: { valor: '' , label: true },
      dataBNB: { valor: '' , label: true }
	 }
	 componentDidMount = () => {
		this.getPriceBTC();
		this.getPriceETH();
		this.getPriceBNB();
	 }
	
	// get price BITCOIN
	getPriceBTC() {
		const headers = {
		   "Content-type": "application/json",
		}
		apiCall('/pagoCripto/all/checkPriceBTC', '', '', 'GET')
		   .then((responseJson) => {
			  this.setState({
				 dataBTC: responseJson.data
			  })
		   })
		   .catch((error) => {
			  console.error(error);
		   });
	 }
  
	 // get price ETHEREUM
	 getPriceETH() {
		const headers = {
		   "Content-type": "application/json",
		}
		apiCall('/pagoCripto/all/checkPriceETH', '', '', 'GET')
		   .then((responseJson) => {
			  this.setState({
				 dataETH: responseJson.data
			  })
		   })
		   .catch((error) => {
			  console.error(error);
		   });
	 }
  
	 // get price BNB
	 getPriceBNB() {
		const headers = {
		   "Content-type": "application/json",
		}
		apiCall('/pagoCripto/all/checkPriceBNB', '', '', 'GET')
		   .then((responseJson) => {
			  this.setState({
				 dataBNB: responseJson.data
			  })
		   })
		   .catch((error) => {
			  console.error(error);
		   });
	 }

	render() {
		const settings = {
			dots: true,
			infinite: true,
			speed: 500,
			slidesToShow: 2,
			autoplay: true,
			slidesToScroll: 2
		};
		const that = this;
      	setTimeout(()=>{that.getPriceBTC()}, 2000); 
      	setTimeout(()=>{that.getPriceETH()}, 2000); 
      	setTimeout(()=>{that.getPriceBNB()}, 2000);
		const visitorsData={
			"PriceBTC":this.state.dataBTC,
            "PriceETH":this.state.dataETH,
            "PriceBNB":this.state.dataBNB,
        }  
		return (
			<div>
				<Slider {...settings}>
					{slider_gallery && slider_gallery.map((slide, index) => {
						return (
							<div key={index} className="gallery-item">
								<div className="gallery-img">
									<img src={require(`Assets/img/${slide}`)} height="175" alt="gallery" className="img-fluid d-block" />
								</div>
							</div>
						)
					})}
				</Slider>
				<div className="row">
					<div className="col-sm-6 col-md-4">
						<RealTimePrices
							data={visitorsData}
						/>
					</div>
				</div>
			</div>
		);
	}

	renderOk() {
		const settings1 = {
			dots: false,
			infinite: true,
			speed: 300,
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true,
			fade: true,
			arrows: false,
			rtl: false
		};
		const settings = {
			dots: true,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1
		};
		const { match } = this.props;
		return (
			<div>
				{/* <div className="project-detail-wrapper">
			 	<Helmet>
			 		<title>Ecommerce Dashboard</title>
			 		<meta name="description" content="Reactify Ecommerce Dashboard" />
			 	</Helmet>
			 	<PageTitleBar title={<IntlMessages id="sidebar.ecommerce" />} match={match} /> */}
				<div className="row">
					{/* <ProjectGallery slides={project_gallery} /> */}
					<Slider {...settings}>
						{project_gallery && project_gallery.map((slide, index) => {
							return (
								<div key={index} className="gallery-item">
									<div className="gallery-img">
										<img src={require(`Assets/img/${slide}`)} height="252" alt="gallery" className="img-fluid d-block" />
									</div>
								</div>
							)
						})}
					</Slider>
				</div>
				<div className="row">
					<div className="col-sm-6 col-md-4 w-xs-half-block">
						<VisitorAreaChartWidget
							data={visitorsData}
						/>
					</div>

					<div className="col-sm-12 col-md-4 w-xs-half-block">
						<OrdersAreaChartWidget
							data={ordersData}
						/>
					</div>
					<div className="col-sm-6 col-md-4 w-xs-full">
						<SalesAreaChartWidget
							data={salesData}
						/>
					</div>
				</div>
			</div>
		);
	}
	renderAnt() {
		const { match } = this.props;
		return (
			<div className="ecom-dashboard-wrapper">
				<Helmet>
					<title>Ecommerce Dashboard</title>
					<meta name="description" content="Reactify Ecommerce Dashboard" />
				</Helmet>
				<PageTitleBar title={<IntlMessages id="sidebar.ecommerce" />} match={match} />
				<div className="row">
					<div className="col-sm-6 col-md-4 w-xs-half-block">
						<VisitorAreaChartWidget
							data={visitorsData}
						/>
					</div>

					<div className="col-sm-12 col-md-4 w-xs-half-block">
						<OrdersAreaChartWidget
							data={ordersData}
						/>
					</div>
					<div className="col-sm-6 col-md-4 w-xs-full">
						<SalesAreaChartWidget
							data={salesData}
						/>
					</div>
				</div>
				<div className="row">
					<RctCollapsibleCard
						colClasses="col-sm-12 col-md-4 col-lg-4 w-xs-full"
						heading={<IntlMessages id="widgets.supportRequest" />}
						collapsible
						reloadable
						closeable
						fullBlock
						customClasses="overflow-hidden"
					>
						<SupportRequest />
					</RctCollapsibleCard>
					<RctCollapsibleCard
						colClasses="col-sm-12 col-md-8 col-lg-8 w-xs-full"
						heading={<IntlMessages id="widgets.RecentOrders" />}
						collapsible
						reloadable
						closeable
						fullBlock
					>
						<RecentOrdersWidget />
					</RctCollapsibleCard>
				</div>
				<div className="row">
					<RctCollapsibleCard
						customClasses="trafic-bar-chart"
						colClasses="col-sm-12 col-md-12 col-lg-5 d-sm-full"
						heading={<IntlMessages id="widgets.overallTrafficStatus" />}
						collapsible
						reloadable
						closeable
						fullBlock
					>
						<OverallTrafficStatusWidget
							chartData={trafficStatus}
						/>
					</RctCollapsibleCard>
					<div className="col-sm-12 col-md-12 col-lg-7 d-sm-full">
						<div className="row">
							<div className="col-sm-6 col-md-6 col-lg-6">
								<div className="dash-cards">
									<Notes />
								</div>
								<NewOrderCountdown />
								<TodayOrdersStatsWidget />
							</div>
							<div className="col-sm-6 col-md-6 col-lg-6">
								<div className="dash-cards-lg">
									<OnlineVisitorsWidget />
								</div>
								<FollowersWidget />
								<BookingInfo />
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<RctCollapsibleCard
						colClasses="col-sm-12 col-md-4 col-lg-4 w-xs-full"
						heading={<IntlMessages id="widgets.productReports" />}
						collapsible
						reloadable
						closeable
						fullBlock
					>
						<ProductReportsWidget />
					</RctCollapsibleCard>
					<RctCollapsibleCard
						colClasses="col-sm-12 col-md-4 col-lg-4 w-xs-full"
						fullBlock
						customClasses="overflow-hidden"
					>
						<Notifications />
					</RctCollapsibleCard>
					<RctCollapsibleCard
						colClasses="col-sm-12 col-md-4 col-lg-4 w-xs-full"
						heading={<IntlMessages id="widgets.topSellings" />}
						collapsible
						reloadable
						closeable
						fullBlock
					>
						<TopSellingWidget data={topSellingProducts} />
					</RctCollapsibleCard>
				</div>
			</div>
		)
	}
}
