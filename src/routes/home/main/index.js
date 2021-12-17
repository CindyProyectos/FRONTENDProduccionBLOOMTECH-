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
	 RealTimePrices
 } from "Components/Widgets";
 import axios from 'axios';
 
 import {apiCall} from 'MyApi';

 
 const slider_gallery = [
	 "b3.png",
	 "b4.png",
	 "b5.png",
 ];
 const initialState = [];
 export default class MainHome extends Component {

	state = {
		persons: []
	}

	constructor (props) {
		super(props)

		this.state = {
			datosP: [],
			isFetch: true
		}
	}

	componentDidMount(){
		fetch('http://localhost:8080/api/price/find',{
			//credentials: 'include',
			headers:{
				'Authorization': 'Bearer '+localStorage.getItem('token'),
				'Access-Control-Allow-Headers': '*',
				'Access-Control-Allow-Origin':'*',                       
				'Access-Control-Allow-Methods':'GET, PUT, POST, OPTIONS, DELETE',
				'Allow':'GET,POST,OPTIONS,PUT,DELETE',
			}
		})
		.then(response => response.json())
		.then(priceJson => this.setState({datosP: priceJson.data, isFetch: false}))
	}
	
	//   componentDidMount() {
	// 	axios.get(`http://localhost:8080/price/find`)
	// 	  .then(res => {
	// 		const persons = res.data;
	// 		this.setState({ persons });
	// 	  })
	//   }
	// constructor(props) {
	// 	super(props);
	// 	this.state = {
	// 		datamoney: initialState
	// 	};
	//  };

	//  getPriceBNB() {
	// 	apiCall('/price/find', '', '', 'GET')
	// 	   .then((responseJson) => {
	// 		  this.setState({
	// 			 datamoney: responseJson.data.map((sons) => (
	// 				[sons.status.error_code]
	// 			 ))
	// 		 })
	// 	   })
	// 	   .catch((error) => {
	// 		  this.setState({
	// 				datamoney: initialState
	// 			})
	// 	   });
	//  };
 
	 render() {
		//const data = [this.state.datamoney];
		//const data1 = [this.state.persons[0].id];
		const settings = {
			 dots: true,
			 infinite: true,
			 speed: 500,
			 slidesToShow: 2,
			 autoplay: true,
			 slidesToScroll: 2
		 };

		 if(this.state.isFetch){
			return (
				<div>
					<ul className="list-inline d-flex align-content-center">
					 <li className="list-inline-item col">
						<ul className="list-inline d-flex align-content-center">
						   <li className="list-inline-item col">
							  <h2 className="title">0</h2>
						   </li>
						   <li className="list-inline-item col">
							  <img src={require(`Assets/img/bitcoin.png`)} height="45" />
						   </li>
						</ul> 
					 </li>
					 <li className="list-inline-item col">
						<ul className="list-inline d-flex align-content-center">
						   <li className="list-inline-item col">
							  <h2 className="title">0</h2>
						   </li>
						   <li className="list-inline-item col">
							  <img src={require(`Assets/img/ethereum.png`)} height="45" />
						   </li>
						</ul>
					 </li>
					 <li className="list-inline-item col">
						<ul className="list-inline d-flex align-content-center">
						   <li className="list-inline-item col">
							  <h2 className="title">0</h2>
						   </li>
						   <li className="list-inline-item col">
							  <img src={require(`Assets/img/binance.png`)} height="45" />
						   </li>
						</ul>
					 </li>
				  </ul>				
   
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
					</Slider> <br/>
					
					<ul className="list-inline d-flex align-content-center">
					 
					 <li className="list-inline-item col">
						<h1>Name</h1>  
					 </li>
					 <li className="list-inline-item col">
						<h1>Coin</h1>
					 </li>
					 <li className="list-inline-item col">
						<h1>Price</h1>
					 </li>
					</ul>
					<ul className="list-inline d-flex align-content-center">
					 
					 <li className="list-inline-item col">
						<h2>Bitcoin</h2>  
					 </li>
					 <li className="list-inline-item col">
						<img src={require(`Assets/img/bitcoin.png`)} height="35" />
					 </li>
					 <li className="list-inline-item col">
						<h2>0 $</h2>
					 </li>
					</ul>
					<ul className="list-inline d-flex align-content-center">
					 
					 <li className="list-inline-item col">
						<h2>Ethereum</h2>  
					 </li>
					 <li className="list-inline-item col">
						<img src={require(`Assets/img/ethereum.png`)} height="35" />
					 </li>
					 <li className="list-inline-item col">
						<h2>0 $</h2>
					 </li>
					</ul>
					<ul className="list-inline d-flex align-content-center">
					 
					 <li className="list-inline-item col">
						<h2>Binance</h2>  
					 </li>
					 <li className="list-inline-item col">
						<img src={require(`Assets/img/binance.png`)} height="35" />
					 </li>
					 <li className="list-inline-item col">
						<h2>0 $</h2>
					 </li>
					</ul>
					<ul className="list-inline d-flex align-content-center">
					 
					 <li className="list-inline-item col">
						<h2>UVAD</h2>  
					 </li>
					 <li className="list-inline-item col">
						<img src={require(`Assets/img/uvad.png`)} height="35" />
					 </li>
					 <li className="list-inline-item col">
						<h2>0 $</h2>
					 </li>
					</ul>			
   
					 
				</div>
			);
		 }
		 const bitcoin = this.state.datosP[0].quote.USD.price;
		 const ethereum = this.state.datosP[1].quote.USD.price;
		 const bnb = this.state.datosP[2].quote.USD.price;
		 console.log(bitcoin);
		
		 return (
			 <div>
				 <ul className="list-inline d-flex align-content-center">
                  <li className="list-inline-item col">
                     <ul className="list-inline d-flex align-content-center">
                        <li className="list-inline-item col">
                           <h2 className="title">{bitcoin.toFixed(3)}</h2>
                        </li>
                        <li className="list-inline-item col">
                           <img src={require(`Assets/img/bitcoin.png`)} height="45" />
                        </li>
                     </ul> 
                  </li>
                  <li className="list-inline-item col">
                     <ul className="list-inline d-flex align-content-center">
                        <li className="list-inline-item col">
                           <h2 className="title">{ethereum.toFixed(3)}</h2>
                        </li>
                        <li className="list-inline-item col">
                           <img src={require(`Assets/img/ethereum.png`)} height="45" />
                        </li>
                     </ul>
                  </li>
                  <li className="list-inline-item col">
                     <ul className="list-inline d-flex align-content-center">
                        <li className="list-inline-item col">
                           <h2 className="title">{bnb.toFixed(3)}</h2>
                        </li>
                        <li className="list-inline-item col">
                           <img src={require(`Assets/img/binance.png`)} height="45" />
                        </li>
                     </ul>
                  </li>
               </ul>				

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
				 </Slider> <br/>
				 
				 <ul className="list-inline d-flex align-content-center">
                  
                  <li className="list-inline-item col">
                     <h1>Name</h1>  
                  </li>
                  <li className="list-inline-item col">
                     <h1>Coin</h1>
                  </li>
                  <li className="list-inline-item col">
                     <h1>Price</h1>
                  </li>
                 </ul>
				 <ul className="list-inline d-flex align-content-center">
                  
                  <li className="list-inline-item col">
                     <h2>Bitcoin</h2>  
                  </li>
                  <li className="list-inline-item col">
					 <img src={require(`Assets/img/bitcoin.png`)} height="35" />
                  </li>
                  <li className="list-inline-item col">
                     <h2>{bitcoin.toFixed(3)} $</h2>
                  </li>
                 </ul>
				 <ul className="list-inline d-flex align-content-center">
                  
                  <li className="list-inline-item col">
                     <h2>Ethereum</h2>  
                  </li>
                  <li className="list-inline-item col">
					 <img src={require(`Assets/img/ethereum.png`)} height="35" />
                  </li>
                  <li className="list-inline-item col">
                     <h2>{ethereum.toFixed(3)} $</h2>
                  </li>
                 </ul>
				 <ul className="list-inline d-flex align-content-center">
                  
                  <li className="list-inline-item col">
                     <h2>Binance</h2>  
                  </li>
                  <li className="list-inline-item col">
					 <img src={require(`Assets/img/binance.png`)} height="35" />
                  </li>
                  <li className="list-inline-item col">
                     <h2>{bnb.toFixed(3)} $</h2>
                  </li>
                 </ul>
				 <ul className="list-inline d-flex align-content-center">
                  
                  <li className="list-inline-item col">
                     <h2>UVAD</h2>  
                  </li>
                  <li className="list-inline-item col">
					 <img src={require(`Assets/img/uvad.png`)} height="35" />
                  </li>
                  <li className="list-inline-item col">
                     <h2>0 $</h2>
                  </li>
                 </ul>			

				  
			 </div>
		 );
	 }
 }
 