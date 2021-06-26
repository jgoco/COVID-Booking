/*
    Drawer component adapted from: https://material-ui.com/components/drawers/
 */

import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import {useState} from "react";

import MenuOptions from './MenuOptions.js';

function MenuDrawer() {

    const useStyles = makeStyles((theme) => ({
        menuButton: {
            marginRight: theme.spacing(2),
        }
    }));

    const styles = useStyles();
    const [isVisible, setIsVisible] = useState(false);

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setIsVisible(open);
    };

    return (
        <div>
            <IconButton edge='start' className={styles.menuButton} color='inherit' aria-label='menu' onClick={toggleDrawer(true)}>
                <MenuIcon />
            </IconButton>
            <Drawer anchor='left' open={isVisible} onClose={toggleDrawer(false)}>
                <MenuOptions />
            </Drawer>
        </div>
    );
}

export default MenuDrawer;