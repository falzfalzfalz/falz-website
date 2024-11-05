export function trimText(input: string, maxLength: number = 100): string {
  if (input.length <= maxLength) return input;
  return input.substring(0, maxLength - 3) + "...";
}

export function getCurrentTime(timeZone: string): { date: Date; timeZone: string } {
  const now = new Date();
  return { date: now, timeZone };
}

export function formatTime({ date, timeZone }: { date: Date; timeZone: string }): string {
  const options: Intl.DateTimeFormatOptions = {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
    timeZone: timeZone,
  };

  let formattedTime = new Intl.DateTimeFormat("en-US", options).format(date);

  // Get timezone abbreviation
  const timeZoneAbbr = new Date()
    .toLocaleTimeString("en-US", {
      timeZone,
      timeZoneName: "short",
    })
    .split(" ")
    .pop();

  formattedTime += ` ${timeZoneAbbr}`;
  return formattedTime;
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}