import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export class Ssuccess extends Component {
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
    return (
    <MuiThemeProvider >
        <React.Fragment>
            <AppBar title = "Success" />
            <h1>Thank You For Your Success</h1>
            <p>You Will Get Email With Further Instruction</p>
        </React.Fragment>
    </MuiThemeProvider>
          
    );
  }
}


export default Ssuccess;
