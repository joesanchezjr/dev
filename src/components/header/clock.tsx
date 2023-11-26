"use client";
import React from "react";
import { getTimeAndConvertToTimeZone } from "@/utils/date";

export default function Clock() {
  const [time, setTime] = React.useState(getTimeAndConvertToTimeZone());

  React.useEffect(() => {
    const interval = setInterval(() => {
      setTime(getTimeAndConvertToTimeZone());
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  return <>{time}</>;
}
