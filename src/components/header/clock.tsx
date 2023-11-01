"use client";
import React from "react";
import { format } from "date-fns-tz";

export default function Clock() {
  const [time, setTime] = React.useState(new Date());

  const TIME_ZONE = "America/Chicago";
  // const zonedDate = utcToZonedTime(time, TIME_ZONE);
  const pattern = "h:mmaaa z (O)";
  const output = format(time, pattern, { timeZone: TIME_ZONE });

  React.useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  return <>{output}</>;
}
