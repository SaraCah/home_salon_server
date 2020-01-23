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
import ListItemText from '@material-ui/core/ListItemText'
import ListItem from '@material-ui/core/ListItem'
import List from '@material-ui/core/List'
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

  const mobileNav = side => (
    <div
      className={classes.list}
      role='presentation'
      // onClick={toggleDrawer(side, false)}
      // onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        {navList.map(item => (
          <ListItem button key={item}>
            <ListItemText primary={item} />
          </ListItem>
        ))}
      </List>
    </div>
  )
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
        {mobileDevice ? mobileNav : navItem}
      </Toolbar>
    </AppBar>
  )
}

export default Header
