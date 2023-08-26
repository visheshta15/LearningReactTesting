import React , {ReactNode} from 'react'
import {ThemeProvider, createTheme} from '@mui/material/styles'
import { CssBaseline } from '@mui/material'

const theme = createTheme({
    palette: {
        mode: 'dark'
    }
})
// console.log(theme)
function AppProvider({children}) {
  return (
    <div>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    </div>
  )
}

export default AppProvider

AppProvider.defaultProps = {
    children : ReactNode
}