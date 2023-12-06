//You are given an array of numbers. Your task is to use iteration methods to filter and transform this array.

let numbers = [10, 13, 20, 25, 38, 35, 40];

/*****************************************************************
Part 1: Filtering

Write code to perform the following tasks using the filter method:
Q1) Create a new array containing numbers that are greater than or equal to 25.
Q2) Create a new array containing numbers that are divisible by 5.
******************************************************************/

//Q1:

function greaterthanTwentyFive(x) {
  return x >= 25;
}
console.log(numbers.filter(greaterthanTwentyFive));

//Q2:

function dividedByFive(x) {
  return x % 5 == 0;
}
console.log(numbers.filter(dividedByFive));

/*****************************************************************
Part 2: Mapping

Write code to perform the following tasks using the map method:

Q3) Create a new array that contains each number squared.
Q4) Create a new array that contains each number multiplied by 2.
******************************************************************/
//Q3:
function squaredNum(x) {
  return x * x;
}
console.log(numbers.map(squaredNum));

//Q4:
function squaredNum(x) {
  return x * 2;
}
console.log(numbers.map(squaredNum));
/*****************************************************************
Part 3: Combining Filtering and Mapping

Combine the filter and map methods to perform the following tasks:

Q5) Filter the numbers that are greater than or equal to 20 and then square each of them.
Q6) Filter the numbers that are divisible by 5 and then multiply each of them by 3.
******************************************************************/
//Q5:
function filterAndMap(x) {
  if (x >= 25) {
    return x * x;
  }
}
console.log(numbers.map(filterAndMap).filter(filterAndMap));

//Q6:
function filterAndMapDividableByFive(x) {
  if (x % 5 == 0) {
    return x * 3;
  }
  //   return x % 5 == 0;
}
console.log(
  numbers.map(filterAndMapDividableByFive).filter(filterAndMapDividableByFive)
);
