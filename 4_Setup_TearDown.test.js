/*
  Sometimes while writing tests, you have some setup work that has to happen before tests run, and you have some finishing work that needs to happen after test run. Jest provides some helper functions to handle this. Some of them are,

    beforeEach and afterEach

    beforeAll and afterAll

    describe
*/

// Repeating Setup for many Tests
/*
If you have some work that needs to do be done frequently for many tests, you can use beforeEach and afterEach functions.
*/

// Example on Repeating Setup
/*
  Consider you have Login tests that interact with the Employee DB.

  Here we have two Login tests, where getData() is called before each test, and clearData() is called after each test.

    beforeEach(()=>{
    getData();
    });
    afterEach(()=>{
    clearData();
    });
    test('John: Logins',()=>{
    expect(Login('John','**pswd**')).toBeTruthy();
    });
    test('Liani: Logins',()=>{
    expect((Login('Liani','**pswd**')).toBeTruthy();
    });
*/

// Onetime Setup
/*
  In some cases, you only need to do setup once, toward the start of a file. This can be particularly annoying when the setup is asynchronous, so you cannot just do it inline. Jest provides beforeAll and afterAll to deal with this circumstance.
*/
// Onetime Setup Example
/*
Consider you write tests for getDetails() and getExperience() which interacts with the Employee DB.

  If both initializeDB and releaseDB returned promises, and the Employee DB could be reused between tests, we can write our test code as:

    beforeAll(()=>{
    return initializeDB();
    });
    afterAll(()=>{
    return releaseDB();
    });
    test('Employee DB has John',()=>{
      expect(checkEmployee('John')).toBeTruthy();
    });
    test('Checks experience of Liani',()=>{
      expect(getExperience('Liani')).toBeGreaterThan('2');
    });
*/

// Scoping
/*
  You can group tests together using a describe block. When they are inside a describe block, the before and after blocks only apply to the tests within that describe block.
*/
// Scoping Example
/*
  For example, let us say we had not just a Cloud database, but also a Local database. We could do a different setup for different tests:

    // Applies to all tests in this file
    beforeAll(() => {
      return initializeCloudDB();
    });
    test('get updates from Cloud', () => {
      expect(isConnected('CloudDB')).toBeTruthy();
    });
    describe('Connecting to local', () => {
      // Applies only to tests in this describe block
      beforeEach(() => {
        return initializeLocalDB();
      });
      test('Updating local with cloud', () => {
        expect(UpdateLocalDB('LocalDB','CloudDB')).toBe(true);
      });
    });
*/

// General Advice
/*
  If a test fails, the first thing that you have to check is whether the test is failing when it is the only test that runs.

  In Jest, it is simple to run only one test - just temporarily change that test command to a test.only:

    test.only('only test that runs', () => {

      expect(true).toBe(false);

    });
*/
