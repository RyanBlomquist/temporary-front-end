import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class Name extends React.Component {
  render() {
    return (
      <Form action="/controllers/register-controller" method="POST">  
	  <FormGroup>
          <Label>CWID</Label>
          <Input type="number" name="cwid"  placeholder="first name.." />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="Email.." />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="password" />
        </FormGroup>
        <FormGroup>
          <Label>Password</Label>
          <Input type="text" name="firstName"  placeholder="first name.." />
        </FormGroup>
         <FormGroup>
          <Label>Password</Label>
          <Input type="text" name="lastName"  placeholder="first name.." />
        </FormGroup>
		<FormGroup>
          <Label>Password</Label>
          <Input type="text" name="role"  placeholder="first name.." />
        </FormGroup>
        
        
        <Button>Submit</Button>
      </Form>
    );
  }
}