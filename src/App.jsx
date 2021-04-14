import React from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'

// Route Component imports
import Login from './pages/Login'

const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`


function App() {
    return (
        <Router>
            <AppContainer>
                <Switch>
                    <Route exact path="/" component={Login} />
                </Switch>
            </AppContainer>
        </Router>
    )
}

export default App
