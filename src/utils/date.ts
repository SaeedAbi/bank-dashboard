import { format, parseISO } from "date-fns";

export function formatToMMYY(dateISO: string) {
  const date = parseISO(dateISO);
  return format(date, "MM/yy");
}

export function formatToMMMM(dateISO: string) {
  const date = parseISO(dateISO);
  return format(date, "MMMM");
}

export function formatToWeekDay(dateISO: string) {
  const date = parseISO(dateISO);
  return format(date, "EEEE");
}
export function formatDateTOYYYYMMDD(d: Date | string) {
  const date = typeof d === "string" ? new Date(d) : d;
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-indexed, so add 1
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}
export function getDatesArray(startDate: Date | string, numDays: number) {
  const dateArray = [];
  const currentDate =
    typeof startDate === "string"
      ? new Date(startDate)
      : new Date(startDate.getTime());

  for (let i = 0; i < numDays; i++) {
    const formattedDate = formatDateTOYYYYMMDD(currentDate);
    dateArray.push(formattedDate); // Add the current date as a timestamp string
    currentDate.setDate(currentDate.getDate() + 1); // Increment the date by 1
  }

  return dateArray;
}
