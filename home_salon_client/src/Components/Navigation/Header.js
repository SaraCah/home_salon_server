import React from 'react'
import { Link } from 'react-router-dom'
import {
  Button,
  IconButton,
  AppBar,
  Toolbar,
  makeStyles
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { useMediaQuery } from 'react-responsive'
const Header = () => {
  const navStyles = makeStyles(theme => ({
    root: {
      backgroundColor: '#ffa0ea5b',
      justifyContent: 'flex-end',
      '@media (max-width: 1224px)': {
        justifyContent: 'flex-start'
      }
    },
    menuButton: {
      display: 'none',
      '@media (max-width: 1224px)': {
        position: 'relative',
        marginRight: '60vw',
        display: 'block'
      }
    }
  }))
  const mobileDevice = useMediaQuery({ query: '(max-width: 1224px)' })
  const navList = ['Home', 'About', 'Packages', 'Testimonials', 'Contact']
  const classes = navStyles()
  const navItem = navList.map(item => (
    <Button className={classes.navButton}>
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
        {!mobileDevice && navItem}
      </Toolbar>
    </AppBar>
  )
}

export default Header
