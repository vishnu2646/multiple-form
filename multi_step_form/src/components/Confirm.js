import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { List, ListItem } from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';

export class FormPersonalDetails extends Component {
  continue = e => {
    e.preventDefault();
    // Process Form
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values: { firstName, lastName, email, occupation, city, bio } } = this.props;
    return (
    <MuiThemeProvider >
        <React.Fragment>
            <AppBar title = "Confirm User Details" />
            <br />
            <List>
                <ListItem 
                    primaryText = "FirstName"
                    secondaryText = { firstName }
                />
                <ListItem 
                    primaryText = "LasttName"
                    secondaryText = { lastName }
                />
                <ListItem 
                    primaryText = "Email"
                    secondaryText = { email }
                />
                <ListItem 
                    primaryText = "City"
                    secondaryText = { city }
                />
                <ListItem 
                    primaryText = "Occupation"
                    secondaryText = { occupation }
                />
                <ListItem 
                    primaryText = "Bio"
                    secondaryText = { bio }
                />
            </List>  
            <RaisedButton 
                lable = "Confirm & Continue"
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
