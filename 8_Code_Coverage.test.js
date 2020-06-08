/*
  Code coverage tests that how much code is covered under tests.

  In contrast to a program with low code coverage, a program with high code coverage in %, has a lower chance of featuring undetected software bugs.

  Jest has built-in code coverage reporter that creates code coverage reports easily using the command,


    jest --coverage

  No additional setup or libraries required!

  Can gather code coverage information from the entire projects, which includes untested files.
*/

// Why Code Coverage ?
/*
  Here we have functions add() and sub() in calc.js and have calc.test.js for the same.

  calc.js

    function add(a, b) { return a + b; }
    function sub(a, b) { return a - b; }
    module.exports = { add: add, sub: sub};
  
  calc.test.js

    const add = require('./add').add;
    test('add:1+2=3',()=>{
      expect(add(1,2)).toBe(3);
    });
    }

  The previous unit test will pass, even if you have not tested the function ***sub()***.

  But the code coverage gives a test coverage of 50% and ensures that your tests are testing your code or not.

  You can use coverage reports to identify critical misses in our unit tests.
*/

// Code Coverage in Continuous Integration
/*
  Consider a large application, where multiple developers are working together, maintaining the code quality and fixing bugs; which is a very tedious task.

  In this scenario, the Code Coverage is the ideal approach to motivate the developers to write more unit tests to avoid the chances of getting errors after integration.

  Ideally, the CI pipeline should have a code coverage target of 100%, that is the entire application code is covered by unit tests.

  The build can be set to fail if the coverage did not match the required threshold.
*/
