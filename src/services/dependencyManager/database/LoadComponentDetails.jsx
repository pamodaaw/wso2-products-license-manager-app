import { Component } from 'react';
import axios from 'axios';
import Config from 'config';

/**
* @class LoadComponentDetails
* @extends {Component}
* @description Get Details of given Component
*/
class LoadComponentDetails extends Component {
    /**
    * @class LoadComponentDetails
    * @extends {Component}
    * @param {string} cName  component name
    * @param {string} cVersion  component version
    * @description Load Details of Component
    */
    getDetailsOfComponent(cName, cVersion) {
        const url = Config.databaseService[0].host +
        Config.databaseService[1].basePath +
        Config.databaseService[2].resourcePaths[5].componentDetails + cName;
        return axios.get(url, {
            params: {
                compVersion: cVersion,
            },
        }).then((response) => {
            return (response.data);
        }).catch((error) => {
            throw new Error(error);
        });
    }
}

export default (new LoadComponentDetails());
