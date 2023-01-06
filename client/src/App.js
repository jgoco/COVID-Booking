import './App.css';
import {useState} from 'react';
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

function App() {

  const [userLoginStatus, setUserLoginStatus] = useState(true);

  return (
      <div>
        <Router>
         <NavBar />
         <Switch>
           <Route exact path='/' component={Home}/>
           <Route exact path='/api/rec-center' component={RecCenterCalendar} />
           <Route exact path='/api/user-cal' component={UserCalendar} />
           <Route exact path='/api/user/login' component={UserLoginPage}/>
           <Route exact path='/api/user/register' component={RegisterPage}/>
           <Route path='/api/user/:id/classes'/>
           <Route exact path='/api/centre/login' component={RecCentreLoginPage}/>
           <Route exact path='/api/centre/register' />
           <Route exact path='/api/centre/:id/classes' />
           <Route exact path='/about' />
         </Switch>
         <Footer />
        </Router>
      </div>
  );
}

export default App;
