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
    </Router>
  )
}

export default App
