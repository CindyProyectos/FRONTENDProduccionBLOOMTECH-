/**
** Session Slider
**/
import React, { Component } from "react";
import Slider from "react-slick";

// api
import api from 'Api';

export default class SessionSlider extends Component {

	state = {
		sessionUsersData: null
	}

	componentDidMount() {
		this.getSessionUsersData();
	}

	getSessionUsersData() {
		api.get('testimonials.js')
			.then((response) => {
				console.log(response)
				this.setState({ sessionUsersData: response.data });
			})
			.catch(error => {
			})
	}

	render() {
		const settings = {
			dots: true,
			infinite: true,
			speed: 5,
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			autoplay: true,
			swipe: true,
			touchMove: true,
			swipeToSlide: true,
			draggable: true
		};
		const { sessionUsersData } = this.state;
		return (
			<div className="session-slider">
				<Slider {...settings}>
					{(sessionUsersData && sessionUsersData !== null) && sessionUsersData.map((data, key) => (
						
						<div key={key}>
							
							<img
								src="https://image.freepik.com/vector-gratis/plantilla-dinero-realista_1284-14310.jpg"
								alt="session-slider"
								className="img-fluid"
								width="377"
								height="588"
							/>
							<div className="rct-img-overlay">
								<h5 className="client-name">PAYBLOOM</h5>
								<span></span>
								<p className="mb-0 fs-14">La tecnología Blockchain permite crear una plataforma mundial de pagos con un completo paquete de servicios financieros que opera a nivel mundial.</p>
							</div>
						</div>
						
					))}
				</Slider>
			</div>
		);
	}
}
