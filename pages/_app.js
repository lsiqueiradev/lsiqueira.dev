import { ThemeProvider } from 'styled-components';
import { DefaultSeo } from 'next-seo';

import SEO from '../next-seo.config';

import GlobalStyle from '../styles/global';
import '../assets/fonts/fonts.css';

import { theme } from '../styles/theme';

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <DefaultSeo {...SEO} />
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}