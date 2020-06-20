import React, { FC } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Playground from './Playground'
import Profile from './Profile'

const Routes: FC = () => {
    return (
        <Switch>
            <Route path="/playground">
                <Playground />
            </Route>
            <Route path="/profile">
                <Profile />
            </Route>
            <Route>
                <Redirect to="/" />
            </Route>
        </Switch>
    )
}

export default Routes
