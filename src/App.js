import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from './Checkout';
import Login from './Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect( () => {
    //Onc e the component loads
    auth.onAuthStateChanged(authUser => {
      console.log("The user is >>>", authUser);

      if(authUser) {
        //The user loggedIn / the user was logged in

        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        //The user is logged out

        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    <Router>
      <div className="App">
        
        <Switch>
          <Route path="/login" exact>
            <Login />
          </Route>

          <Route path="/" exact>
            <Header /> 
            <Home />
          </Route>

          <Route path="/checkout" exact>
          <Header /> 
            <Checkout />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
