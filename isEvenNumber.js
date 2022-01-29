const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const isEvenNumber = (number) => {
  return number % 2 == 0;
}

const evenNumbers = numbers.filter(isEvenNumber);