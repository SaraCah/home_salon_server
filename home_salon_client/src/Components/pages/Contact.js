import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Icon } from '@material-ui/core'
import PhoneIcon from '@material-ui/icons/Phone'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(10)
  },
  paper: {
    height: 400,
    width: 400
  }
}))

const Contact = () => {
  const classes = useStyles()
  return (
    <div>
      <Icon>
        <PhoneIcon />
        <h4>Phone Number:</h4> 0404579007
      </Icon>

      <h1>Opening Hours</h1>
      <h3>Wednesday to Friday</h3>
      <h4>5:45 am - 1:30 pm</h4>
    </div>
  )
}

export default Contact
