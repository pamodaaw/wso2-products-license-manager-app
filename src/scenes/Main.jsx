import React, { Component } from 'react';
import { Link } from 'react-router';
import AppHeader from '../components/layouts/AppHeader';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import ValidateUser from '../services/authentication/ValidateUser';

/**
* @class Main
* @extends {Component}
* @description Index component
*/
class Main extends Component {
    /**
    * @class Main
    * @extends {Component}
    * @description render method
    */
   componentWillMount() {
    ValidateUser.getUserDetails().then((response) => {
        this.setState(() => {
            return {
                username: response.username,
            };
        });
        // this.setPendingRequests(response.userEmail);}
        // this.setPendingLibrary(response.userEmail);
    });
}
    render() {
        return (
            <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
                <div className="container-fluid" style={{paddingLeft:'0px', paddingRight:'0px'}}>
                    <div className="row" id="header">
                        <div className="col-sm-12" style={{ display: this.state.displayHeader, paddingTop: '0px'  }} >
                            <AppHeader username={this.state.username} />
                        </div>
                    </div>
                    <div className="row">
                    <div className="col-md-5">
                            <Link to="/app/manageLicense" className="btn btn-success btn-lg btn-block">
                                <span>
                                    <i className="fa fa-id-card fa-1x" />
                                </span>
                                &nbsp;&nbsp;&nbsp;
                                <b>Generate License</b>
                            </Link>
                        </div>
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default Main;
