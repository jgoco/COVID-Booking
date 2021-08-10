import './App.css';
import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

// Components
import NavBar from './components/NavBar/NavBar';
import Home from './components/views/Homepage/Home';
// import Form from './components/Form/Form';
import MainPanel from './components/mainpanel/MainPanel';
import Footer from './components/Footer/Footer';
import LoginPage from './components/views/Login/LoginPage';
import RegisterPage from './components/views/Register/RegisterPage';

function App() {
  return (
      <div>
        <Router>
         <NavBar />
         <Switch>
           <Route path='/' exact component={Home}/>
           <Route exact path='/user/login' component={LoginPage}/>
           <Route exact path='/user/register' component={RegisterPage}/>
           <Route exact path='/about' />
           <Route path='/rec-center' component={MainPanel} />
         </Switch>
         <Footer />
        </Router>
      </div>
  );
}

export default App;
