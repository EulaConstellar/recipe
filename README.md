# Prep Work
Lighthouse Prep-Work Assignments

This repository contains files that pertain to the Lighthouse Labs prepwork assignments.

Assignment 1: Recipe (Html, CSS, JS) - COMPLETE (05/15/2015);

Assignment 2: FizzBuzz (JS) - COMPLETE (05/19/2015);

Assignment 3: Calculator (Ruby) - COMPLETE (05/19/2015);

Assignment 4: Array of String Lengths - INCOMPLETE;

Assignment 5: Non-Duplicate Values In An Array - INCOMPLETE;


ASSIGNMENT #2 [FIZZBUZZ] - BREAKDOWN




ASSIGNMENT #4 [ARRAY OF STRING LENGTHS] - BREAKDOWN

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
