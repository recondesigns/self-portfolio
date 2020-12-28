import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import AppState from './providers/AppState'
import './index.css';
import App from './App';

function Index() {
    return (
        <Router>
            <AppState>
                <App />
            </AppState>
        </Router>
    )
}

ReactDOM.render(
    <Index />, document.getElementById('root')
)
