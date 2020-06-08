// Matchers in Jest
/*
  Jest utilizes matchers to test values in different ways. There are several matchers available and this section will introduce few of the most useful ones like,

    Common Matchers

    Truthiness

    Numbers

    Strings

    Arrays

    Exceptions etc.
*/

// Common Matchers
/*
  Jest uses toBe and toEqual matchers to test a value is with exact equality.

  toBe which uses === to test exact equality.

    test('2 + 2 = 4', () => {
      expect(2 + 2).toBe(4);
    });

  toEqual which recursively checks every field of an object or array.

    test('obj assignment', () => {
      const data = {one: 1};
      data['two'] = 2;
      expect(data).toEqual({one: 1, two: 2});
    });

  Can also test for opposite of a matcher using ***not.toBe***.
*/

// Tests
test("2 + 2 = 4", () => {
  expect(2 + 2).toBe(4);
});

test("obj assignment", () => {
  const data = { one: 1 };
  data["two"] = 2;
  expect(data).toEqual({ one: 1, two: 2 });
});

// Truthiness
/*
  Sometimes you need to differentiate ***undefined***, ***null***, and ***false***, but in some case, no need to treat these differently.

  Here are the helpers that let you be explicit about what you want.

    toBeNull matches only null

    toBeUndefined matches only undefined

    toBeDefined: opposite of toBeUndefined

    toBeTruthy matches anything that an if statement treats as true

    toBeFalsy matches anything that an if statement treats as false
*/
// Tests
test("zero", () => {
  const z = 0;
  expect(z).not.toBeNull();
  expect(z).toBeDefined();
  expect(z).not.toBeUndefined();
  expect(z).not.toBeTruthy();
  expect(z).toBeFalsy();
});

// Matchers for Numbers
/*
  The number can be compared using toBeGreaterThan, toBeGreaterThanOrEqual, toBeLessThan and toBeLessThanOrEqual.

  The toBe and toEqual are equivalent for numbers.

    test('1 + 1', () => {
      const value = 1 + 1;
      expect(value).toBeGreaterThan(3);
    });
    
  Here the test fails, because the sum is not greater than 3.
*/

// Test - Fails Default
test("1 + 1", () => {
  const value = 1 + 1;
  expect(value).toBeGreaterThan(3);
});

// Matchers for floating numbers
/*
  To check equality of the floating point numbers, use toBeCloseTo instead of toEqual. This will avoid the tiny rounding error that occurs while using toEqual.

  test('Checking "toBe"', () => {
    const value = 0.1 + 0.2;
    expect(value).toBe(0.3);//rounding error
    expect(value).toBeCloseTo(0.3); //works.
  });
*/

// Test
test('Checking "toBe"', () => {
  const value = 0.1 + 0.2;
  expect(value).toBe(0.3); //rounding error
  expect(value).toBeCloseTo(0.3); //works.
});

// String Matcher
/*
  You can check strings against regular expressions with toMatch.

  test('There is no "I" in Fresco Play', () => {
    expect('Fresco Play').not.toMatch(/I/);
  });
*/
// Test
test('There is no "I" in Fresco Play', () => {
  expect("Fresco Play").not.toMatch(/I/);
});

// Array Matcher
/*
Jest allows you to check if an array contains a particular item using toContain:
*/
// Test
test('Expects "Johns" in employee Array', () => {
  let employee = [];
  employee = ["Johns", "Liani"];
  expect(employee).toContain("Johns");
});

// Exception Matchers
/*
  Use toThrow, if you want to test that a particular function throws an error when it is called.

  Here is a sample test that shows four different ways of checking if a function throws an Error.
*/
function EmptyCheck() {
  let employee = [];
  if (employee.length === 0) {
    throw new Error("Empty Array");
  }
}
test("Empty check", () => {
  expect(EmptyCheck).toThrow();
  expect(EmptyCheck).toThrow(Error);
  expect(EmptyCheck).toThrow("Empty Array");
  expect(EmptyCheck).toThrow(/Empty/); //uses regexp
});
