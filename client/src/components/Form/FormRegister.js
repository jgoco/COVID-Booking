/*
    FormRegister component adapted from: https://github.com/mui-org/material-ui/tree/master/docs/src/pages/getting-started/templates/sign-up
 */
import React, {useState} from 'react'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormLabel from '@material-ui/core/FormLabel'
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import DateFnsUtils from '@date-io/date-fns';
import 'date-fns';

import { makeStyles } from '@material-ui/core/styles';
import {  MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import { useForm, Controller } from 'react-hook-form';    // 3rd party library for handling forms
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import {registerUser} from '../../actions/Authenticate'
import { Redirect } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(5),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(5)
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

  // Form validation Schema
  const validationSchema = Yup.object().shape(
    {
      firstName: Yup.string().required('First name is required'),
      lastName: Yup.string().required('Last name is required'),
      email: Yup.string().required('Email is required')
                         .email('Email is invalid'),
      password: Yup.string().required('Password is required')
                            .min(6, 'Password must be at least 6 characters in length')
                            .max(50, 'Password must not exceed 50 characters in length'),
      firstDose: Yup.date().notRequired(),
      secondDose: Yup.date().notRequired()
    }
  );

  
  export default function SignUp() {
    const classes = useStyles();
    const [redirect, setRedirect] = useState(false);

    // From react-hook-form library
    const { handleSubmit, control, setValue } = useForm({resolver: yupResolver(validationSchema)});

    const onSubmit = data => {
      // Call method that sends data to the BE
      registerUser(data);       // Do some error handling -- What if the response code isn't 200
      setRedirect(true);
    };

    if (redirect) {
      return <Redirect to='/user-cal' />
    }
    
    const [selectedFirstDoseDate, setSelectedFirstDoseDate] = useState(null);
    const [selectedSecondDoseDate, setSelectedSecondDoseDate] = useState(null);

    const handleFirstDoseDateChange = (date) => {
      setSelectedFirstDoseDate(date);
      setValue('firstDose', date, {shouldValidate: true, shouldDirty: true})
    };

    const handleSecondDoseDateChange = (date) => {
      setSelectedSecondDoseDate(date);
      setValue('secondDose', date, {shouldValidate: true, shouldDirty: true})
    };

    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)} className={classes.form} noValidate >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Controller 
                  control={control}
                  name="firstName"
                  defaultValue=""
                  render={({ field, fieldState: { error } }) => (
                    <TextField
                      {...field}
                      autoComplete="fname"
                      name="firstName"
                      variant="outlined"
                      required
                      fullWidth
                      id="firstName"
                      label="First Name"
                      autoFocus
                      error={!!error}
                      helperText={error ? error.message : null}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                 <Controller 
                  control={control}
                  name="lastName"
                  defaultValue=""
                  render={({ field, fieldState: { error } }) => (
                    <TextField
                      {...field}
                      autoComplete="lname"
                      name="lastName"
                      variant="outlined"
                      required
                      fullWidth
                      id="lastName"
                      label="Last Name"
                      autoFocus
                      error={!!error}
                      helperText={error ? error.message : null}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <Controller 
                  control={control}
                  name="email"
                  defaultValue=""
                  render={({ field, fieldState: { error } }) => (
                    <TextField
                      {...field}
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                      autoFocus
                      error={!!error}
                      helperText={error ? error.message : null}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <Controller 
                  control={control}
                  name="password"
                  defaultValue=""
                  render={({ field, fieldState: { error } }) => (
                    <TextField
                      {...field}
                      autoComplete="current-password"
                      name="password"
                      variant="outlined"
                      required
                      fullWidth
                      id="password"
                      type="password"
                      label="Password"
                      autoFocus
                      error={!!error}
                      helperText={error ? error.message : null}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <FormLabel> Please select the date you received your vaccination dose(s) below. Omit if you haven't been vaccinated.</FormLabel>
              </Grid>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid item xs={12} sm={6}>
                  <KeyboardDatePicker
                    disableToolbar
                    variant="inline"
                    format="MM/dd/yyyy"
                    margin="normal"
                    id="firstDose"
                    emptyLabel="Dose 1 Date"
                    value={selectedFirstDoseDate}
                    onChange={handleFirstDoseDateChange}
                    disableFuture="true"
                    KeyboardButtonProps={{
                      'aria-label': 'change date',
                    }}
                  />
                </Grid>
              </MuiPickersUtilsProvider>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid item xs={12} sm={6}>
                  <KeyboardDatePicker
                    disableToolbar
                    variant="inline"
                    format="MM/dd/yyyy"
                    margin="normal"
                    id="secondDose"
                    emptyLabel="Dose 2 Date"
                    value={selectedSecondDoseDate}
                    onChange={handleSecondDoseDateChange}
                    disableFuture="true"
                    KeyboardButtonProps={{
                      'aria-label': 'change date',
                    }}
                  />
                </Grid>
              </MuiPickersUtilsProvider>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="center">
              <Grid item>
                <Link href="/api/user/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    );
  }
