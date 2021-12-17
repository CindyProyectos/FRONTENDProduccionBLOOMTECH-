/**
 * Add New User Form
 */
 import React from 'react';
 import { Form, FormGroup, Label, Input } from 'reactstrap';
 
 const AddNewUserForm = ({ addNewUserDetails, onChangeAddNewUserDetails }) => (
     <Form>
         <FormGroup>
             <Label for="userName">Name</Label>
             <Input
                 type="text"
                 name="userName"
                 id="userName"
                 placeholder="Enter Name"
                 value={addNewUserDetails.name}
                 onChange={(e) => onChangeAddNewUserDetails('name', e.target.value)}
             />
         </FormGroup>
         <FormGroup>
             <Label for="userEmail">Email</Label>
             <Input
                 type="email"
                 name="userEmail"
                 id="userEmail"
                 placeholder="Enter Email"
                 value={addNewUserDetails.emailAddress}
                 onChange={(e) => onChangeAddNewUserDetails('emailAddress', e.target.value)}
             />
         </FormGroup>
         <FormGroup>
             <Label for="userPhone">Phone</Label>
             <Input
                 type="text"
                 name="userPhone"
                 id="userPhone"
                 placeholder="Enter Phone"
                 value={addNewUserDetails.type}
                 onChange={(e) => onChangeAddNewUserDetails('Phone', e.target.value)}
             />
         </FormGroup>
 
         <FormGroup>
             <Label for="sponsorType">Sponsor</Label>
             <Input
                 type="text"
                 name="sponsorType"
                 id="sponsorType"
                 placeholder="Enter Sponsor"
                 value={addNewUserDetails.type}
                 onChange={(e) => onChangeAddNewUserDetails('Sponsor', e.target.value)}
             />
         </FormGroup>
     </Form>
 );
 
 export default AddNewUserForm;
 