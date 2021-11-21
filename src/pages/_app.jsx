import { createGlobalStyle, ThemeProvider } from 'styled-components'
import '../styles/globals.scss'
import redux from '../redux'
import { Provider } from 'react-redux'

const GlobalStyle = createGlobalStyle`
  //Global Colors
  body {
    background: #f9f9f9;
  }

  //Responsive configurations

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }
`

const theme = {
  colors: {
    primary: '#000000'
  }
}

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={redux}>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  )
}

export default MyApp
