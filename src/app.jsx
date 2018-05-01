/**
 * Copyright (c) 2017, WSO2 Inc. (http://www.wso2.org) All Rights Reserved.
 *
 * WSO2 Inc. licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import React, { Component } from 'react';
import { Router, Route, hashHistory} from 'react-router';
import Root from './scenes/Root';
import ManagePacks from './scenes/license/ManagePacks';
import ManageJars from './scenes/license/ManageJars';
import GenerateLicense from './scenes/license/GenerateLicense';

/**
 * @class App
 * @extends {Component}
 * @description Main App component
 */
class App extends Component {
    /**
     *
     * @returns {object} App view
     * @memberof App
     */
    render() {
        return (
            <Router history={hashHistory}>
                <Route path={'/app'} component={Root} >
                    <Route path={'managePacks'} component={ManagePacks} />
                    <Route path={'manageJars'} component={ManageJars} />
                    <Route path={'generateLicense'} component={GenerateLicense} />
                    <Route path={'/'} component={ManagePacks} />
                </Route>
            </Router>
        );
    }
}

export default App;