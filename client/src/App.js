import './App.css';
import NavBar from './components/navbar/NavBar';
import MainPanel from './components/mainpanel/MainPanel';
import SignUp from './components/navbar/signup/SignUp';
import {BrowserRouter, Route} from "react-router-dom";

function App() {
  return (
      <div>
        <BrowserRouter>
          <Route path="/">
            <NavBar />
            <MainPanel />
          </Route>
        </BrowserRouter>
      </div>
  );
}

export default App;
