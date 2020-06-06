import React, { FC } from 'react'
import { CssBaseline, ThemeProvider } from '@material-ui/core'
import { BrowserRouter as Router } from 'react-router-dom'
import { LandingPage } from './pages'
import theme from './theme'

const App: FC = () => {
    return (
        <div className="App">
            <Router>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <LandingPage />
                </ThemeProvider>
            </Router>
        </div>
    )
}

export default App
