# Prep Work
Lighthouse Prep-Work Assignments

This repository contains files that pertain to the Lighthouse Labs prepwork assignments.

Assignment 1: Recipe (Html, CSS, JS) - COMPLETE (05/15/2015);

Assignment 2: FizzBuzz (JS) - COMPLETE (05/19/2015);

Assignment 3: Calculator (Ruby) - COMPLETE (05/19/2015);

Assignment 4: Array of String Lengths - COMPLETE (05/19/2015);

Assignment 5: Non-Duplicate Values In An Array - INCOMPLETE;

---

|| ASSIGNMENT #2 [FIZZBUZZ] - BREAKDOWN ||

I created a new function called "fizzBuzz" and gave it a variable of "n".

     function fizzBuzz(n) {

Inside the condition, I created a "for" loop, which starts at 1, ends when "i" is less than or equal to the value "n", and will increase at an interval of 1.

     for (var i = 1; i <= n; i++) {

Two if statements say: "If 'i' is evenly divisible by both 3 and 5, then log "FizzBuzz" into the console. Else, if it's only divisible evenly by 3 (but not also 5), then log "Fizz" into the console.

     if (i % 3 === 0) {
          if (i % 5 === 0) {
               console.log('FizzBuzz');
          } else {
               console.log('Fizz');
          }

Another "else" statement says: "If the number is only evenly divisible by 5 (but not 3), then log 'Buzz' into the console." The last else statement says: "if it is evenly divisible by neither 3 nor 5, then simply log the value of "i" into the console.

    } else if (i % 5 === 0) {
        console.log('Buzz');
    } else {
      console.log(i);
    }

Then I called the "fizzBuzz" function with a value of n = 100 and logged it into the console.


---

|| ASSIGNMENT #4 [ARRAY OF STRING LENGTHS] - BREAKDOWN ||

I created an array, called "test_array", at the top. It contains 2 strings.

I create a new method called "length_finder" with its variable being "test_array":

     def length_finder(test_array)

When this method is called, it will use the .collect! function to replace the current values of "test_array" with the values given by the block:

     test_array.collect!

I could have also used .collect (which would have created a whole new array with the block values) or .map/ .map!.

The block's function is to separate each value of "test_array" and swap it out for "x". Then it will find the ".length" of each value:

      {|x| x.length}

I then ended the method.

When called, this method will return the following:

     "Hello", "Ruby is fun" => [1, 3]
