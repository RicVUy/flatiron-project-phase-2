import React, {useState} from 'react';
import './index.css';
import EmployeePage from './components/Administrator/EmployeePage';
//import Person from './components/Employee/Person';
import Header from './components/Header/Header';
import EmployeeEdit from './components/Administrator/EmployeeEdit';
import EmployeeLogin from './components/Employee/EmployeeLogin';
import TimeElapsed from './components/Employee/TimeElapsed';
import TimeList from './components/Employee/TimeList';
import { Route, Switch, Redirect } from "react-router-dom";
import AdminLogin from './components/Administrator/AdminLogin';
import NavBar from './components/Header/NavBar';

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  return (
    <div>
    <NavBar />
      <Switch>
      <Route exact path="/EmployeeLogin">
          <EmployeeLogin />
        </Route>
        <Route exact path="/TimeElapsed">
          <TimeElapsed />
        </Route>
        <Route exact path="/TimeList">
          <TimeList />
        </Route>
        <Route path="/AdminLogin">
        <AdminLogin isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn} />
      </Route>
      <Route path="/EmployeePage">
        {isLoggedIn ? <EmployeePage /> : <Redirect to="/AdminLogin" />}
      </Route>
       {/*} <Route exact path="/EmployeePage">
          <EmployeePage />
  </Route>
        <Route exact path="/EmployeeEdit">
          <EmployeeEdit />
        </Route>*/}
        <Route path="/EmployeeEdit">
        {isLoggedIn ? <EmployeeEdit /> : <Redirect to="/AdminLogin" />}
      </Route>
        <Route exact path="/">
          <Header />
        </Route>
      </Switch>
    </div>
  )
}

export default App;
