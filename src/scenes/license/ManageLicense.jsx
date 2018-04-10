import React, { Component } from 'react';
import { Link } from 'react-router';
import DropToUpload from 'react-drop-to-upload';
import CloudUpload from 'material-ui/svg-icons/file/cloud-upload';
import Card, { CardMedia, CardActions, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import LinearProgress from 'material-ui/LinearProgress';
import RaisedButton from 'material-ui/RaisedButton';
import Snackbar from 'material-ui/Snackbar';
import Pack from '../../services/msf4j/Pack';
import DataManager from '../../services/msf4j/DataManager';
import styles from '../../mystyles';
import ValidateUser from '../../services/authentication/ValidateUser';
import zipfile from '../../assets/images/zip-file.png';

/**
* @class WaitingRequests
* @extends {Component}
* @description Get user details
*/
class ManageLicense extends Component {
    /**
    * @class ManageLicense
    * @extends {Component}
    * @param {any} props props for constructor
    * @description Sample React component
    */
    constructor(props) {
        super(props);
        this.state = {
            listOfPacks: [],
            selectedPack: 'none',
            open: false,
            openError: false,
            openSuccess: false,
            openLicense: false,
            errorIcon: '',
            displayProgress: 'block',
            displayBox: 'block',
            displayForm: 'none',
            displayLoader: 'none',
            displayErrorBox: 'none',
            buttonState: false,
        };
        // this.uploadPack = this.uploadPack.bind(this);
        this.selectPack = this.selectPack.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleRequestClose = this.handleRequestClose.bind(this);
        this.handleClickError = this.handleClickError.bind(this);
        this.handleRequestCloseError = this.handleRequestCloseError.bind(this);
        this.reloadPage = this.reloadPage.bind(this);
    }
    /**
    * componentWillMount
    */
    componentWillMount() {
        // Pack.validateUser();
        // ValidateUser.getUserDetails().then((response) => {
        //     this.setState(() => {
        //         return {
        //             userDetails: response,
        //         };
        //     });
        // });
        DataManager.getUploadedPacks().then((response) => {
            this.setState(() => {
                return {
                    listOfPacks: response.data.responseData,
                    displayForm: 'block',

                };
            });
        }).catch((error) => {
            throw new Error(error);
        });
    }

    /**
    * handleClick
    */
    handleClick() {
        this.setState({
            open: true,
        });
    }
    /**
    * handleClickError
    */
    handleClickError() {
        this.setState({
            openError: true,
        });
    }
    /**
    * handleRequestClose
    */
    handleRequestClose() {
        this.setState({
            open: false,
        });
    }
    /**
    * handleRequestClose
    */
    handleRequestCloseError() {
        this.setState({
            openError: false,
        });
    }
    /**
     * handle the pack selection
     */
    selectPack(e) {
        console.log("pack selected" + e.currentTarget.value);
        this.setState({
            selectedPack: e.currentTarget.value,
        });
    }
    /**
     * handle the form submission
     */
    handleSubmit() {
        console.log("form submit with the pack " + this.state.selectedPack);

    }
    /**
    * reload page
    */
    reloadPage() {
        window.location.reload();
    }

    /**
    * @class WaitingRequests
    * @extends {Component}
    * @description Sample React component
    */
    render() {

        const packs = this.state.listOfPacks
        const listOfPackNames = packs.map((pack) =>
            <div className="radio">
                <label>
                    <input type="radio" value={pack.name}
                        checked={this.state.selectedPack === pack.name} 
                        onChange={this.selectPack}
                     />
                    {pack.name}
                </label>
            </div>);
        return (

            <div className="container-fluid">
                <h2>Select a Pack to Generate Lisence</h2>
                <br />
                <div className="row">
                    {/* {listOfPackNames} */}

                    <div className="col-md-10" style={{ display: this.state.displayBox }}>
                        <form style={{ display: this.state.displayForm }}>
                            {listOfPackNames}
                            <div>
                                <Link
                                to={{
                                    pathname: '/app/generateLicense',
                                    query: { selectedPack: this.state.selectedPack}}}
                            >
                            <RaisedButton
                                type="submit"
                                label="Generate"
                                style={styles.generateButtonStyle}
                                labelColor='#ffffff'
                                backgroundColor='#2196F3'
                                disabled={this.state.buttonState}
                            />
                            </Link>
                        </div>
                        </form>

                    </div>

                </div>
            </div>
        );
    }
}

export default ManageLicense;
