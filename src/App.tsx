import React, { FC } from 'react'
import { CssBaseline, ThemeProvider } from '@material-ui/core'
import { BrowserRouter as Router } from 'react-router-dom'
import { LandingPage } from './pages'
import theme from './theme'
import { Header } from './components'

const App: FC = () => {
    return (
        <div className="App">
            <Router>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <Header />
                    <LandingPage />
                </ThemeProvider>
            </Router>
        </div>
    )
}

export default App
