/**
 * Not pass
 */
 import React, { Component } from 'react';
 import Button from '@material-ui/core/Button';
 import { connect } from 'react-redux';
 import AppBar from '@material-ui/core/AppBar';
 import Toolbar from '@material-ui/core/Toolbar';
 import { Link } from 'react-router-dom';
 import { Form, FormGroup, Input } from 'reactstrap';
 import LinearProgress from '@material-ui/core/LinearProgress';
 import QueueAnim from 'rc-queue-anim';
 import { Fab } from '@material-ui/core';
 
 // components
 import { SessionSlider } from 'Components/Widgets';
 
 // app config
 import AppConfig from 'Constants/AppConfig';

 import authToken from '../Auth/utils/authToken';

if(localStorage.getItem('token')){
    authToken(localStorage.getItem('token'));
}
 
 // redux action
 import {
    signupUserInBloomtech,
    signinUserWithFacebook,
    signinUserWithGoogle,
    signinUserWithGithub,
    signinUserWithTwitter
 } from 'Actions';
 
 class NotPassword extends Component {
 
    state = {
       name: '',
       email: '',
       password: ''
    }
 
     /**
      * On User Signup
      */
    onUserSignUpBoomtech() {
       const { name, email, password } = this.state;
       if (email !== '' && password !== '') {
          this.props.signupUserInBloomtech({ name, email, password }, this.props.history);
       }
    }
 
    render() {
       const { name, email, password } = this.state;
       const { loading } = this.props;
       return (
          <QueueAnim type="bottom" duration={2000}>
             <div className="rct-session-wrapper">
                {loading &&
                   <LinearProgress />
                }
                <AppBar position="static" className="session-header">
                   <Toolbar>
                      <div className="container">
                         <div className="d-flex justify-content-between">
                            <div className="session-logo">
                               <Link to="/">
                                  <img src={AppConfig.appLogo} alt="register-logo" className="img-fluid" width="110" height="35" />
                               </Link>
                            </div>
                            <div>
                               <Link to="/signinbloomtech" className="mr-15 text-white">Ya tienes una cuenta?</Link>
                               <Button
                                  component={Link}
                                  to="/signinbloomtech"
                                  variant="contained"
                                  className="btn-light"
                               >
                                  Iniciar Sesión
                                         </Button>
                            </div>
                         </div>
                      </div>
                   </Toolbar>
                </AppBar>
                <div className="session-inner-wrapper">
                   <div className="container">
                      <div className="row row-eq-height">
                         <div className="col-sm-7 col-md-7 col-lg-8">
                            <div className="session-body text-center">
                               <div className="session-head mb-15">
                                  <h2>Ingrese Email {AppConfig.brandName}</h2>
                               </div>
                               <Form> 
                                  <FormGroup className="has-wrapper">
                                     <Input
                                        type="mail"
                                        value={email}
                                        name="user-mail"
                                        id="user-mail"
                                        className="has-input input-lg"
                                        placeholder="Ingresa tu correo electrónico"
                                        onChange={(e) => this.setState({ email: e.target.value })}
                                     /> 
                                  </FormGroup>

                                  <FormGroup className="mb-15">
                                     <Button
                                        className="btn-info text-white btn-block w-100"
                                        variant="contained"
                                        size="large"
                                        onClick={(e) => this.onUserSignUpBoomtech(e.preventDefault)}>
                                        Enviar
                                         </Button>
                                  </FormGroup>
                               </Form>
                               <p className="text-muted">By signing up you agree to {AppConfig.brandName}</p>
                               <p><Link to="/terms-condition" className="text-muted">Terms of Service</Link></p>
                            </div>
                         </div>
                         <div className="col-sm-5 col-md-5 col-lg-4">
                            <SessionSlider />
                         </div>
                      </div>
                   </div>
                </div>
             </div>
          </QueueAnim>
       );
    }
 }
 
 // map state to props
 const mapStateToProps = ({ authUser }) => {
    const { loading } = authUser;
    return { loading };
 };
 
 export default connect(mapStateToProps, {
    signupUserInBloomtech,
    signinUserWithFacebook,
    signinUserWithGoogle,
    signinUserWithGithub,
    signinUserWithTwitter
 })(NotPassword);