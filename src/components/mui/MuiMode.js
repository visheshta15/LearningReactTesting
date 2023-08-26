import React from 'react'
import { useTheme } from '@mui/material/styles'
import { Typography } from '@mui/material'

function MuiMode() {
    const theme = useTheme()
    // console.log(theme)
  return (
    <div>
        <Typography component={'h1'}>
            {`${theme.palette.mode} mode`}
        </Typography>
    </div>
  )
}

export default MuiMode