import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core'
import React, { Component } from 'react'

export class Header extends Component {
    render() {
        return (
            <AppBar position="static" color="inherit">
                <Toolbar variant="dense">
                    <Typography variant="h6" color="inherit">
                        Covid Stats
                    </Typography>
                </Toolbar>
            </AppBar>
        )
    }
}

export default Header
