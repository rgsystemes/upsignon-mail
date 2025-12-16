import React from "react";
import { Tailwind, Container } from "@react-email/components";
import { Body } from "@react-email/components";
import { Footer, Header } from "../index";
import { IntlProvider } from 'react-intl';
import tailwindConfig from './tailwind.config';

export const Layout = ({
  children,
  messages,
  locale,
}: {
  children: React.ReactNode;
  messages: Record<string, string>;
  locale: string;
}) => {
  return (
    <IntlProvider messages={messages} locale={locale}>
      <Tailwind
        config={tailwindConfig}
      >
        <Body>
          <Container className="bg-white">
            <Header />
            {children}
            <Footer />
          </Container>
        </Body>
      </Tailwind>
    </IntlProvider>
  );
};