import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom'
import MainNavigation from './Components/Navigation/MainNavigation'

function App() {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Switch>
          <Route path='/' exact></Route>
          <Redirect to='/' />
        </Switch>
      </main>
    </Router>
  )
}

export default App
