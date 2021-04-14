import React from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'

// Route Component imports
import Login from './pages/Login'
import Main from './pages/Main'

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
                    <Route path="/dashboard" component={Main} />
                    <Route path="/products" component={Main} />
                    <Route path="/examination" component={Main} />
                    <Route path="/statistics" component={Main} />
                </Switch>
            </AppContainer>
        </Router>
    )
}

export default App
