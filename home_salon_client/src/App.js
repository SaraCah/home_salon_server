import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom'
import Header from './Components/Navigation/Header'
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min.js'
function App() {
  return (
    <Router>
      <Header />
    </Router>
  )
}

export default App
