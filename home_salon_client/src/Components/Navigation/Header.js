import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core'
import { Tabs, Toolbar } from '@material-ui/core'
import { Typography } from '@material-ui/core'
import { AppBar } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { Button } from '@material-ui/core'
const Header = () => {
  const navStyles = makeStyles({
    root: {
      backgroundColor: '#ffa0ea5b',
      justifyContent: 'flex-end'
    }
  })
  const classes = navStyles()
  return (
    <AppBar position='static' classes={{ root: classes.root }}>
      <Toolbar classes={{ root: classes.root }}>
        <Button>
          <Link to='/' exact>
            Home
          </Link>
        </Button>
        <Button>
          <Link to='/about' exact>
            About
          </Link>
        </Button>
        <Button>
          <Link to='/packages' exact>
            Packages
          </Link>
        </Button>
        <Button>
          <Link to='/testimonials' exact>
            Testimonials
          </Link>
        </Button>
        <Button>
          <Link to='/contact' exact>
            Contact
          </Link>
        </Button>
      </Toolbar>
    </AppBar>
  )
}

export default Header
