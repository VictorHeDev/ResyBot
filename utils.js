const dateParser = (stringDate) => {
  let [month, day, year] = stringDate.split('/').map((x) => Number(x));
  console.log(month, day, year);
  if (checkMonth(month) && month < 10) {
    month = '0' + month.toString();
  }
  if (checkDay(day) && day < 10) {
    day = '0' + day.toString();
  }
  return `${year.toString()}-${month.toString()}-${day.toString()}`;
  // return '2023-1-2';
};

const checkMonth = (month) => {
  if (month < 1 || month > 12) {
    throw new Error('Month is out of range');
  }
  return true;
};

const checkDay = (day) => {
  if (day < 1 || day > 30) {
    throw new Error('Day is out of range');
  }
  return true;
};

const urlCreator = (restaurant, stringDate, seats) => {
  const appendToUrl = `${restaurant}?${dateParser(stringDate)}&seats=${seats}`;
  return `https://resy.com/cities/ny/${appendToUrl}`;
};

module.exports = dateParser;

// function sum(a, b) {
//   return a + b;
// }
// module.exports = sum;
