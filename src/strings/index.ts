/**
 * It takes a string and returns a new string with all non-numeric characters removed
 * @param {string} string - string - the string to be modified
 */
export const keepOnlyNumbers = (string: string) => string.replace(/\D/g, "");

/**
 * It takes a string and returns a string with all non-alphanumeric characters removed
 * @param {string} string - string - the string to be cleaned
 */
export const removeSpecialChars = (string: string) =>
  string ? string.replace(/[^A-Za-z0-9]/g, "").replace(/\/s/g, "") : null;

/**
 * It takes a number, converts it to a string, adds commas to the thousands place, and returns the
 * string
 * @param {number | string} amount - The number to be formatted.
 * @param [decimalCount=2] - The number of decimal places to round to.
 * @param [decimal=,] - The character to use as the decimal point.
 * @param [thousands=.] - The character to use as a thousands separator.
 * @returns A function that takes 3 parameters.
 */
export const formatNumber = (
  amount: number | string,
  decimalCount = 2,
  decimal = ",",
  thousands = "."
) => {
  decimalCount = Math.abs(decimalCount);
  decimalCount = isNaN(decimalCount) ? 2 : decimalCount;
  const NewAmount: number = Number(amount);
  const negativeSign = amount < 0 ? "-" : "";
  const i = parseInt(
    Math.abs(Number(NewAmount) || 0).toFixed(decimalCount),
    10
  ).toString();
  const j = i.length > 3 ? i.length % 3 : 0;
  return (
    negativeSign +
    (j ? i.substr(0, j) + thousands : "") +
    i.substr(j).replace(/(\d{3})(?=\d)/g, `$1${thousands}`) +
    (decimalCount
      ? decimal +
        Math.abs(NewAmount - i)
          .toFixed(decimalCount)
          .slice(2)
      : "")
  );
};

/**
 * It takes a string, converts it to a number, formats it to a currency, and returns it as a string
 * @param {string} value - string - The value to be formatted
 * @param {boolean} hideCurrency - boolean
 * @returns A function that takes two parameters and returns a string.
 */
export const toCurrencyBRL = (value: string, hideCurrency: boolean) => {
  if (!value) return "R$ 0,00";
  try {
    const formattedValue = value && parseFloat(value).toFixed(2);
    return `${hideCurrency ? "" : "R$ "}${formatNumber(formattedValue)}`;
  } catch (err) {
    return "R$ 0,00";
  }
};

/**
 * It takes a cellphone number as a string, removes all special characters, and then adds the country
 * code to the beginning of the string
 * @param {string} cellphone - string
 */
export const insertCountryCode = (cellphone: string) =>
  `55${removeSpecialChars(cellphone)}`;

/**
 * It takes a cellphone number as a string, removes the first two characters, and returns the remaining
 * characters as a string
 * @param {string} cellphone - string
 */
export const removeCountryCode = (cellphone: string) =>
  cellphone.substr(2, cellphone.length);

/**
 * It replaces all digits, leading and trailing whitespace, multiple whitespace, and non-word
 * characters with an empty string
 * @param {string} str - string - the string to be processed
 */
export const keepOnlyLettersAndSpaces = (str: string) =>
  str &&
  str
    .replace(/\d+|^\s+$/g, "")
    .replace(/\s+/g, " ")
    .replace(/[^\w\s]/gi, "");
