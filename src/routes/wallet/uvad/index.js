/**
 * Basic Table
 */
 import React, { Component, Fragment } from 'react';
 import { FormGroup, Input, Form, Label, Col, InputGroup, InputGroupAddon } from 'reactstrap';
 import Button from '@material-ui/core/Button';
 //import { connect } from 'react-redux';

 // api
 import api from 'Api';

 // page title bar
 import PageTitleBar from 'Components/PageTitleBar/PageTitleBar';

 // intl messages
 import IntlMessages from 'Util/IntlMessages';

 // rct card box
 import RctCollapsibleCard from 'Components/RctCollapsibleCard/RctCollapsibleCard';

 import { apiCall } from 'MyApi';

 class WalletUvad extends Component {

     constructor(props) {
         super(props);
     };

     render() {
         const { match } = this.props;

         return (
             <div className="table-wrapper">
                 <PageTitleBar title={<IntlMessages id="sidebar.wallet.uvad.title" />} match={match} />
                 <Form>
                    <FormGroup row>
                        <div className="help-text d-flex p-10">
                            <i className="ti-info-alt mr-15 pt-5"></i>
                            <span>The wallet key must be in (UVAD).</span>
                        </div>
                        <div>
                            <img src={require(`Assets/img/uvad.png`)} height="55" />
                        </div>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="receive" sm={3}><IntlMessages id="sidebar.wallet.uvad.title" /></Label>
                        <Col sm={9}>
                            <Input type="text" name="receive" id="receive" className="input-lg"/>
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Col sm={4}>
                            <Button variant="contained" color="primary" className="text-white" onClick={() => this.onUpdateProfile()}><IntlMessages id="sidebar.register" /></Button>
                        </Col>
                    </FormGroup>
                 </Form>
             </div>
         );
     }
 }
 

 export default WalletUvad;