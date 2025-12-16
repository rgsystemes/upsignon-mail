import { Section, Text } from '@react-email/components'
import { useIntl } from 'react-intl';

export default ({ deviceName, availableCodeDate, code }: { deviceName: string, availableCodeDate: string, code: string }) => {
    const intl = useIntl();
    return (
        <Section className="text-text-primary px-4">
            <Text className="text-base whitespace-pre-line">{intl.formatMessage({ id: 'newDevice.content' }, { deviceName })}</Text>
            <Text className="text-3xl font-bold text-center">{code}</Text>
            <Text className="text-base text-center">{intl.formatMessage({ id: 'newDevice.availableCode' }, { availableCodeDate })}</Text>
            <Text className="text-base text-text-tertiary">{intl.formatMessage({ id: 'newDevice.warning' })}</Text>
        </Section>
    )
}