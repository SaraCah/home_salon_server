import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  // Redirect,
  Switch
} from 'react-router-dom'
import Header from './Components/Navigation/Header'
import './stylesheets/Header.scss'
import Home from './Components/pages/Home'
import About from './Components/pages/About'
import Contact from './Components/pages/Contact'
// gotta change some of these routes to take a render param instead of component but just a placeholder for the time being
const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/About' component={About}></Route>
        <Route exact path='/Contact' component={Contact}></Route>
      </Switch>
    </Router>
  )
}

export default App
