/* eslint-disable */
import Head from 'next/head';
import { createTheme, NextUIProvider } from '@nextui-org/react';
import { appWithTranslation } from 'next-i18next'
import { Toaster } from 'react-hot-toast'

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

import 'dayjs/locale/es'
import '../styles/globals.css'

export async function getStaticProps({ locale }){
  return{
      props:{
          ...(await serverSideTranslations(locale, ['common'])),
      }
  }
}

function MyApp({ Component, pageProps }) {

  const theme = createTheme({
    type: "light",
    theme: {
      colors: {
        primaryLight: '#E16736',
        primaryLightHover: '#E16736',
        primaryLightActive: '#E16736',
        primaryLightContrast: '$white',
        primary: '#E16736',
        primaryBorder: '#E16736',
        primaryBorderHover: '#E16736',
        primarySolidHover: '#E16736',
        primarySolidContrast: '$white',
        primaryShadow: '#E16736',

        secondaryLight: '#FFEEE8',
        secondaryLightHover: '#FFEEE8',
        secondaryLightActive: '#FFEEE8',
        secondaryLightContrast: '#E16736',
        secondary: '#FFEEE8',
        secondaryBorder: '#FFEEE8',
        secondaryBorderHover: '#FFEEE8',
        secondarySolidHover: '#FFEEE8',
        secondarySolidContrast: '#E16736',
        secondaryShadow: '#FFEEE8',

        errorLight: '#FEE4E2',
        errorLightHover: '#FEE4E2',
        errorLightActive: '#FEE4E2',
        errorLightContrast: '#B42318',
        error: '#F04438',
        errorBorder: '#F04438',
        errorBorderHover: '#F04438',
        errorSolidHover: '#F04438',
        errorSolidContrast: '$white',
        errorShadow: '#F04438',


        primaryDefault: '#E16736',
        secondaryDefault: '#FFEEE8',
        primaryGreen: '#143233',
        secondaryGreen: '#467678',
      },
      space: {},
      fonts: {}
    }
  })

  const { t, i18n } = useTranslation()

  return (
    <>
      <Head>
        <title>Example</title>
        
        // App Icon - https://realfavicongenerator.net/
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon_package/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon_package/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon_package/favicon-16x16.png" />
        <link rel="manifest" href="/favicon_package/site.webmanifest" />
        <link rel="mask-icon" href="/favicon_package/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="apple-mobile-web-app-title" content="Example" />
        <meta name="application-name" content="Example" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <NextUIProvider theme={theme}>
        <Toaster />
        <Component {...pageProps} t={t} i18n={i18n} />
      </NextUIProvider>
    </>

  )
}

export default appWithTranslation(MyApp);
