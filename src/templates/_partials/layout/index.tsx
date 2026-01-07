import trads from '@partials/footer/messages.json' with { type: 'json' }
import { Footer, Header } from '@partials/index.js'
import { Container, Tailwind } from '@react-email/components'
import { Body } from '@react-email/components'
import { Head, Html } from '@react-email/components'
import { IntlProvider } from 'react-intl'

import tailwindConfig from './tailwind.config.js'

export const Layout = ({ children, messages, locale }) => {
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
