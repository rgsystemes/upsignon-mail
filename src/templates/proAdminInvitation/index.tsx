import { Section, Text, Button, Link } from '@react-email/components'
import { useIntl } from 'react-intl';

export default () => {
    const intl = useIntl();
    return (
        <Section className="text-text-primary px-4">
            <Text className="text-xl font-bold text-center">{intl.formatMessage({ id: 'proAdminInvitation.title' })}</Text>
            <Text className="text-base whitespace-pre-line">{intl.formatMessage({ id: 'proAdminInvitation.content' })}</Text>
            <Button href="button" className="text-base bg-buttonPrimary text-white font-semibold py-2.5 rounded-md w-full text-center">{intl.formatMessage({ id: 'proAdminInvitation.button' })}</Button>
            <Text className="text-base text-center text-text-secondary">{intl.formatMessage({ id: 'proAdminInvitation.expiration' })}</Text>
            <Text className="text-base text-center text-text-tertiary">
                {intl.formatMessage({ id: 'proAdminInvitation.linkTitle' })}
                <Link href="link" className="text-link-primary">{intl.formatMessage({ id: 'proAdminInvitation.link' })}</Link>
            </Text>
            <Text className="text-base">{intl.formatMessage({ id: 'proAdminInvitation.stepTitle' })}</Text>
            <Text className="text-base whitespace-pre-line">{intl.formatMessage({ id: 'proAdminInvitation.step1' })}</Text>
            <Text className="text-base whitespace-pre-line">{intl.formatMessage({ id: 'proAdminInvitation.step2' })}</Text>
            <Text className="text-base text-text-tertiary">{intl.formatMessage({ id: 'proAdminInvitation.footer' })}</Text>
        </Section>
    )
}