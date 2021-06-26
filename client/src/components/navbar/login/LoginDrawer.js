/*
    NavBar component adapted from: https://material-ui.com/components/drawers/
 */

import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';

import {useState} from "react";

/*
    Drawer component adapted from: https://material-ui.com/components/drawers/
 */

import LoginPage from './LoginPage.js';

function LoginDrawer() {

    const [isVisible, setIsVisible] = useState(false);

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setIsVisible(open);
    };

/*  USE FOR PERSISTENCE WHEN WORKING
    return (
        <div>
            <Button color="inherit" onClick={toggleDrawer(true)}>Login</Button>
            <Drawer variant='persistent' anchor='right' open={isVisible} onClose={toggleDrawer(false)}>
                <LoginPage />
            </Drawer>
        </div>
    );*/

    return (
        <div>
            <Button color="inherit" onClick={toggleDrawer(true)}>Login</Button>
            <Drawer anchor='right' open={isVisible} onClose={toggleDrawer(false)}>
                <LoginPage />
            </Drawer>
        </div>
    );
}

export default LoginDrawer;