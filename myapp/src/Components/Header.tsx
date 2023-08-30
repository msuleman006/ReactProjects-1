import {AppBar,Toolbar,Typography} from '@mui/material'
import React from 'react'
import {logo} from '../Constraints/constraint'
 const Header:React.FunctionComponent = () => {
  return (
    <AppBar color="transparent" position="static">
        <Toolbar>
            <img src={logo} alt="Logo" style={{width:30,marginRight:15}}/>
            <Typography>Evernote</Typography>
        </Toolbar>
    </AppBar>
  )
}
export default Header
