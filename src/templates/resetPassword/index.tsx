import { Section, Text } from '@react-email/components'
import { useIntl } from 'react-intl';

export default ({ deviceName, code }: { deviceName: string, code: string }) => {
    const intl = useIntl();
    return (
        <Section className="text-text-primary px-4">
            <Text className="text-xl font-bold text-center">{intl.formatMessage({ id: 'resetPassword.title' })}</Text>
            <Text className="text-base whitespace-pre-line text-text-primary">{intl.formatMessage({ id: 'resetPassword.content' }, { deviceName })}</Text>
            <Text className="text-base text-text-primary">{intl.formatMessage({ id: 'resetPassword.codeTitle' })}</Text>
            <Text className="text-3xl font-bold text-center">{code}</Text>
            <Text className="text-base text-center text-text-secondary">{intl.formatMessage({ id: 'resetPassword.expiration' }, { deviceName })}</Text>
            <Text className="text-base text-text-primary">{intl.formatMessage({ id: 'resetPassword.footer' })}</Text>
        </Section>
    )
}