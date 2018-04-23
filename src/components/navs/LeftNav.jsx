import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import LibraryBooks from 'material-ui/svg-icons/av/library-books';
import ContentCopy from 'material-ui/svg-icons/content/content-copy';
import Description from 'material-ui/svg-icons/action/description';
import ListIcon from 'material-ui/svg-icons/av/featured-play-list';
import SearchIcon from 'material-ui/svg-icons/action/pageview';
import { List, ListItem } from 'material-ui/List';
import { Link } from 'react-router';
import styles from '../../mystyles';

/**
* @class LeftNav
* @extends {Component}
* @description Admin left nav
*/
class LeftNav extends Component {
    /**
    * @class Root
    * @extends {Component}
    * @description Admin left nav render method
    */
    render() {
        return (
                <Menu style={styles.menu}>
                    <Link to="/app/manageLicense" >
                        <MenuItem
                            className="icon-menu-wrapper"
                            primaryText="Home"
                            leftIcon={<Description />}
                        />
                    </Link>
                </Menu>
        );
    }
}

export default LeftNav;
