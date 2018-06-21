X-Replacement
========

Given a string, replace all X's with 0's and 1's and return all combinations of that string.

Usage
========

`node replace.js 10X10X0`

returns:
`[ '1001000', '1011000', '1001010', '1011010' ]`

Testing
========

`npm run test`


Time Complexity
========

O(2^n) time, where n is the number of X's we are substituting. Best case: Linear time, if there are no wildcards.
