
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { BrowserRouter, BrowserRouter as Router, Link as RouterLink } from "react-router-dom";

function MenuOptions() {

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
        <div className={styles.list} role='presentation'>
            <List>
                <ListItem button key='home' component={RouterLink} to="/">
                    <ListItemIcon> <InboxIcon /> </ListItemIcon>
                    <ListItemText primary='Home'/>
                </ListItem>
                <ListItem button key='profile' component={RouterLink} to="/profile">
                    <ListItemIcon> <MailIcon /> </ListItemIcon>
                    <ListItemText primary='Profile'/>
                </ListItem>
                <ListItem button key='settings' component={RouterLink} to="/settings">
                    <ListItemIcon> <InboxIcon /> </ListItemIcon>
                    <ListItemText primary='Settings'/>
                </ListItem>
            </List>
        </div>
    );
}

export default MenuOptions;