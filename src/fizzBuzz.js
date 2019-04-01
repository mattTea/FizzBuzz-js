function FizzBuzz() {

}

FizzBuzz.prototype.fizzBuzz = function(number) {
  if (number % 3 == 0) {
    return "Fizz";
  } else {
    return number;
  }
}