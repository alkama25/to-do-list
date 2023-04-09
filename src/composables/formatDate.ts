export function useFormattedDate(date: Date): string {
  const formattedDate: Intl.DateTimeFormatOptions = {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  }
  return new Intl.DateTimeFormat('en-US', formattedDate).format(date)
}
