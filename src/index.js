import React from 'react';
import ReactDOM from 'react-dom';
import AppState from './providers/AppState'
import './index.css';
import App from './App';

function Index() {
    return (
        <AppState>
            <App />
        </AppState>
    )
}

ReactDOM.render(
    <Index />, document.getElementById('root')
)
