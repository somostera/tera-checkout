import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import DefaultLayout from 'layouts/DefaultLayout'
import { TeraDesignSystem } from 'themes/chakra'


export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={TeraDesignSystem}>
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    </ChakraProvider>
  )
}