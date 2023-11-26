import { format } from "date-fns";
import { format as formatWithTZ, utcToZonedTime } from "date-fns-tz";

export const formatDate = (date: string, dateFormat: string = "MMMM yyyy") => {
  const newDate = new Date(date);
  const offset = newDate.getTimezoneOffset();
  newDate.setMinutes(newDate.getMinutes() + offset);

  return format(newDate, dateFormat);
};

export const getTimeAndConvertToTimeZone = (
  time: Date = new Date(),
  timeZone: string = "America/Chicago",
) => {
  const pattern = "h:mmaaa z (O)";
  const timeZoneDate = utcToZonedTime(time, timeZone);
  const timeZoneString = formatWithTZ(timeZoneDate, pattern, { timeZone });
  return timeZoneString;
};
