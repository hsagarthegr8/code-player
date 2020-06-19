import React, { FC } from 'react'
import { Redirect, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { LandingPage } from './pages'
import { Header } from './components'
import { ApplicationState } from './store/types'
import Routes from './pages/Routes'
import { Switch } from 'react-router-dom'

interface Props {
    isLoggedIn: boolean
}

const App: FC<Props> = (props) => {
    const { isLoggedIn } = props
    return (
        <div id="App">
            {!isLoggedIn ? (
                <Switch>
                    <Route exact path="/">
                        <LandingPage />
                    </Route>
                    <Route>
                        <Redirect to="/" />
                    </Route>
                </Switch>
            ) : (
                <>
                    <Header />
                    <div id="main">
                        <Routes />
                    </div>
                </>
            )}
        </div>
    )
}

const mapStateToProps = (state: ApplicationState) => ({
    isLoggedIn: state.auth.isLoggedIn,
})

export default connect(mapStateToProps)(App)
