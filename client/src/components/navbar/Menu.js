import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";

function Menu() {

    const useStyles = makeStyles((theme) => ({
        menuButton: {
            marginRight: theme.spacing(2),
        },
        list: {
            width: 250,
        }
    }));

    const styles = useStyles();

    return (
        <div>
            <IconButton edge="start" className={styles.menuButton} color="inherit" aria-label="menu" >
                <MenuIcon />
            </IconButton>

        </div>
    );
}

export default Menu;