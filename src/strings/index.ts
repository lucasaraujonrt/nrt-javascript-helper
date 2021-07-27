export const keepOnlyNumbers = (string: string) => string.replace(/\D/g, '');

export const removeSpecialChars = (string: string) => string ? string.replace(/[^A-Za-z0-9]/g, '').replace(/\/s/g, '') : null;

export const formatNumber = (amount: number | string, decimalCount = 2, decimal = ',', thousands = '.') => {
  decimalCount = Math.abs(decimalCount);
  decimalCount = isNaN(decimalCount) ? 2 : decimalCount;
  const NewAmount: number = Number(amount);
  const negativeSign = amount < 0 ? '-' : '';
  const i = parseInt(Math.abs(Number(NewAmount) || 0).toFixed(decimalCount), 10).toString();
  const j = (i.length > 3) ? i.length % 3 : 0;
  return negativeSign + (j ? i.substr(0, j) + thousands : '')
  + i.substr(j).replace(/(\d{3})(?=\d)/g, `$1${thousands}`) + (decimalCount ? decimal + Math.abs(NewAmount - i).toFixed(decimalCount).slice(2) : '');
};

export const toCurrencyLocale = (value: string, hideCurrency: boolean) => {
  if (!value) return 'R$ 0,00';
  try {
    const formattedValue = value && parseFloat(value).toFixed(2);
    return `${hideCurrency ? '' : 'R$ '}${formatNumber(formattedValue)}`;
  } catch (err) {
    return 'R$ 0,00';
  }
};


export const insertCountryCode = (cellphone: string) => `55${removeSpecialChars(cellphone)}` 

export const removeCountryCode = (cellphone : string) =>  cellphone.substr(2, cellphone.length)

export const keepOnlyLettersAndSpaces = (str: string) => str && str
  .replace(/\d+|^\s+$/g, '')
  .replace(/\s+/g, ' ')
  .replace(/[^\w\s]/gi, '');


  