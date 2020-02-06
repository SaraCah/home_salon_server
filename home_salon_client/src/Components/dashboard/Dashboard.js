import React, {Fragment}from 'react'
import { Link } from 'react-router-dom'
import {
    Button,
  } from '@material-ui/core'
import Deals from '../pages/deals/Deals'

const Dashboard = props => {
    return (
  <Fragment>
     <div className="landing">
      <div className="container">
      <div className="section__header">
      <div className="text-center">
      <div className="section-intro1__subtitle mb-24 text-secondary"></div>
    <h1> Welcome Maxine</h1>
    <h2> These are your current deals</h2>
    <p> To delete a deal, simply press delete</p>
    <Deals />
    
    <Button variant="contained" color="secondary">
    <Link to="/createdeal">Create Deal</Link>
    </Button>
    </div>
      </div>
      </div>
      </div>


</Fragment>
    )
}

export default Dashboard
