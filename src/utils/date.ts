import { format } from "date-fns"

export const formatDate = (date: string, dateFormat: string = "MMMM yyyy") => {
  const newDate = new Date(date)
  const offset = newDate.getTimezoneOffset()
  newDate.setMinutes(newDate.getMinutes() + offset)

  return format(newDate, dateFormat)
}
