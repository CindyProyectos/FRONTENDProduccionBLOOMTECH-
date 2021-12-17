/**
 * Deposit USD
 */
 import React, { Component } from 'react';
 import { FormGroup, Input, Form, Label, Col, InputGroup, InputGroupAddon } from 'reactstrap';
 import { Helmet } from "react-helmet";
 // page title bar
 import Button from '@material-ui/core/Button';
 import PageTitleBar from 'Components/PageTitleBar/PageTitleBar';
 
 // intl messages
 import IntlMessages from 'Util/IntlMessages';
 
 export default class Depositusd extends Component {
     render() {
         return (
             <div className="deposit-wrapper">
                 <Helmet>
                     <title>Deposit USD</title>
                     <meta name="description" content="Reactify Deposit USD Page" />
                 </Helmet>
                 <PageTitleBar title={<IntlMessages id="sidebar.dolar" />} match={this.props.match} />
                 
                 <Form>
                    <FormGroup row>
                        <div className="help-text d-flex p-10">
                            <i className="ti-info-alt mr-15 pt-5"></i>
                            <span>The deposit to be made must be in (USD).</span>
                        </div>
                        <div>
                            <img src={require(`Assets/img/dinero.png`)} height="55" />
                        </div>
                    </FormGroup>

                    <FormGroup row>
                        <Label for="depositUSD" sm={3}><IntlMessages id="components.depositUSD" /></Label>
                        <Col sm={9}>
                            <Input type="number" name="depositUSD" id="depositUSD" className="input-lg" />
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label for="receive" sm={3}><IntlMessages id="components.receive" /></Label>
                        <Col sm={9}>
                            <Input type="number" name="receive" id="receive" className="input-lg" disabled/>
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Col sm={4}>
                            <Button variant="contained" color="primary" className="text-white" onClick={() => this.onUpdateProfile()}><IntlMessages id="widgets.preview" /></Button>
                        </Col>
                        
                        <Col sm={4}>
                            <Button variant="contained" color="primary" className="text-white" onClick={() => this.onUpdateProfile()}><IntlMessages id="widgets.pay" /></Button>
                        </Col>
                    </FormGroup>
                </Form>
             </div>
         );
     }
 }