import React, { FC } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

const Routes: FC = () => {
    return (
        <Switch>
            <Route path="playground"></Route>
            <Route>
                <Redirect to="/" />
            </Route>
        </Switch>
    )
}

export default Routes
