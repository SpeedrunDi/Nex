import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  typography: {
    fontFamily: ['Inter', 'sans-serif'],
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 521,
      md: 721,
      lg: 961,
      lx: 1080,
      xl: 1441,
    },
  },
  palette: {
    white: {
      main: '#fff',
    },
    orange: {
      main: '#F47721',
    },
  },
})

export default theme
