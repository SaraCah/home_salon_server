import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom'
import Header from './Components/Navigation/Header'
import './stylesheets/Header.scss'

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/Home'></Route>
        <Route exact path='/About'></Route>
        <Route exact path='/Contact'></Route>
        <Route exact path='Packages'></Route>
        <rout exact path='Testimonials'></rout>
      </Switch>
    </Router>
  )
}

export default App
