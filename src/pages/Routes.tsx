import React, { FC } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Playground from './Playground'

const Routes: FC = () => {
    console.log('hello')
    return (
        <Switch>
            <Route path="/playground">
                <Playground />
            </Route>
            <Route>
                <Redirect to="/" />
            </Route>
        </Switch>
    )
}

export default Routes
