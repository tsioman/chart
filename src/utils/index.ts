const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const formatDate = (
  date: Date,
  showWeekday: boolean,
  showDay: boolean
): string => {
  const result = [];
  date = new Date(date);
  if (showWeekday) {
    result.push(WEEKDAYS[date.getDay()], ", ");
  }
  result.push(MONTHS[date.getMonth()]);
  if (showDay) {
    result.push(" ", date.getDate());
  }
  return result.join("");
};

export const formatNumber = (n: number, shorten: boolean): string => {
  if (shorten) {
    if (n >= 1000000) {
      return Math.floor(n / 100000) / 10 + "M";
    }
    if (n >= 1000) {
      return Math.floor(n / 100) / 10 + "K";
    }
  }
  return n.toLocaleString();
};

export const normalize = (value: number, min: number, max: number): number =>
  Math.abs((value - min) / (max - min));

export const getMinMax = (
  valuesArray: number[]
): Record<"min" | "max", number> => {
  const max = Math.max(...valuesArray);
  const min = Math.min(...valuesArray);
  return { min, max };
};
