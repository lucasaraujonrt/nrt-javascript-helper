export const formatDate = (date: Date) => {
  const day = (`0${date.getDate()}`).slice(-2);
  const month = (`0${date.getMonth() + 1}`).slice(-2);
  const year = date.getFullYear().toString();

  return `${day}/${month}/${year}`;
};

const months: dateModels.Months[] = [
  {
    name: 'JANEIRO',
    short: 'Jan.',
  },
  {
    name: 'FEVEREIRO',
    short: 'Fev.',
  },
  {
    name: 'MARÇO',
    short: 'Mar.',
  },
  {
    name: 'ABRIL',
    short: 'Abril',
  },
  {
    name: 'MAIO',
    short: 'Maio',
  },
  {
    name: 'JUNHO',
    short: 'Jun.',
  },
  {
    name: 'JULHO',
    short: 'Jul.',
  },
  {
    name: 'AGOSTO',
    short: 'Ago.',
  },
  {
    name: 'SETEMBRO',
    short: 'Set.',
  },
  {
    name: 'OUTUBRO',
    short: 'Out.',
  },
  {
    name: 'NOVEMBRO',
    short: 'Nov.',
  },
  {
    name: 'DEZEMBRO',
    short: 'Dez.',
  },
];

export const formatDateToString = (date: string | null) => {
  const dateObj = new Date(date);
  const day = (`0${dateObj.getUTCDate()}`).slice(-2);
  const month = dateObj.getMonth();

  return `${day} de ${months[month].name?.toLowerCase()}`;
};

export const getFirstAndLastDay = (date: string) => {
  const dateObj = new Date(date);
  const firstDay = new Date(dateObj.getFullYear(), dateObj.getMonth(), 1);
  const lastDay = new Date(dateObj.getFullYear(), dateObj.getMonth() + 1, 0);

  return [firstDay, lastDay];
};