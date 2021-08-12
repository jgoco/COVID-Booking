import './App.css';
import React, {Fragment, useState} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

// Components
import NavBar from './components/NavBar/NavBar';
import Home from './components/views/Homepage/Home';
import MainPanel from './components/MainPanel/MainPanel';
import Footer from './components/Footer/Footer';
import UserLoginPage from './components/views/Login/UserLoginPage';
import RecCentreLoginPage from './components/views/Login/RecCentreLoginPage';
import RegisterPage from './components/views/Register/UserRegisterPage';

function App() {

  const [userLoginStatus, setUserLoginStatus] = useState(true);

  return (
      <div>
        <Router>
         <NavBar />
         <Switch>
           <Route path='/' exact component={Home}/>
           <Route exact path='/user/login' component={UserLoginPage}/>
           <Route exact path='/user/register' component={RegisterPage}/>
           <Route path='/user/:id/classes'/>
           <Route exact path='/centre/login' component={RecCentreLoginPage}/>
           <Route exact path='/centre/register' />
           <Route exact path='/centre/:id/classes' />
           <Route exact path='/about' />
           <Route path='/rec-center' component={MainPanel} />
         </Switch>
         <Footer />
        </Router>
      </div>
  );
}

export default App;
