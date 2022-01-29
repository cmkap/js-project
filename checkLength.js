const checkLength = (phoneNumber) => {
  return phoneNumber.length <= 10;
};

const filterLongNumbers = (phoneNumbers) => {
  return phoneNumbers.filter(checkLength)
}

const numbers = [
  '1763687364',
  '4763687363',
  '7867867862',
  'aaaaaaaabbbbbbbcccccdddddddd' // this element should be filtered
];

filterLongNumbers(numbers);


filterLongNumbers(['4763687363', '7867867862']); // no number to filter out


filterLongNumbers([])
