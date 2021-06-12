/*
    Calendar component adapted from: https://devexpress.github.io/devextreme-reactive/react/scheduler/
 */

import '../MainPanel.css';
import Paper from '@material-ui/core/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
    Scheduler,
    WeekView,
    Appointments
} from '@devexpress/dx-react-scheduler-material-ui';
import { makeStyles } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';
import classes from './rec-center-classes';

function Calendar() {

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
    }));

    // create the calendars top date bar
    const DayScaleCell = (props) => {
        const classes = useStyles();
        const { startDate, today } = props;

        /* color calendar days: today = highlight
                                weekend (0, 6) = grey */
        if (today) {
            return <WeekView.DayScaleCell {...props} className={classes.today} />;
        } if (startDate.getDay() === 0 || startDate.getDay() === 6) {
            return <WeekView.DayScaleCell {...props} className={classes.weekend} />;
        } return <WeekView.DayScaleCell {...props} />;
    };

    // create the calendar's timeslots
    const TimeTableCell = (props) => {
        const classes = useStyles();
        const { startDate } = props;
        const date = new Date(startDate);

        /* color timeslot backgrounds: today = highlight
                                       weekend (0, 6) = grey */
        if (date.getDate() === new Date().getDate()) {
            return <WeekView.TimeTableCell {...props} className={classes.todayCell} />;
        } if (date.getDay() === 0 || date.getDay() === 6) {
            return <WeekView.TimeTableCell {...props} className={classes.weekendCell} />;
        } return <WeekView.TimeTableCell {...props} />;
    };

    const Appointment = ({children, style, ...restProps}) => (
        <Appointments.Appointment
            {...restProps}
            style={{
                ...style,
                backgroundColor: '#0EA5E9',
                borderRadius: '8px',
            }}
        >
            {children}
        </Appointments.Appointment>
    );

    return (
        <Paper id='calendar'>
            <Scheduler
                data={classes}
            >
                <ViewState />
                <WeekView
                    startDayHour={9}
                    endDayHour={19}
                    timeTableCellComponent={TimeTableCell}
                    dayScaleCellComponent={DayScaleCell}
                />
                <Appointments
                    appointmentComponent={Appointment}
                />
            </Scheduler>
        </Paper>
    );
}

export default Calendar;