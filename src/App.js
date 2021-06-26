import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/Home/Home';
import BusinessClass from './components/BusinessClass/BusinessClass'
import { createContext, useState } from 'react';
import Seats from './components/Seats/Seats';
import Payment from './components/Payment/Payment';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();
function App() {
  const [userDetails, setUserDetails] = useState({});
  return (
    <UserContext.Provider value={[userDetails, setUserDetails]}>
      <div className="App">
        <Router>
          <Switch>
            <PrivateRoute path="/booking/:type">
              <BusinessClass />
            </PrivateRoute>
            <Route path="/seats">
              <Seats />
            </Route>
            <Route path="/login"> 
              <Login />
            </Route>
            <Route path="/payment">
              <Payment />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </div>
    </UserContext.Provider>
  );
}

export default App;
