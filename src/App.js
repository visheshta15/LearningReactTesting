import React from 'react'
import Application from './components/application/Application'
import Skills from './components/skills/Skills'
import Counter from './components/counter/Counter'
import AppProvider from './providers/AppProvider'
import MuiMode from './components/mui/MuiMode'
import CounterApp from './components/hooks/CounterApp'
import IncDec from './components/incDec/IncDec'
import Users from './components/users/Users'

function App() {
  return (
    <>
      {/* <Application /> */}
      {/* <Skills /> */}
      {/* <Counter /> */}

      {/* <AppProvider>
        <div className="app">
            <MuiMode />
        </div>
      </AppProvider> */}
      
      {/* <CounterApp /> */}
      {/* <IncDec /> */}
      <Users />
    </>
    
  )
}

export default App