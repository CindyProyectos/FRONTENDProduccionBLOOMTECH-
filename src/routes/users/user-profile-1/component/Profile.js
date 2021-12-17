/**
 * Profile Page
 */
 import React, { Component } from 'react';
 import { FormGroup, Input, Form, Label, Col, InputGroup, InputGroupAddon } from 'reactstrap';
 import IconButton from '@material-ui/core/IconButton';
 import Button from '@material-ui/core/Button';
 import { NotificationManager } from 'react-notifications';
 
 // intlmessages
 import IntlMessages from 'Util/IntlMessages';


 import validator from 'validator'
 
 const initialState = [];
 
 export default class Profile extends Component {
 
    /**
     * On Update Profile
     */
    onUpdateProfile() {
       NotificationManager.success('Perfil actualizado con éxito!');
       console.log("User photo stored: "+localStorage.getItem("fotosuer"));
    }
    
    state = {
       id_usuario: localStorage.getItem('iduser'),
       // email: '',
       // contrasena: '',
       // dni: '',
       // telefono: '',
       password: '',
       paswd: ''
    }
 
    onUpdateProfile() {
       const { password, paswd } = this.state;
 
   
          if(password==''){
             NotificationManager.error('Ingrese la contraseña!');
          }else{
             if(paswd==''){
                NotificationManager.error('Verifique la contraseña!');
             }else{
                if (password !== paswd || password == "" || paswd == "") {
                   NotificationManager.error('Las contraseñas deben coincidir!');
                   //this.props.signinUserAuth({ password, paswd }, this.props.history);
                }else{

                  
  
                  if (validator.isStrongPassword(password, {
                     minLength: 8, minLowercase: 1,
                     minUppercase: 1, minNumbers: 1, minSymbols: 1
                  })) {
                     const requestOptions = {
                        method: 'GET'
                    };
                    fetch('http://localhost:8080/api/user/updatepwd/'+localStorage.getItem('iduser')+'/'+password , requestOptions)
                       .then(response => response.json())
                       .then(data => this.setState({ id_usuario: localStorage.getItem('iduser')}));
                    document.getElementById("address").value="";
                    document.getElementById("city").value="";
                    NotificationManager.success('Su contraseña se actualizado correctamente!');
                  } else {
                     NotificationManager.error('La contraseña debe tener: minimo 8 caracteres, una letra minúsculas, una letra mayúscula, un número, un caracter especial');
                  }
                  
                  
                }
                
             }
          }
         
       
 
    }

 
    render() {
       return (
          <div className="profile-wrapper w-50">
             <h2 className="heading"><IntlMessages id="widgets.personalDetails" /></h2>
             <Form>
                <FormGroup row>
                   <Label for="firstName" sm={3}><IntlMessages id="components.nombre" /></Label>
                   <Col sm={9}>
                      <Input type="text" name="firstName" id="firstName" className="input-lg" value={localStorage.getItem("nombreuser")} />
                   </Col>
                </FormGroup>
                <FormGroup row>
                   <Label for="telefono" sm={3}><IntlMessages id="components.telefono" /></Label>
                   <Col sm={9}>
                      <Input type="text" name="telefono" id="telefono" className="input-lg" value={localStorage.getItem("telefonouser")} />
                   </Col>
                </FormGroup>
                <FormGroup row>
                   <Label for="dni" sm={3}><IntlMessages id="components.dni" /></Label>
                   <Col sm={9}>
                      <Input type="text" name="dni" id="dni" className="input-lg" value={localStorage.getItem("dniuser")} disabled/>
                   </Col>
                </FormGroup>
                <FormGroup row>
                   <Label for="usuario" sm={3}><IntlMessages id="components.usuario" /></Label>
                   <Col sm={9}>
                      <Input type="text" name="usuario" id="usuario" className="input-lg" value={localStorage.getItem("user")} disabled/>
                   </Col>
                </FormGroup>
                <FormGroup row>
                   <Label for="email" sm={3}><IntlMessages id="components.email" /></Label>
                   <Col sm={9}>
                      <Input type="text" name="email" id="email" className="input-lg" value={localStorage.getItem("emailuser")} disabled/>
                   </Col>
                </FormGroup>
                <FormGroup row>
                   <Label for="estado" sm={3}><IntlMessages id="components.estado" /></Label>
                   <Col sm={9}>
                      <Input type="text" name="estado" id="estado" className="input-lg" value={localStorage.getItem("estadouser")} disabled/>
                   </Col>
                </FormGroup>
                {/*<FormGroup row>
                   <Label for="occupation" sm={3}><IntlMessages id="components.occupation" /></Label>
                   <Col sm={9}>
                      <Input type="text" name="occupation" id="occupation" className="input-lg" />
                   </Col>
                </FormGroup>
                <FormGroup row>
                   <Label for="company" sm={3}><IntlMessages id="components.companyName" /></Label>
                   <Col sm={9}>
                      <Input type="text" name="company" id="company" className="input-lg mb-20" />
                      <div className="help-text d-flex p-10">
                         <i className="ti-info-alt mr-15 pt-5"></i>
                         <span>If you want your invoices addressed to a company. Leave blank to use your full name.</span>
                      </div>
                   </Col>
                </FormGroup>
                <FormGroup row>
                   <Label for="telephone" sm={3}><IntlMessages id="components.phoneNo" /></Label>
                   <Col sm={9}>
                      <Input type="tel" name="telephone" id="telephone" className="input-lg" />
                   </Col>
                </FormGroup>*/}
             </Form>
             <hr />
              <Button variant="contained" color="primary" className="text-white" onClick={() => this.onUpdateProfile()}><IntlMessages id="widgets.updateProfile" /></Button>
              <hr />
              <h2 className="heading"><IntlMessages id="components.address" /></h2>
              <Form>
                 <FormGroup row>
                    <Label for="contraseña" sm={3}><IntlMessages id="components.address" /></Label>
                    <Col sm={9}>
                       <Input 
                          type="password" 
                          name="address" 
                          id="address" 
                          className="input-lg" 
                          placeholder="Ejemplo: Test@123%"
                          onChange={(e) => this.setState({ password: e.target.value })}
                       />
                    </Col>
                 </FormGroup>
                 <FormGroup row>
                    <Label for="contraseña" sm={3}><IntlMessages id="components.city" /></Label>
                    <Col sm={9}>
                       <Input 
                          type="password" 
                          name="city" 
                          id="city" 
                          className="input-lg" 
                          placeholder="Verifique la contraseña" 
                          onChange={(e) => this.setState({ paswd: e.target.value })}
                       />
                    </Col>
                 </FormGroup>
                 {/* <FormGroup row>
                    <Label for="state" sm={3}><IntlMessages id="components.state" /></Label>
                    <Col sm={9}>
                       <Input type="text" name="state" id="state" className="input-lg" />
                    </Col>
                 </FormGroup>
                 <FormGroup row>
                    <Label for="zip" sm={3}><IntlMessages id="components.zipCode" /></Label>
                    <Col sm={9}>
                       <Input type="text" name="zip" id="zip" className="input-lg" />
                    </Col>
                 </FormGroup> */}
              </Form>
              <hr />
              
              {/* <h2 className="heading"><IntlMessages id="components.social Connection" /></h2>
              <div>
                 <InputGroup className="mb-20">
                    <InputGroupAddon addonType="prepend">
                       <IconButton aria-label="facebook">
                          <i className="zmdi zmdi-facebook"></i>
                       </IconButton>
                    </InputGroupAddon>
                    <Input defaultValue="https://www.facebook.com" />
                 </InputGroup>
                 <InputGroup className="mb-20">
                    <InputGroupAddon addonType="prepend">
                       <IconButton aria-label="facebook">
                          <i className="zmdi zmdi-twitter"></i>
                       </IconButton>
                    </InputGroupAddon>
                    <Input defaultValue="https://www.twitter.com" />
                 </InputGroup>
                 <InputGroup className="mb-20">
                    <InputGroupAddon addonType="prepend">
                       <IconButton aria-label="facebook">
                          <i className="zmdi zmdi-linkedin"></i>
                       </IconButton>
                    </InputGroupAddon>
                    <Input defaultValue="https://www.linkedin.com" />
                 </InputGroup>
              </div> */}
              <Button 
                 variant="contained" 
                 color="primary" 
                 className="text-white" 
                 onClick={() => this.onUpdateProfile()}
              ><IntlMessages id="widgets.updatePassword" /></Button>
             </div>
       );
    }
 }
 