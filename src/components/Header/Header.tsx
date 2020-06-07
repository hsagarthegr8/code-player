import React, { Component } from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'

class Header extends Component {
    render() {
        return (
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h5" color="inherit">
                        Code Player
                    </Typography>
                    <div style={{ flex: 1 }} />
                    <Link to="/playground" className="nav-link">
                        <Typography variant="h6">PlayGround</Typography>
                    </Link>
                </Toolbar>
            </AppBar>
        )
    }
}

export default Header
