const zeroPadding = (number) => {
  if (number < 10) return `0${number}`;

  return number;
};

export const addSecond = (dateString) => {
  const date = new Date(dateString);
  const seconds = date.getSeconds();
  date.setSeconds(seconds + 1);

  return date.toISOString();
};

export const formatDate = (dateString) => {
  const date = new Date(dateString);

  return `${date.getFullYear()}-${zeroPadding(
    date.getMonth() + 1
  )}-${zeroPadding(date.getDate())} ${zeroPadding(
    date.getHours()
  )}:${zeroPadding(date.getMinutes())}`;
};
