/**
 * Withdraw
 */
 import React, { Component } from 'react';
 import { Helmet } from "react-helmet";
 import { FormGroup, Input, Form, Label, Col, InputGroup, InputGroupAddon } from 'reactstrap';
 // page title bar
 import Button from '@material-ui/core/Button';
 import PageTitleBar from 'Components/PageTitleBar/PageTitleBar';
 
 // intl messages
 import IntlMessages from 'Util/IntlMessages';
 
 export default class Withdraw extends Component {
     render() {
         return (
             <div className="withdraw-wrapper">
                 <Helmet>
                     <title>Retirar Page</title>
                     <meta name="description" content="Reactify Retirar Page" />
                 </Helmet>
                 <PageTitleBar title={<IntlMessages id="sidebar.retirar" />} match={this.props.match} />
             
                <Form>
                    <FormGroup row>
                        <div className="help-text d-flex p-10">
                            <i className="ti-info-alt mr-15 pt-5"></i>
                            <span>Do not withdraw UVAD directly to any Contract Address may result in the loss of your funds.</span>
                        </div>
                    </FormGroup>

                    <FormGroup row>
                        <Label for="uvadbalance" sm={3}><IntlMessages id="components.uvadbalance" /></Label>
                        <Col sm={9}>
                            <Input type="number" name="uvadbalance" id="uvadbalance" className="input-lg" disabled/>
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label for="uvadretiro" sm={3}><IntlMessages id="components.uvadretiro" /></Label>
                        <Col sm={9}>
                            <Input type="number" name="uvadretiro" id="receive" className="input-lg" />
                        </Col>
                    </FormGroup>
                    <hr />
                    <Button variant="contained" color="primary" className="text-white" onClick={() => this.onUpdateProfile()}><IntlMessages id="sidebar.retirar" /></Button>
                    <hr />
                </Form>      
             </div>
             
         );
     }
 }