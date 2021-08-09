import './App.css';
import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

// Components
import NavBar from './components/NavBar/NavBar';
import Home from './components/views/Homepage/Home';
import MainPanel from './components/mainpanel/MainPanel';
import SignUp from './components/navbar_old/signup/SignUp';
import Footer from './components/Footer/Footer';

function App() {
  return (
      <div>
        <Router>
         <NavBar />
         <Switch>
           <Route path='/' exact component={Home}/>
         </Switch>
         <Footer />
        </Router>
      </div>
  );
}

export default App;
