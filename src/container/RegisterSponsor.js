/**
 * Register sponsor
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
    signinUserWithTwitter,
    signupUserNormal,
 } from 'Actions';
 
 class RegisterSponsor extends Component {
 
    state = {
       nombres: '',
       telefono: '',
       email: '',
       rol: '',
       estado: '',
       usuario: '',
       clave_invitacion: '',
       contrasena: '',
       foto: '',
       fecha_creacion: '',
       fecha_modificacion: '',
       rango: '',
       dni: '',
    }

    onHandleChangeNumericTelefono = e => {
      let valu = e.target.value;
     
      if (!Number(valu)) {
      return;
      }
     
      this.setState({ telefono: e.target.value });
     }

     onHandleChangeNumericDni = e => {
      let valu = e.target.value;
     
      if (!Number(valu)) {
      return;
      }
     
      this.setState({ telefono: e.target.value });
     }


    onUserSignUpNormal(){
      const { nombres , telefono, email, rol, estado, usuario, clave_invitacion, contrasena, foto, fecha_creacion, fecha_modificacion, rango, dni } = this.state;
      if (email !== '' && contrasena !== '') {
         this.props.signupUserNormal({ nombres, telefono, email, rol, estado, usuario, clave_invitacion, contrasena, foto, fecha_creacion, fecha_modificacion, rango, dni }, this.props.history);
      }
    }
 
 
    render() {
       const { nombres , telefono, email, rol, estado, usuario, clave_invitacion, contrasena, foto, fecha_creacion, fecha_modificacion, rango, dni } = this.state;
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
                                  <h2>Sign Up {AppConfig.brandName}</h2>
                               </div>
                               <Form>
                                  <FormGroup className="has-wrapper">
                                     <Input
                                        disabled
                                        type="text"
                                        className="has-input input-lg"
                                        placeholder="Sponsor"
                                     />
                                
                                  </FormGroup>
                                  <FormGroup className="has-wrapper">
                                     <Input
                                        type="text"
                                        value={nombres}
                                        className="has-input input-lg"
                                        placeholder="Full Name"
                                        onChange={(e) => this.setState({ nombres: e.target.value })}
                                     />
                                  </FormGroup>

                                  <FormGroup className="has-wrapper">
                                     <Input
                                        type="text"
                                        value={telefono}
                                        className="has-input input-lg"
                                        placeholder="Mobile"
                                        //onChange={this.onHandleChangeNumericTelefono}
                                        onChange={(e) => this.setState({ telefono: e.target.value })}
                                     />
                                    
                                  </FormGroup>

                                  <FormGroup className="has-wrapper">
                                     <Input
                                        type="text"
                                        value={dni}
                                        className="has-input input-lg"
                                        placeholder="DNI"
                                        onChange={(e) => this.setState({ dni: e.target.value })}
                                        //onChange={this.onHandleChangeNumericDni}
                                     />
                                    
                                  </FormGroup>

                                  <FormGroup className="has-wrapper">
                                     <Input
                                        type="text"
                                        value={usuario}
                                        name="user-name"
                                        id="user-name"
                                        className="has-input input-lg"
                                        placeholder="Ingresa tu nombre de usuario"
                                        onChange={(e) => this.setState({ usuario: e.target.value })}
                                     />
                                     
                                  </FormGroup>

                                  <FormGroup className="has-wrapper">
                                     <Input
                                        type="text"
                                        value={dni}
                                        name="dni"
                                        id="dni"
                                        className="has-input input-lg"
                                        placeholder="Ingresa tu dni"
                                        onChange={(e) => this.setState({ dni: e.target.value })}
                                     />
                                     
                                  </FormGroup>

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
                                    
                                  </FormGroup>

                                  <FormGroup className="mb-15">
                                     <Button
                                        className="btn-info text-white btn-block w-100"
                                        variant="contained"
                                        size="large"
                                        onClick={(e) => this.onUserSignUpNormal(e.preventDefault)}>
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
    signinUserWithTwitter,
    signupUserNormal,
 })(RegisterSponsor);
 