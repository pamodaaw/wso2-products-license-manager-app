import React, { Component } from 'react';
import { hashHistory } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import AppHeader from '../components/layouts/AppHeader';
import LeftNav from '../components/navs/LeftNav';
import ValidateUser from '../services/authentication/ValidateUser';

/**
* @class Root
* @extends {Component}
* @description Root component
*/
class Root extends Component {
    /**
    * constructor
    * @param {any} props props
    */
    constructor(props) {
        super(props);
        this.state = {
            isValid: null,
            displayChildren: 'block',
            displayNav: 'block',
            displayHeader: 'block',
            userDetail: null,
        };
    }
    /**
    * @class Root
    * @extends {Component}
    * @description componentWillMount
    */
    componentWillMount() {
        const props = this.props;
        ValidateUser.getUserDetails().then((response) => {
            if (response.isValid) {
                this.setState(() => {
                    return {
                        userDetail: response,
                    };
                });
            } else {
                hashHistory.push('/');
            }
        });
    }
    /**
    * @class Root
    * @extends {Component}
    * @description render
    */
    render() {
        const props = this.props;
        /* eslint-disable max-len */
        return (
            <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
                <div className="container-fluid" style={{ paddingLeft: '0px', paddingRight: '0px' }}>
                    <div className="row" id="header">
                        <div className="col-sm-12" style={{ display: this.state.displayHeader, paddingTop: '0px',paddingLeft: '0px', paddingRight: '0px' }} >
                            <AppHeader userDetail={this.state.userDetail} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-2" style={{
                            display: this.state.displayNav,
                            paddingLeft: '0px',
                            height: '100vh',
                            marginTop: '0px',
                            backgroundColor: "rgb(44, 62, 79)"
                        }}>
                            {<LeftNav />}
                        </div>
                        <div className="col-sm-10" style={{ display: this.state.displayChildren, padding: "0 !important", height: '90vh', overflowY: 'auto', overflowX: 'hidden' }} >
                            {props.children}
                        </div>
                    </div>
                </div>
            </MuiThemeProvider>
        );

    }
}

export default Root;
