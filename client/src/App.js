import './App.css';
import React, {Fragment, useState} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

// Components
import NavBar from './components/navbar/NavBar';
import Home from './components/views/Homepage/Home';
import RecCenterCalendar from './components/calendar/RecCenterCalendar';
import UserCalendar from './components/calendar/UserCalendar';
import Footer from './components/Footer/Footer';
import UserLoginPage from './components/views/Login/UserLoginPage';
import RecCentreLoginPage from './components/views/Login/RecCentreLoginPage';
import RegisterPage from './components/views/Register/UserRegisterPage';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

function App() {


  return (
      <div>
        <Router>
         <NavBar />
         <Switch>
           <Route exact path='/' component={Home}/>
           <Route exact path='/rec-center' component={RecCenterCalendar} />
           <Route exact path='/user-cal' component={UserCalendar} />
           <Route exact path='/user/login' component={UserLoginPage}/>
           <Route exact path='/user/register' component={RegisterPage}/>
           <PrivateRoute path='/user/classes' component={UserCalendar}/>
           <Route exact path='/centre/login' component={RecCentreLoginPage}/>
           <Route exact path='/centre/register' />
           <Route exact path='/centre/:id/classes' />
           <Route exact path='/about' />
         </Switch>
         <Footer />
        </Router>
      </div>
  );
}

export default App;
