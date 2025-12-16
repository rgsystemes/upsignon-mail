import { Text, Link, Img, Section } from '@react-email/components'
import { useIntl } from 'react-intl';

export const Footer = () => {
    const intl = useIntl();
    return (
        <Section className="bg-septeo-primary p-8 text-center mt-20">
            <Img src="/src/templates/_assets/logoFooter.png" alt="Septeo" className="mx-auto" />
            <Text className="text-white text-base">{intl.formatMessage({ id: 'footer.content' })}</Text>
            <Link href="link" className="text-white text-base underline">
                {intl.formatMessage({ id: 'footer.link' })}
            </Link>
        </Section>
    )
}