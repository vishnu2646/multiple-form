import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class FormUserDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
    <MuiThemeProvider >
        <React.Fragment>
            <AppBar title = "Enter User Details" />
            <br />
            <TextField 
                hintText = "Enter your First Name"
                floatingLableText = "FirstName"
                onChange = {handleChange('firstName')}
                defaultValue = {values.firstName}
                required
            />
            <br />
            <br />
            <TextField 
                hintText = "Enter your Last Name"
                floatingLableText = "LastName"
                onChange = {handleChange('lastName')}
                defaultValue = {values.lastName}
                required
            />
            <br />
            <br />
            <TextField 
                hintText = "Enter your Email"
                floatingLableText = "Email"
                onChange = {handleChange('email')}
                defaultValue = {values.email}
                required
            />
            <br />
            <br />
            <RaisedButton 
                lable = "Continue"
                primary = {true}
                stlye = {Styles.button} 
                onClick = {this.continue}           
            />
        </React.Fragment>
    </MuiThemeProvider>
          
    );
  }
}
const Styles = {
    button:{
        margin:15
    }
}

export default FormUserDetails;
