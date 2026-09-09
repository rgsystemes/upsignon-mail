import { Container, Tailwind } from '@react-email/components'
import { Body } from '@react-email/components'
import { Head, Html } from '@react-email/components'
import { ReactNode } from 'react'
import { IntlProvider } from 'react-intl'

import { Locales } from '../../index.js'
import trads from '../footer/messages.json' with { type: 'json' }
import { Footer, Header } from '../index.js'
import tailwindConfig from './tailwind.config.js'

type TLayoutProps = {
  children: ReactNode
  messages: { [tradKey: string]: string }
  locale: Locales
  hideHeaderImage?: boolean
}
export const Layout = ({ children, messages, locale, hideHeaderImage }: TLayoutProps) => {
  const mergedMessages = {
    ...trads[locale],
    ...messages,
  }

  return (
    <Html>
      <Head />
      <IntlProvider messages={mergedMessages} locale={locale}>
        <Tailwind config={tailwindConfig}>
          <Body className="font-sans">
            <Container className="mt-4 bg-white">
              <Header hideImage={hideHeaderImage} />
              {children}
              <Footer />
            </Container>
          </Body>
        </Tailwind>
      </IntlProvider>
    </Html>
  )
}
