import React, { useState } from 'react'

export const AppStateContext = React.createContext()

export default function AppState({ children }) {
    const [appState, setAppState] = useState('hello world')
    
    return (
        <AppStateContext.Provider value={[appState, setAppState]}>
            { children }
        </AppStateContext.Provider>
    )
}