/**
 * Add Sponsor Page
 */
 import React, { Component } from 'react';
 import { FormGroup, Input, Form, Label, Col, InputGroup, InputGroupAddon } from 'reactstrap';
 import Button from '@material-ui/core/Button';
 import { NotificationManager } from 'react-notifications';
 import { connect } from 'react-redux';
 
 // intlmessages
 import IntlMessages from 'Util/IntlMessages';
 
   // redux action
   import {
    signinUserSponsor
 } from 'Actions';
 
class Addsponsor extends Component {

    state = {
        usuario: '',
        email: '',
        contrasena: '',
        dni: '',
        telefono: '',
        nombres: '',
        sponsor: ''
     }
 
    /**
     * On Update Profile
     */
    onUpdateProfile() {
       NotificationManager.success('Profile Updated Successfully!');
    }

    onUserSignUpBoomtech() {
        const { usuario, email, contrasena, dni, telefono, nombres, sponsor } = this.state;
        if (email !== '' && contrasena !== '' && usuario !== '' && dni !== '' && telefono !== ''&& nombres !== '' && sponsor !== '') {
           this.props.signinUserSponsor({ usuario, email, contrasena, dni, telefono, nombres, sponsor }, this.props.history);
        }
     }
 
    render() {
       const { usuario, email, contrasena, dni, telefono, nombres, sponsor } = this.state;
       const { loading } = this.props;
       return (
          <div className="profile-wrapper w-50">
             <h2 className="heading"><IntlMessages id="widgets.personalDetails" /></h2>
             <Form>
                <FormGroup className="has-wrapper">
                    <Input
                        type="text"
                        value={sponsor}
                        name="sponsor"
                        id="sponsor"
                        className="has-input input-lg"
                        placeholder="Sponsor"
                        onChange={(e) => this.setState({ sponsor: e.target.value })}                                
                    />
                </FormGroup>

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

                          {/*<FormGroup className="has-wrapper">
                             <Input
                                value={contrasena}
                                type="Password"
                                name="user-pwd"
                                id="pwd"
                                className="has-input input-lg"
                                placeholder="Confirma la contraseña"
                                onChange={(e) => this.setState({ contrasena: e.target.value })}
                             />
                          </FormGroup> */}

                <hr />

                <FormGroup className="mb-15">
                    <Button
                            className="btn-info text-white btn-block w-100"
                            variant="contained"
                            size="large"
                            onClick={(e) => this.onUserSignUpBoomtech(e.preventDefault)}>
                                Registrar sponsor 
                                 </Button>
                          </FormGroup> 
             </Form>
             
            
          </div>
       );
    }
 }

   // map state to props
   const mapStateToProps = ({ authUser }) => {
    const { loading } = authUser;
    return { loading };
 };
 
 export default connect(mapStateToProps, {
    signinUserSponsor
 })(Addsponsor);