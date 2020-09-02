import React, { useEffect } from 'react';
import './App.css';
import { Button } from 'react-bootstrap';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Country from './Country/Country';
import Nomatch from './NoMatch/Nomatch';
import Countrydetail from './Countrydetail/Countrydetail';
import CountryShow from './CountryShow/CountryShow';


function App() {

  return (
   <Router>
     <div>
     <Switch>
       <Route exact path="/">
         <Country></Country>
       </Route>
       <Route path="/country">
          <Country></Country>
       </Route>
      
       <Route path="/name/:id">
          <Countrydetail></Countrydetail>
      </Route>

       <Route exact path="*">
         <Nomatch></Nomatch>
       </Route>
     </Switch>n 
     </div>
   </Router>
  );
}

export default App;
