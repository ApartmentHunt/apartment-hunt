import React, { createContext, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import ApartmentMain from './components/ApartmentMain/ApartmentMain';
import Appartments from './components/Appartments/Appartments';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';





export const UserContext = createContext();

function App() {
  const [admin, setAdmin] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState({});
  useEffect(() => {
    fetch(`${loggedInUser.email}`)
      .then(res => res.json())
      .then(data => {
        setAdmin(data);
      })
  }, [loggedInUser.email]);


  console.log(loggedInUser);
  return (
    <div className="App">
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>
          <div>
            <Switch>
            <Route exact path="/">
                <Home></Home>
              </Route>

              <Route path="/home">
                <Home></Home>
              </Route>
              <Route path="/login">
                <Login></Login>
              </Route>
              <Route path="/reg">
                <Registration></Registration>
              </Route>
              <Route path="/ApartmentMain/:_id">
              <ApartmentMain></ApartmentMain>
              </Route>
              <Route path="/dashboard">
              <Dashboard></Dashboard>
              </Route>
             </Switch>
          </div>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
