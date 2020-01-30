import React, { Fragment } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom'
import Header from './Components/Navigation/Header'
import './stylesheets/Header.scss'
import Home from './Components/pages/Home'
import About from './Components/pages/About'
import Contact from './Components/pages/Contact'
import Packages from './Components/pages/Packages'
import Testimonials from './Components/pages/Testimonials'
const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/About' component={About}></Route>
        <Route exact path='/Contact' component={Contact}></Route>
        <Route exact path='Packages' component={Packages}></Route>
        <Route exact path='Testimonials' component={Testimonials}></Route>
      </Switch>
    </Router>
  )
}

export default App
