/*
    Calendar component adapted from: https://devexpress.github.io/devextreme-reactive/react/scheduler/
 */
import Paper from '@material-ui/core/Paper';
import {
    ViewState,
} from '@devexpress/dx-react-scheduler';
import {
    Scheduler,
    WeekView,
    Appointments,
    AppointmentTooltip,
    DateNavigator,
    TodayButton,
    Toolbar,
} from '@devexpress/dx-react-scheduler-material-ui';
import { makeStyles } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';
import {useState, useEffect} from "react";
import './Calendar.css'
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ArrowRightIcon from '@material-ui/icons/ArrowRight'
import Grid from '@material-ui/core/Grid';
import Room from '@material-ui/icons/Room';
import { withStyles } from '@material-ui/core/styles';


function UserCalendar() {

    /* ----------- SERVER FUNCTIONS ----------- */

    let startingList = [];
    const [list, setList] = useState(startingList);
    let userID = 1234;

    async function callGET() {
        await fetch("https://rec-center-booking.herokuapp.com/user-cal")
            .then(res => res.json())
            .then(data => startingList = data)
            .catch(err => err);
    }

    async function callEDIT(classID, userID) {
        let object = {};
        object['classID'] = classID;
        fetch('https://rec-center-booking.herokuapp.com/user-cal/' + userID, {
            method: 'PATCH',
            body: JSON.stringify(object),
            headers: {
                'Content-Type': 'application/json',
                'x-Trigger': 'CORS'
            }
        }).then(data => console.log('Registered'))
            .catch(err => err);
    }

    async function callEDITcheckfull(classID, userID) {
        await fetch("https://rec-center-booking.herokuapp.com/user-cal/" + classID)
            .then((isFull) => {
                if (!isFull) {
                    console.log('class has space')
                    callEDIT(classID, userID)
                } else {
                    console.log('class is full')
                }
            })
            .then((edit) => {
                callGET()
                    .then(() => setList(startingList))
                    .catch((err) => err);
            })
            .catch(err => err);
    }

    useEffect(() =>{
        callGET()
            .then(() => setList(startingList))
            .catch((err) => err);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    /* ----------- STYLES ----------- */

    // General styling
    const useStyles = makeStyles(theme => ({
        // DayScaleCell styling
        today: {
            backgroundColor: fade(theme.palette.primary.main, 0.16),
        },
        weekend: {
            backgroundColor: fade(theme.palette.action.disabledBackground, 0.06),
        },
        // TimeTableCell styling
        todayCell: {
            backgroundColor: fade(theme.palette.primary.main, 0.1),
            '&:hover': {
                backgroundColor: fade(theme.palette.primary.main, 0.14),
            },
            '&:focus': {
                backgroundColor: fade(theme.palette.primary.main, 0.16),
            },
        },
        weekendCell: {
            backgroundColor: fade(theme.palette.action.disabledBackground, 0.04),
            '&:hover': {
                backgroundColor: fade(theme.palette.action.disabledBackground, 0.04),
            },
            '&:focus': {
                backgroundColor: fade(theme.palette.action.disabledBackground, 0.04),
            },
        },
        // Appointment styling
        todayApp: {
            backgroundColor: '#558d60',
            borderRadius: '8px'
        }
    }));

    // Tooltip styling
    const style = ({ palette }) => ({
        icon: {
            color: palette.action.active,
        },
        textCenter: {
            textAlign: 'center',
        },
        headerColor: {
            backgroundColor: '#558d60',
        },
        header: {
            height: '260px',
            backgroundSize: 'cover',
        },
        commandButton: {
            backgroundColor: '#96cfa9',
        },
    });

    /* ----------- COMPONENTS ----------- */

    // Calendar's top date bar
    const DayScaleCell = (props) => {
        const style = useStyles();
        const { startDate, today } = props;
        if (today) {
            return <WeekView.DayScaleCell {...props} className={style.today} />;
        } if (startDate.getDay() === 0 || startDate.getDay() === 6) {
            return <WeekView.DayScaleCell {...props} className={style.weekend} />;
        } return <WeekView.DayScaleCell {...props} />;
    };

    // Calendar's timeslots
    const TimeTableCell = (props) => {
        const style = useStyles();
        const { startDate } = props;
        const date = new Date(startDate);
        if (date.getDate() === new Date().getDate()) {
            return <WeekView.TimeTableCell {...props} className={style.todayCell} />;
        } if (date.getDay() === 0 || date.getDay() === 6) {
            return <WeekView.TimeTableCell {...props} className={style.weekendCell} />;
        } return <WeekView.TimeTableCell {...props} />;
    };

    // Appointments
    const Appointment = ({children, style, ...restProps}) => (
        <Appointments.Appointment {...restProps} className={useStyles().todayApp} >
            {children}
        </Appointments.Appointment>
    );

    // Appointment Tooltip
    const Header = withStyles(style, { name: 'Header' })(({children, appointmentData, classes, ...restProps}) => (
        <AppointmentTooltip.Header
            {...restProps}
            className={classes.headerColor}
            appointmentData={appointmentData}
        >
            <IconButton
                onClick={() => callEDITcheckfull(appointmentData._id, userID)}
                className={classes.commandButton}
            >
                <AddIcon />
            </IconButton>
        </AppointmentTooltip.Header>
    ));

    const Content = withStyles(style, { name: 'Content' })(({children, appointmentData, classes, ...restProps}) => (
        <AppointmentTooltip.Content {...restProps} appointmentData={appointmentData}>
            <Grid container alignItems="center">
                <Grid item xs={2} className={classes.textCenter}>
                    <Room className={classes.icon} />
                </Grid>
                <Grid item xs={10}>
                    <span>{appointmentData.location}</span>
                </Grid>
                <Grid item xs={2} className={classes.textCenter}>
                    <ArrowRightIcon />
                </Grid>
                <Grid item xs={10}>
                    <span>{appointmentData.notes}</span>
                </Grid>
                <Grid item xs={2} className={classes.textCenter}>
                    <AccountCircleIcon />
                </Grid>
                <Grid item xs={10}>
                    <span>Max {appointmentData.maxClassSize} people in the class.</span>
                </Grid>
            </Grid>
        </AppointmentTooltip.Content>
    ));

    const CommandButton = withStyles(style, { name: 'CommandButton' })(({classes, ...restProps}) => (
        <AppointmentTooltip.CommandButton {...restProps} className={classes.commandButton} />
    ));

    /* ----------- RESULTING COMPONENT ----------- */

    return (
        <div id='main-panel'>
        <Paper id='calendar'>
            <Scheduler
                data={list}
                locale={"en-US"}
            >
                <ViewState />
                <WeekView
                    startDayHour={9}
                    endDayHour={19}
                    timeTableCellComponent={TimeTableCell}
                    dayScaleCellComponent={DayScaleCell}
                />
                <Toolbar />
                <DateNavigator />
                <TodayButton />
                <Appointments
                    appointmentComponent={Appointment}
                />
                <AppointmentTooltip
                    headerComponent={Header}
                    contentComponent={Content}
                    commandButtonComponent={CommandButton}
                    showCloseButton
                />
            </Scheduler>
        </Paper>
        </div>
    );
}

export default UserCalendar;