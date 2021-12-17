/**
 * Visitor Area Chart Widget
 */
import React from 'react';

//Cada clase esta generada por contenedores, para llamar a los precios
// se usa la variable data  
const RealTimePrices = ({ data }) => (

    <div className="pricing-wrapper" >
        <br /> <br />
        <div className="pricing-top mb-90">
            <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-9 mx-auto text-center">
                    <div className="row">
                        <span className="col-7 text-left" ><strong>Bitcoin Valor actual:</strong></span>
                        <span className="col-5 text-left" ><strong>{data.PriceBTC}</strong></span>
                    </div>
                </div>
                <div className="float-right hidden-md-down">
                    <div className="featured-section-icon">
                        <i className="zmdi zmdi-globe-alt"></i>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-9 mx-auto text-center">
                    <div className="row">
                        <span className="col-7 text-left" ><strong>Ethereum Valor actual:</strong></span>
                        <span className="col-5 text-left" ><strong>{data.PriceETH}</strong></span>
                    </div>
                </div>
                <div className="float-right hidden-md-down">
                    <div className="featured-section-icon">
                        <i className="zmdi zmdi-globe-alt"></i>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-9 mx-auto text-center">
                    <div className="row">
                        <span className="col-7 text-left" ><strong>BNB Valor actual:</strong></span>
                        <span className="col-5 text-left" ><strong>{data.PriceBNB}</strong></span>
                    </div>
                </div>
                <div className="float-right hidden-md-down">
                    <div className="featured-section-icon">
                        <i className="zmdi zmdi-globe-alt"></i>
                    </div>
                </div>
            </div>
        </div>
    </div >

);

export default RealTimePrices;
