import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import MainLayout from 'core/layouts/Main'
import { TeraDesignSystem } from 'core/themes/chakra'


export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={TeraDesignSystem}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </ChakraProvider>
  )
}