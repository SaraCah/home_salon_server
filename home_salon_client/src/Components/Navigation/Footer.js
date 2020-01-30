import React from 'react'
import Styling from '../../stylesheets/footer'
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount'
import { IconButton, AppBar, makeStyles } from '@material-ui/core'
const styling = Styling

const Footer = () => {
  const navStyles = makeStyles(theme => styling)

  const classes = navStyles()
  return (
    <div>
      <AppBar position='fixed' classes={{ root: classes.root }}>
        {/* <IconButton classes={{ adminbutton: classes.adminbutton }}>
          <SupervisorAccountIcon />
          <h6>ADMIN</h6>
        </IconButton> */}
      </AppBar>
    </div>
  )
}

export default Footer
