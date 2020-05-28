import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class FormPersonalDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
    <MuiThemeProvider >
        <React.Fragment>
            <AppBar title = "Enter Personal Details" />
            <br />
            <TextField 
                hintText = "Enter your Occupation"
                floatingLableText = "Occupation"
                onChange = {handleChange('occupation')}
                defaultValue = {values.occupation}
                required
            />
            <br />
            <br />
            <TextField 
                hintText = "Enter your City "
                floatingLableText = "City"
                onChange = {handleChange('city')}
                defaultValue = {values.city}
                required
            />
            <br />
            <br />
            <TextField 
                hintText = "Enter your Bio"
                floatingLableText = "Bio"
                onChange = {handleChange('bio')}
                defaultValue = {values.bio}
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
            <RaisedButton 
                lable = "Back"
                primary = {false}
                stlye = {Styles.button} 
                onClick = {this.back}           
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

export default FormPersonalDetails;
