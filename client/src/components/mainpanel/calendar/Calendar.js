/*
    Calendar component adapted from: https://devexpress.github.io/devextreme-reactive/react/scheduler/
 */

import '../MainPanel.css';
import Paper from '@material-ui/core/Paper';
import {
    ViewState,
    EditingState,
    IntegratedEditing
} from '@devexpress/dx-react-scheduler';
import {
    Scheduler,
    WeekView,
    Appointments,
    AppointmentTooltip,
    AppointmentForm,
    DateNavigator,
    TodayButton,
    Toolbar,
    ConfirmationDialog
} from '@devexpress/dx-react-scheduler-material-ui';
import { makeStyles } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';

import {useState, useEffect} from "react";
import moment from "moment";




function Calendar() {

    /* ----------- SERVER FUNCTIONS ----------- */
    let startingList = [];
    const [list, setList] = useState(startingList);

    async function callGET() {
        await fetch("http://localhost:8000/rec-center")
            .then(res => res.json())
            .then(data => startingList = data)
            .catch(err => err);
    }

    async function callPOST(object) {
        await fetch('http://localhost:8000/rec-center', {
            method: 'post',
            body: JSON.stringify(object),
            headers: {'Content-Type': 'application/json'}
        }).then(data => console.log('Added appointment'))
            .catch(err => err);
    }

    async function callEDIT(object) {
        let id = Object.keys(object)[0];
        console.log(object[id])
        await fetch('http://localhost:8000/rec-center/' + id, {
            method: 'PATCH',
            body: JSON.stringify(object[id]),
            headers: {
                'Content-Type': 'application/json',
                'x-Trigger': 'CORS'
            }
        }).then(data => console.log('Edited card'))
            .catch(err => err);
    }

    async function callDELETE(id) {
        await fetch('http://localhost:8000/rec-center/' + id, {
            method: 'delete',
        }).then(data => console.log('Deleted appointment'))
            .catch(err => err);
    }

    useEffect(() =>{
        callGET()
            .then(() => setList(startingList))
            .catch((err) => err);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    function commitChanges({added, changed, deleted}) {
        if (added) {
            console.log('added chosen');
            callPOST(added).then(() => console.log(added));
            callGET().then((data) => console.log(data))
                .then(() => setList(startingList));
        }
        if (changed) {
            console.log('in edit')
            console.log(changed);
            callEDIT(changed).then(() => console.log(changed));
            callGET().then((data) => console.log(data))
                .then(() => setList(startingList))
                .then(() => console.log(startingList));
        }
        if (deleted !== undefined) {
            console.log('in delete');
            console.log(deleted);
            callDELETE(deleted).then(() => console.log(deleted));
            callGET().then((data) => console.log(data))
                .then(() => setList(startingList))
                .then(() => console.log(startingList));
        }
    }

    /* ----------- STYLE AND COMPONENTS ----------- */
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
            backgroundColor: '#0EA5E9',
            borderRadius: '8px'
        }

    }));

    // create the calendars top date bar
    const DayScaleCell = (props) => {
        const style = useStyles();
        const { startDate, today } = props;

        /* color calendar days: today = highlight
                                weekend (0, 6) = grey */
        if (today) {
            return <WeekView.DayScaleCell {...props} className={style.today} />;
        } if (startDate.getDay() === 0 || startDate.getDay() === 6) {
            return <WeekView.DayScaleCell {...props} className={style.weekend} />;
        } return <WeekView.DayScaleCell {...props} />;
    };

    // create the calendar's timeslots
    const TimeTableCell = (props) => {
        const style = useStyles();
        const { startDate } = props;
        const date = new Date(startDate);

        /* color timeslot backgrounds: today = highlight
                                       weekend (0, 6) = grey */
        if (date.getDate() === new Date().getDate()) {
            return <WeekView.TimeTableCell {...props} className={style.todayCell} />;
        } if (date.getDay() === 0 || date.getDay() === 6) {
            return <WeekView.TimeTableCell {...props} className={style.weekendCell} />;
        } return <WeekView.TimeTableCell {...props} />;
    };

    // create the appointments
    const Appointment = ({children, style, ...restProps}) => (
        <Appointments.Appointment {...restProps} className={useStyles().todayApp} >
            {children}
        </Appointments.Appointment>
    );

    // create the add/edit form
    const BasicLayout = ({ onFieldChange, appointmentData, ...restProps }) => {
        const onEditLocation = (nextValue) => {
            onFieldChange({ location: nextValue });
        };

        const onEditClassSize = (nextValue) => {
            onFieldChange({ maxClassSize: nextValue });
        }

        // TODO: get button working
        const onEditVaccination = (nextValue) => {
            onFieldChange({ vaccinationOnly: nextValue });
        }

        return (
            <AppointmentForm.BasicLayout
                appointmentData={appointmentData}
                onFieldChange={onFieldChange}
                {...restProps}
            >
                <AppointmentForm.Label
                    text="Location"
                    type="title"
                />
                <AppointmentForm.TextEditor
                    placeholder="Room location"
                    type="ordinaryTextEditor"
                    value={appointmentData.location}
                    onValueChange={onEditLocation}
                />
                <AppointmentForm.Label
                    text="Maximum Class Size"
                    type="title"
                />
                <AppointmentForm.TextEditor
                    placeholder="0"
                    type="numberEditor"
                    value={appointmentData.maxClassSize}
                    onValueChange={onEditClassSize}
                />
                <AppointmentForm.BooleanEditor
                    label="Vaccinated attendents only?"
                    readOnly={false}
                    value={appointmentData.vaccinatedOnly}
                    onValueChange={onEditVaccination}
                />
            </AppointmentForm.BasicLayout>
        );
    };

    const messages = {
        moreInformationLabel: 'Class Description',
    };

    const BoolEditor = (props) => {
        return <AppointmentForm.BooleanEditor {...props} readOnly />;
    }

    return (
        <Paper id='calendar'>
            <Scheduler
                data={list}
                locale={"en-US"}
            >
                <ViewState />
                <EditingState
                    onCommitChanges={commitChanges}
                />
                <IntegratedEditing />
                <WeekView
                    startDayHour={9}
                    endDayHour={19}
                    timeTableCellComponent={TimeTableCell}
                    dayScaleCellComponent={DayScaleCell}
                />
                <ConfirmationDialog />
                <Toolbar />
                <DateNavigator />
                <TodayButton />
                <Appointments
                    appointmentComponent={Appointment}
                />
                <AppointmentTooltip
                    showCloseButton
                    showOpenButton
                />
                <AppointmentForm
                    basicLayoutComponent={BasicLayout}
                    booleanEditorComponent={BoolEditor}
                    messages={messages}
                />
            </Scheduler>
        </Paper>
    );
}

export default Calendar;