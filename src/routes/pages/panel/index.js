/**
 * Panel Page
 */
 import React, { Component } from 'react';
 import { Helmet } from "react-helmet";
 import { FormGroup, Input, Form, Label, Col, InputGroup, InputGroupAddon } from 'reactstrap';
 import Button from '@material-ui/core/Button';
 import Slider from "react-slick";
 // page title bar
 import PageTitleBar from 'Components/PageTitleBar/PageTitleBar';
 
 // intl messages
 import IntlMessages from 'Util/IntlMessages';

const slider_gallery = [
   "b1.png",
   "b2.png",
   "b3.png",
];
 
 export default class Panel extends Component {
    render() {
      const settings = {
         dots: true,
         infinite: true,
         speed: 500,
         slidesToShow: 2,
         autoplay: true,
         slidesToScroll: 2
      };
       return (
          <div className="panel-wrapper">
             <Helmet>
                <title>Panel Page</title>
                <meta name="description" content="Reactify Panel Page" />
             </Helmet>
             <PageTitleBar title={<IntlMessages id="sidebar.panel" />} match={this.props.match} />
             <div className="panel-status mb-30">

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
                     <h4>Team</h4>
                     <ul className="list-inline d-flex align-content-center">
                        <li className="list-inline-item col">
                           <h2 className="title">10</h2>
                        </li>
                        <li className="list-inline-item col">
                           <img src={require(`Assets/img/man.png`)} height="55" />
                        </li>
                     </ul>
                  </li>
                  <li className="list-inline-item col">
                     <h4>Direct</h4>
                     <ul className="list-inline d-flex align-content-center">
                        <li className="list-inline-item col">
                           <h2 className="title">5</h2>
                        </li>
                        <li className="list-inline-item col">
                           <img src={require(`Assets/img/united.png`)} height="55" />
                        </li>
                     </ul>
                  </li>
                  <li className="list-inline-item col">
                     <h4>Active</h4>
                     <ul className="list-inline d-flex align-content-center">
                        <li className="list-inline-item col">
                           <h2 className="title">0</h2>
                        </li>
                        <li className="list-inline-item col">
                           <img src={require(`Assets/img/checked.png`)} height="55" />
                        </li>
                     </ul>
                  </li>
                  <li className="list-inline-item col">
                     <h4>UVAD Price</h4>
                     <ul className="list-inline d-flex align-content-center">
                        <li className="list-inline-item col">
                           <h2 className="title">$0</h2>
                        </li>
                        <li className="list-inline-item col">
                           <img src={require(`Assets/img/uvad.png`)} height="55" />
                        </li>
                     </ul>
                  </li>
               </ul>


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
                     <h4>$0</h4>
                     <h4>Stake Earning</h4>
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
                     <h4>$0</h4>
                     <h4>Level Earning</h4>
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
                     <h4>$0</h4>
                     <h4>Total Earning</h4>
                  </li>
               </ul>

               <ul className="list-inline d-flex align-content-center">
                  <li className="list-inline-item col">
                     <ul className="list-inline d-flex align-content-center">
                        <li className="list-inline-item col">
                           <h2 className="title">0</h2>
                        </li>
                        <li className="list-inline-item col">
                           <img src={require(`Assets/img/uvad.png`)} height="35" />
                        </li>
                     </ul>
                     <h4>$0</h4>
                     <h4>UVAD Level Earning</h4>
                  </li>
                  <li className="list-inline-item col">
                     <ul className="list-inline d-flex align-content-center">
                        <li className="list-inline-item col">
                           <h2 className="title">0</h2>
                        </li>
                        <li className="list-inline-item col">
                           <img src={require(`Assets/img/uvad.png`)} height="35" />
                        </li>
                     </ul>
                     <h4>$0</h4>
                     <h4>UVAD Airdrop</h4>
                  </li>
                  <li className="list-inline-item col">
                     <ul className="list-inline d-flex align-content-center">
                        <li className="list-inline-item col">
                           <h2 className="title">0</h2>
                        </li>
                        <li className="list-inline-item col">
                           <img src={require(`Assets/img/uvad.png`)} height="35" />
                        </li>
                     </ul>
                     <h4>$0</h4>
                     <h4>UVAD Balance</h4>
                  </li>
                  <li className="list-inline-item col">
                     <h2 className="title">$0</h2>
                     <br/>
                     <h4>UVAD Price</h4>
                  </li>
               </ul>

               <ul className="list-inline d-flex align-content-center">
                  <li className="list-inline-item col">
                     <Label for="receive" sm={3}><IntlMessages id="compenets.enterEmailAddress" /></Label><br/>
                     <Input type="text" sm={4} name="receive" id="receive" className="input-lg"/><br/>
                     <Button sm={4} variant="contained" color="primary" className="text-white" onClick={() => this.onUpdateProfile()}><IntlMessages id="components.sendMessage" /></Button>
                  </li>
                  <li>
                     <img src={require(`Assets/img/mail-box.png`)} height="75" />
                  </li>
               </ul>

               <ul className="list-inline d-flex align-content-center">
                  <li className="list-inline-item col">
                     <h4>Rendimiento actual</h4>
                     <ul className="list-inline d-flex align-content-center">
                        <li className="list-inline-item col">
                           <h2 className="title">0%</h2>
                        </li>
                        <li className="list-inline-item col">
                           <h4>Mensual</h4>
                        </li>
                     </ul>
                  </li>
                  <li className="list-inline-item col">
                     <h4>USD totales apostados</h4>
                     <h4 className="title">$0</h4>
                  </li>
                  <li className="list-inline-item col">
                     <h4>Total de monedas apostadas</h4>
                     <ul className="list-inline d-flex align-content-center">
                        <li className="list-inline-item col">
                           <h2 className="title">0</h2>
                        </li>
                        <li className="list-inline-item col">
                           <h4>UVAD</h4>
                        </li>
                     </ul>
                     <h4>0 USD</h4>
                  </li>
                  <li className="list-inline-item col">
                     <h4>Rendimiento por 24 horas</h4>
                     <h4 className="title">0%</h4>
                  </li>
               </ul>
             </div>
          </div>
       );
    }
 }