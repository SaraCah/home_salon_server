import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core'
import { Button, IconButton, AppBar, Toolbar } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
const Header = () => {
  const navStyles = makeStyles(theme => ({
    root: {
      backgroundColor: '#ffa0ea5b',
      justifyContent: 'flex-end',
      // display: 'block',
      '@media (max-width: 800px)': {
        justifyContent: 'flex-start'
        // display: 'none'
      }
    },
    menuButton: {
      display: 'none',
      '@media (max-width: 800px)': {
        position: 'relative',
        marginRight: '60vw',
        display: 'block'
      }
    }
  }))
  const navList = ['Home', 'About', 'Packages', 'Testimonials', 'Contact']
  const classes = navStyles()
  let navItem = navList.map(item => (
    <Button>
      {item === 'Home' ? (
        <Link to='/' exact>
          {item}
        </Link>
      ) : (
        <Link to={`/${item}`} exact>
          {item}
        </Link>
      )}
    </Button>
  ))

  return (
    <AppBar position='static' classes={{ root: classes.root }}>
      <Toolbar classes={{ root: classes.root }}>
        <IconButton
          edge='start'
          className={classes.menuButton}
          color='inherit'
          aria-label='menu'
        >
          <MenuIcon />
        </IconButton>
        {navItem}
      </Toolbar>
    </AppBar>
  )
}

export default Header
