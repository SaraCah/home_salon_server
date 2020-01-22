
import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import MainNavigation from './shared/components/Navigation/MainNavigation';


import React from 'react'

function App() {
  return (
<<<<<<< HEAD
    <Router>
      < MainNavigation />
      <main>
        <Switch>
          <Route path="/" exact>
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
=======
    <div>
      <h1>Testing</h1>
    </div>
  )
>>>>>>> 0aea4b62fa139b2ef98cd71865048d54a5c96f0b
}

export default App
