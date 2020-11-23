import React, { createContext, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import ApartmentMain from './components/ApartmentMain/ApartmentMain';





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
             <Route >
              <ApartmentMain></ApartmentMain>
              </Route>
             </Switch>
          </div>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
