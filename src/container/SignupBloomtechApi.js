/**
 * Sign Up With Firebase
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

 import authToken from '../Auth/utils/authToken';

if(localStorage.getItem('token')){
    authToken(localStorage.getItem('token'));
}
 
 // components
 import { SessionSlider } from 'Components/Widgets';
 
 // app config
 import AppConfig from 'Constants/AppConfig';
 
 // redux action
 import {
    signupUserInBloomtech,
    signinUserWithFacebook,
    signinUserWithGoogle,
    signinUserWithGithub,
    signinUserWithTwitter
 } from 'Actions';
 
 class SignupBloomtechApi extends Component {
 
    state = {
       usuario: '',
       email: '',
       contrasena: '',
       dni: '',
       telefono: '',
       nombres: ''
    }
 
     /**
      * On User Signup
      */
    onUserSignUpBoomtech() {
       const { usuario, email, contrasena, dni, telefono, nombres } = this.state;
       if (email !== '' && contrasena !== '') {
          this.props.signupUserInBloomtech({ usuario, email, contrasena, dni, telefono, nombres }, this.props.history);
       }
    }
 
    render() {
       const { usuario, email, contrasena, dni, telefono, nombres } = this.state;
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
                                  <h2>Get started with {AppConfig.brandName}</h2>
                               </div>
                               <Form>
                               <FormGroup className="has-wrapper">
                                     <Input
                                        type="text"
                                        value={nombres}
                                        name="nombres"
                                        id="nombres"
                                        className="has-input input-lg"
                                        placeholder="Ingresa tu nombre"
                                        onChange={(e) => this.setState({ nombres: e.target.value })}
                                     />
                                     <span className="has-icon"><i className="ti-user"></i></span>
                                  </FormGroup>
                                  <FormGroup className="has-wrapper">
                                     <Input
                                        type="text"
                                        value={usuario}
                                        name="user-name"
                                        id="user-name"
                                        className="has-input input-lg"
                                        placeholder="Ingresa tu usuario"
                                        onChange={(e) => this.setState({ usuario: e.target.value })}
                                     />
                                     <span className="has-icon"><i className="ti-user"></i></span>
                                  </FormGroup>
                                  <FormGroup className="has-wrapper">
                                     <Input
                                        type="text"
                                        value={dni}
                                        name="dni"
                                        id="dni"
                                        className="has-input input-lg"
                                        placeholder="Ingresa el dni"
                                        onChange={(e) => this.setState({ dni: e.target.value })}
                                     />
                                     <span className="has-icon"><i className="ti-user"></i></span>
                                  </FormGroup>
                                  <FormGroup className="has-wrapper">
                                     <Input
                                        type="text"
                                        value={telefono}
                                        name="telefono"
                                        id="telefono"
                                        className="has-input input-lg"
                                        placeholder="Ingresa tu telefono"
                                        onChange={(e) => this.setState({ telefono: e.target.value })}
                                     />
                                     <span className="has-icon"><i className="ti-user"></i></span>
                                  </FormGroup>
                                  <FormGroup className="has-wrapper">
                                     <Input
                                        type="mail"
                                        value={email}
                                        name="email"
                                        id="email"
                                        className="has-input input-lg"
                                        placeholder="Ingresa tu correo electrónico"
                                        onChange={(e) => this.setState({ email: e.target.value })}
                                     />
                                     <span className="has-icon"><i className="ti-email"></i></span>
                                  </FormGroup>
                                  <FormGroup className="has-wrapper">
                                     <Input
                                        value={contrasena}
                                        type="Password"
                                        name="user-pwd"
                                        id="pwd"
                                        className="has-input input-lg"
                                        placeholder="Ingresa tu contraseña"
                                        onChange={(e) => this.setState({ contrasena: e.target.value })}
                                     />
                                     <span className="has-icon"><i className="ti-lock"></i></span>
                                  </FormGroup>

                                  <FormGroup className="has-wrapper">
                                     <Input
                                        value={contrasena}
                                        type="Password"
                                        name="user-pwd"
                                        id="pwd"
                                        className="has-input input-lg"
                                        placeholder="Confirma la contraseña"
                                        onChange={(e) => this.setState({ contrasena: e.target.value })}
                                     />
                                     <span className="has-icon"><i className="ti-lock"></i></span>
                                  </FormGroup>

                                  <FormGroup className="mb-15">
                                     <Button
                                        className="btn-info text-white btn-block w-100"
                                        variant="contained"
                                        size="large"
                                        onClick={(e) => this.onUserSignUpBoomtech(e.preventDefault)}>
                                        Registrarse
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
 })(SignupBloomtechApi);
 