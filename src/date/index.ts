/**
 * It takes a date object, gets the day, month and year, and returns a string in the format of
 * dd/mm/yyyy.
 * @param {Date} date - Date - The date to format
 * @returns A function that takes a date and returns a string.
 */
export const formatDate = (date: Date) => {
  const day = `0${date.getDate()}`.slice(-2);
  const month = `0${date.getMonth() + 1}`.slice(-2);
  const year = date.getFullYear().toString();

  return `${day}/${month}/${year}`;
};

const months: dateModels.Months[] = [
  {
    name: "JANEIRO",
    short: "Jan.",
  },
  {
    name: "FEVEREIRO",
    short: "Fev.",
  },
  {
    name: "MARÇO",
    short: "Mar.",
  },
  {
    name: "ABRIL",
    short: "Abril",
  },
  {
    name: "MAIO",
    short: "Maio",
  },
  {
    name: "JUNHO",
    short: "Jun.",
  },
  {
    name: "JULHO",
    short: "Jul.",
  },
  {
    name: "AGOSTO",
    short: "Ago.",
  },
  {
    name: "SETEMBRO",
    short: "Set.",
  },
  {
    name: "OUTUBRO",
    short: "Out.",
  },
  {
    name: "NOVEMBRO",
    short: "Nov.",
  },
  {
    name: "DEZEMBRO",
    short: "Dez.",
  },
];

/**
 * It takes a date string, converts it to a date object, gets the day and month, and returns a string
 * with the day and month name.
 * @param {string | null} date - string | null
 * @returns A function that takes a date and returns a string.
 */
export const formatDateToString = (date: string | null) => {
  const dateObj = new Date(date);
  const day = `0${dateObj.getUTCDate()}`.slice(-2);
  const month = dateObj.getMonth();

  return `${day} de ${months[month].name?.toLowerCase()}`;
};

/**
 * It takes a date string, converts it to a Date object, then returns an array of two Date objects, the
 * first being the first day of the month, and the second being the last day of the month.
 *
 * Here's a quick example of how to use it:
 *
 * const [firstDay, lastDay] = getFirstAndLastDay('2019-01-01');
 * console.log(firstDay); // Mon Jan 01 2019 00:00:00 GMT-0500 (Eastern Standard Time)
 * console.log(lastDay); // Tue Jan 31 2019 00:00:00 GMT-0500 (Eastern Standard Time)
 *
 * const [firstDay, lastDay] = getFirstAndLastDay('2019-02-01');
 * console.log(firstDay); // Fri Feb 01 2019 00:00:00 GMT-0500 (Eastern Standard Time)
 * console
 * @param {string} date - string - the date you want to get the first and last day of the month for
 * @returns An array of two dates.
 */
export const getFirstAndLastDay = (date: string) => {
  const dateObj = new Date(date);
  const firstDay = new Date(dateObj.getFullYear(), dateObj.getMonth(), 1);
  const lastDay = new Date(dateObj.getFullYear(), dateObj.getMonth() + 1, 0);

  return [firstDay, lastDay];
};
