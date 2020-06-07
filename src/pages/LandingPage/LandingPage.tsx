import React, { Component } from 'react'
import { Grid } from '@material-ui/core'
import LoginForm from './LoginForm'
import RegistrationForm from './RegistrationForm'

class LandingPage extends Component {
    render() {
        return (
            <Grid container justify="space-around" alignItems="center">
                <Grid item sm={12}>
                    Hello
                </Grid>
                <Grid item sm={4}>
                    <LoginForm />
                </Grid>
                <Grid item sm={4}>
                    <RegistrationForm />
                </Grid>
            </Grid>
        )
    }
}

export default LandingPage
