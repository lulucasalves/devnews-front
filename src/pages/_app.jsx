import { createGlobalStyle } from "styled-components";
import { Menu } from "../components/Menu";
import { Provider as NextGitProvider } from "next-auth/client";

import "../styles/globals.css";

const GlobalStyle = createGlobalStyle`
  //Global Colors
  body {
    background: #121414;
    font-family: 'Roboto', sans-serif;
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
`;

function MyApp({ Component, pageProps }) {
  return (
    <NextGitProvider session={pageProps.session}>
      <GlobalStyle />
      <Menu />
      <Component {...pageProps} />
    </NextGitProvider>
  );
}

export default MyApp;
