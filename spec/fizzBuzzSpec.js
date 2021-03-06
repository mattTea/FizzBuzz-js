// Print the numbers from 1 to 100
// If a number is divisible by 3 print "Fizz" instead
// If a number is divisible by 5 print "Buzz" instead
// If a number is divisible by 3 and 5 print "FizzBuzz" instead

describe("fizzBuzz", function(){
  
  it("returns 'Fizz' when passed 3", function() {
    expect(fizzBuzz(3)).toEqual("Fizz");
  });

  it("returns '1' when passed 1", function() {
    expect(fizzBuzz(1)).toEqual(1);
  });

  it("returns 'Fizz' when passed multiple of 3", function() {
    expect(fizzBuzz(6)).toEqual("Fizz");
  });

  it("returns 'Buzz' when passed 5", function() {
    expect(fizzBuzz(5)).toEqual("Buzz");
  });

  it("returns 'FizzBuzz' when passed a number that is a multiple of 3 and 5", function() {
    expect(fizzBuzz(15)).toEqual("FizzBuzz");
  });
});
