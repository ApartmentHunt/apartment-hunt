import React, { createContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import ApartmentMain from "./components/ApartmentMain/ApartmentMain";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  useEffect(() => {
    fetch(`${loggedInUser.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
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
              <Route path="/login">
                <Login></Login>
              </Route>
              <Route path="/booking">
                <ApartmentMain></ApartmentMain>
              </Route>
              <Route path="/signup">
                <SignUp></SignUp>
              </Route>
            </Switch>
          </div>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
