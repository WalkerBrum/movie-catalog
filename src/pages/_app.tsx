import { ChakraProvider, CSSReset, Box } from '@chakra-ui/react'
import type { AppProps } from 'next/app'

import { theme } from '@/themes'
import { Header } from '@/components/Header'
import { MoviesContextProvider } from '@/context/MoviesContext'
import { Footer } from '@/components/Footer'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Box
        bg="background.black"
        minHeight="100vh"
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
      >
        <MoviesContextProvider>
          <Header />
          <Component {...pageProps} />
          <Footer />
        </MoviesContextProvider>
      </Box>
    </ChakraProvider>
  )
}
