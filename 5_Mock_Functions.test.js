// Introduction to Mock Functions
/*
  Mock Functions are simulated functions that mimic the behavior of the real ones by isolating functionality into small, testable units under test.

  Why Mock Functions?
  The real function is complex to incorporate it in a unit testing (Example, your function has many networking calls)

  The result of your function is non-deterministic.
*/

// Different ways to mock functions in Jest
/*
  You can create a mock function with ***jest.fn()***. If no implementation is given, the mock function will return undefined when invoked.

  There are two ways to mock functions in Jest.

  By creating a mock function to use in test code

  By writing a manual mock to override a module dependency.
*/

// Trying a Mock Function
/*
Let us take a simple example that myFun is mocked mockedFun in test.
Test Result will show the mockedFun called message.
*/

function myFun() {
  return "myFun called";
}
test("First Mock Function", () => {
  mockedFun = jest.fn();
  mockedFun.mockImplementation(function () {
    return "mockedFun called";
  });
  console.log(mockedFun());
});

// .mock Property
/*
  All mock functions have the special property called .mock, the place where all information about how the function that has been called is kept.

  These mock members are very useful in tests to assert how these functions get called, or instantiated:
*/
test(".mock property example", () => {
  const mockFn = jest.fn();
  const a = new mockFn();
  console.log(mockFn.mock);
  console.log(mockFn.mock.instances.length); // is 1
});

// Available Mock Methods
/*
  There are many functions related to mock in Jest. Let us check few of them.

    mock.calls

    mock.instances

    mockClear()

    mockReset()

    mockRestore()

    mockImplementation(fn) and mockImplementationOnce(fn)

    mockReturnValue(val) and mockReturnValueOnce(val)
*/

// mock.calls array
/*
  Jest records all calls that have been made during mock function.

  Each call is represented by an array of arguments that were passed during the call.

  For example, a mock function f is called twice, with the arguments f(arg1, arg2), and then with the arguments f(arg3, arg4) would have a mock.calls array like below:

    [ [arg1,arg2],

    [arg3,arg4], ];
*/

// mock.instance Array
/*
  An array that records all the object instances that have been instantiated from the mock function using new.
  Below example has a mock function that has been instantiated twice.
*/
test(".mock property example", () => {
  const mockFn = jest.fn();

  const a = new mockFn();

  const b = new mockFn();

  console.log(mockFn.mock.instances[0] === a); //true

  console.log(mockFn.mock.instances[1] === a); //false
});

// Mock Clear and Mock Reset
/*
  mockClear()
    Resets all information stored in the mockFn.mock.calls and mockFn.mock.instances arrays.

    Useful when you have to clean up a mock's usage data between two assertions.

  mockReset()
    Resets all information stored in the mock, also any inital implementation given.

    Useful when you want to completely restore a mock back to its initial state.
*/

// mockRestore()
/*
  Will Remove the mock and restores the initial implementation.

  Helpful when you have to mock functions in particular test cases and restore the original implementation in others.

  Only works when mock was created with jest.spyOn. Thus you have to take care of restoration yourself when manually assigning jest.fn().
*/

// Mock function implementation
/*
  Function's actual implementations can be mocked in test using,

    mockImplementation(fn) - it allows to change the implementation for testing.

    mockImplementationOnce(fn) - it allows changing the implementation only once in the entire testing process.
*/
// Example
function real() {
  return "real";
}

test("Mock Implementation", () => {
  mocked = jest.fn();

  mocked.mockImplementation(function () {
    return "mocked";
  });

  mocked.mockImplementationOnce(function () {
    return "mocked_once";
  });

  console.log(real()); //real

  console.log(mocked()); //mocked_once

  console.log(mocked(), mocked()); //mocked mocked
});

// Mock Return Values
/*
  Mock functions can be used to inject test values into your code during a test using following functions,

  mockReturnValue(value) returns the value when mock function is called.

  mockReturnValueOnce(value) returns the value only once when mock function is called.
*/
// Examples
test("Mock Returns", () => {
  const myMock = jest.fn();

  myMock
    .mockReturnValueOnce("only once : mocked return ")

    .mockReturnValue("mocked return");

  console.log(myMock()); //only once : mocked return

  console.log(myMock()); //mocked return

  console.log(myMock()); //mocked return
});
