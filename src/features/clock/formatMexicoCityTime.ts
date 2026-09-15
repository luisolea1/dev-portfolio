export const CLOCK_TIME_ZONE = 'America/Mexico_City'

const timeFormatter = new Intl.DateTimeFormat('en-US', {
  timeZone: CLOCK_TIME_ZONE,
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hour12: true,
})
const offsetFormatter = new Intl.DateTimeFormat('en-US', {
  timeZone: CLOCK_TIME_ZONE,
  timeZoneName: 'shortOffset',
})

export function formatMexicoCityTime(date: Date) {
  return {
    time: timeFormatter.format(date),
    offset: offsetFormatter.formatToParts(date).find((part) => part.type === 'timeZoneName')?.value ?? '',
  }
}
