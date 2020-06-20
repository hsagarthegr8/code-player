import React, { Component } from 'react'
import { AppBar, Toolbar, Typography, Menu, MenuItem, Button } from '@material-ui/core'
import { Link, withRouter, RouteComponentProps } from 'react-router-dom'
import { connect } from 'react-redux'
import { logOut } from '../../store/auth/actions'
import { ApplicationState } from '../../store/types'

interface Props {
    username?: string
}

interface Actions {
    logOut: () => void
}

interface State {
    anchorEl: HTMLElement | null
}

class Header extends Component<Props & Actions & RouteComponentProps, State> {
    state = {
        anchorEl: null,
    }

    handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
        this.setState({
            anchorEl: event.currentTarget,
        })
    }

    handleProfileClick = () => {
        const { history } = this.props
        history.push('/profile')
        this.handleMenuClose()
    }

    handleMenuClose = () => {
        this.setState({
            anchorEl: null,
        })
    }

    handleLogout = () => {
        const { logOut } = this.props
        logOut()
        this.handleMenuClose()
    }

    render() {
        const { username } = this.props
        const { anchorEl } = this.state
        return (
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h5" color="inherit">
                        Code Player
                    </Typography>
                    <div style={{ flex: 1 }} />
                    <Link to="/playground" className="nav-link mr-15">
                        <Typography variant="body1">PlayGround</Typography>
                    </Link>
                    <Button variant="text" aria-haspopup="true" className="nav-link" onClick={this.handleMenuOpen}>
                        Hi {username}
                    </Button>
                    <Menu
                        id="simple-menu"
                        keepMounted
                        anchorEl={anchorEl}
                        transformOrigin={{ vertical: 'top', horizontal: 'center' }}
                        open={Boolean(anchorEl)}
                        onClose={this.handleMenuClose}
                    >
                        <MenuItem onClick={this.handleProfileClick}>My Profile</MenuItem>
                        <MenuItem onClick={this.handleMenuClose}>My account</MenuItem>
                        <MenuItem onClick={this.handleLogout}>Logout</MenuItem>
                    </Menu>
                </Toolbar>
            </AppBar>
        )
    }
}

const mapStateToProps = (state: ApplicationState): Props => ({
    username: state.auth.username,
})

const mapDispatchToProps = {
    logOut,
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header))
