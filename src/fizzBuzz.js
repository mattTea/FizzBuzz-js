function FizzBuzz() {

}

FizzBuzz.prototype.fizzBuzz = function(number) {
// const fizzBuzz = function(number) {
  if (number % 3 == 0 && number % 5 == 0) {
    return "FizzBuzz"
  } else if (number % 3 == 0) {
    return "Fizz";
  } else if (number % 5 == 0) {
    return "Buzz"
  } else {
    return number;
  }
}

// to run -> (1..100).each { |number| puts fizzbuzz(number) }
// in js... 
// let i = 1
// while (i < 101) {
//   console.log(fizzBuzz(i))
//   i++;
// }