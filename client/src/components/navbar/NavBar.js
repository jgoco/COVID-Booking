import './NavBar.css';
import MenuDrawer from './menu/MenuDrawer.js';
import LoginDrawer from './login/LoginDrawer.js';
/*
    NavBar component adapted from: https://material-ui.com/components/app-bar/
                                   https://material.io/components/app-bars-top/web
 */

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

function NavBar() {

    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
        },
        title: {
            flexGrow: 1,
        }
    }));

    const styles = useStyles();

    return (
        <div id='navbar'>
            <div className={styles.root}>
                <AppBar position="static">
                    <Toolbar>
                        <MenuDrawer />
                        <Typography variant="h6" className={styles.title}>
                            Rec Center Schedule
                        </Typography>
                        <LoginDrawer />
                    </Toolbar>
                </AppBar>
            </div>
        </div>
    );
}

export default NavBar;
