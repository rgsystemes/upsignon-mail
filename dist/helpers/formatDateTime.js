const getTimezoneOffsetLabel = (date, ianaTimezone) => {
    const formatter = new Intl.DateTimeFormat('en', {
        timeZone: ianaTimezone,
        timeZoneName: 'shortOffset',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
    });
    const offset = formatter
        .formatToParts(date)
        .find((part) => part.type === 'timeZoneName')?.value;
    return offset ?? ianaTimezone;
};
export const formatDateWithMonthName = (date, locale, ianaTimezone) => {
    return new Intl.DateTimeFormat(locale, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        timeZone: ianaTimezone,
    }).format(date);
};
export const formatTimeWithTimezone = (date, locale, ianaTimezone) => {
    const time = new Intl.DateTimeFormat(locale, {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
        timeZone: ianaTimezone,
    }).format(date);
    const offset = getTimezoneOffsetLabel(date, ianaTimezone);
    return `${time} (${ianaTimezone}, ${offset})`;
};
