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
}
export const Layout = ({ children, messages, locale }: TLayoutProps) => {
  const mergedMessages = {
    ...trads[locale],
    ...messages,
  }

  return (
    <Html>
      <Head />
      <IntlProvider messages={mergedMessages} locale={locale}>
        <Tailwind config={tailwindConfig}>
          <Body>
            <Container className="bg-white">
              <Header />
              {children}
              <Footer />
            </Container>
          </Body>
        </Tailwind>
      </IntlProvider>
    </Html>
  )
}
