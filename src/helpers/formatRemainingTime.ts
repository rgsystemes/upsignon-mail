import type { Locales } from '../templates/index.js'

const units = {
  fr: {
    hours: ['heure', 'heures'],
    minutes: ['minute', 'minutes'],
    seconds: ['seconde', 'secondes'],
  },
  en: {
    hours: ['hour', 'hours'],
    minutes: ['minute', 'minutes'],
    seconds: ['second', 'seconds'],
  },
}

export const formatRemainingTime = (date: Date, locale: Locales): string => {
  const now = new Date()

  const diffSeconds = Math.floor(Math.abs(date.getTime() - now.getTime()) / 1000)
  if (diffSeconds < 60) {
    const label = diffSeconds === 1 ? units[locale].seconds[0] : units[locale].seconds[1]
    return `${diffSeconds} ${label}`
  }

  const diffMinutes = Math.floor(diffSeconds / 60)
  if (diffMinutes < 60) {
    const label = diffMinutes === 1 ? units[locale].minutes[0] : units[locale].minutes[1]
    return `${diffMinutes} ${label}`
  }

  const diffHours = Math.floor(diffMinutes / 60)
  const label = diffHours === 1 ? units[locale].hours[0] : units[locale].hours[1]
  return `${diffHours} ${label}`
}
