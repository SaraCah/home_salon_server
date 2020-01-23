import React from 'react'

export const SideList = () => {
  return (
    <div
      className={classes.list}
      role='presentation'
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        {navList.map(item => (
          <ListItem key={item}>
            {item === 'Home' ? (
              <Link to='/' key={item}>
                {item}
              </Link>
            ) : (
              <Link to={`/${item}`} key={item}>
                {item}
              </Link>
            )}
          </ListItem>
        ))}
      </List>
    </div>
  )
}
