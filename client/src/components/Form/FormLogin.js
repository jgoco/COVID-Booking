/*
    FormLogin component adapted from: https://github.com/mui-org/material-ui/tree/master/docs/src/pages/getting-started/templates/sign-in 
 */
import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import { useForm, Controller } from 'react-hook-form';    // 3rd party library for handling forms
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { loginUser } from '../../actions/Authenticate';

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
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(5)
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

const validationSchema = Yup.object().shape({
  email: Yup.string().required('Email is required')
            .email('Email is invalid'),
  password: Yup.string().required('Password is required')
            .min(6, 'Password must be at least 6 characters in length')
            .max(50, 'Password must not exceed 50 characters in length')
});

function FormLogin({ user }) {
    const classes = useStyles();
    const [redirect, setRedirect] = useState(false);

    const onSubmit = data => {
      // Call the login function
      loginUser(data);    // Handle req that is not 200
      setRedirect(true);
    };

    if (redirect) {
      return <Redirect to='/api/user-cal' />
    }

    const { 
      handleSubmit, 
      control,
    } = useForm({resolver: yupResolver(validationSchema)});

    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            {user} Sign In
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)} className={classes.form} noValidate>
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
            <Controller 
              control={control}
              name="password"
              defaultValue=""
              render={({ field, fieldState: { error } }) => (
                <TextField
                  {...field}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  error={!!error}
                  helperText={error ? error.message : null}
                />
              )}
            />
            <Controller
              control={control}
              name="rememberMe"
              render={({ field: { value, onChange } }) => (
                <FormControlLabel
                  control={<Checkbox checked={value} onChange={onChange} value="remember" color="primary" />}
                  label="Remember me"
                />
              )}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container justifyContent="center">
              <Grid item>
                <Link href="/api/user/register" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    );  
}

export default FormLogin;
