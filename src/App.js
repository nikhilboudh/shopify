
import  React, {useEffect}from 'react';
import Header from './Header.js';
import Home from './Home.js';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import './App.css';
import Login from "./Login"
import Checkout from './Checkout.js';
import {auth} from "./firebase.js";
import { useStateValue } from './StateProvider.js';

function App() {

const [{}, dispatch] = useStateValue();

useEffect(() =>{

  auth.onAuthStateChanged(authUser => {
    console.log('THE USER IS >>> ', authUser);

    if(authUser) {

      dispatch({
        type: 'SET_USER',
        user: authUser
      })

    }else{

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
      <Route path="/Loginpage">
        <Login/>
        </Route>

<Route path="/Checkout">
<Header/>

<Checkout/>
</Route>
  
<Route path="/">
<Header/>

<Home/>  
</Route>
</Switch>

 </div>
 </Router>
  );
}

export default App;
