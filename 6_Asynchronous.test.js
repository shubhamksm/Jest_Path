/*
  The Synchronous Code will wait for first to finish before moving on to another task.

  But, when you execute an Asynchronous Code, it will move on to another task before it finishes.
*/

// Testing Asynchronous Code
/*
  As you test your Asynchronous code, Jest needs to know when the code testing has been completed, before it can move on to different test.

  Common asynchronous patterns are,

    Callbacks

    Promises etc.
*/

// what is Callback Function
/*
  Callback is a function that is passed to another function as a parameter, and the callback function is called inside the function.

  Consider a function fetchData(Callback), which fetches status information and calls callback(status), when it is complete.

  function fetchData(callback) {
    setTimeout(function () {
      callback({status: 'completed'}); 
    }, 2000);
  }
*/

// Callbacks : Asynchronous Tests
/*
  Instead of placing the test in a function with an empty argument, employ a single argument called done.

  Jest will wait until the done callback is called before finishing the test.

    test('fetch data returns status completed', done => {
      function callback(data) {
        expect(data.status).toBe('completed');
        done();
    }
      fetchData(callback);
    });
  
  Above test checks the status of fetchData function. You can also change the status in order to understand the concept better.
*/

// Promises : Asynchronous Tests
/*
If your code uses promises, just return a promise, and Jest will wait for that promise to resolve. The test will fail automatically if the promise is rejected.

Consider the following functions which return promises.
*/
function first() {
  var promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("first");
      resolve("first");
    }, 2000);
  });
  return promise;
}

function second() {
  var promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("second");
      resolve("second");
    }, 2000);
  });
  return promise;
}

test("Promise to be resolved", () => {
  expect(first().then(second)).resolves.toBe("second");
});

/*
If you expect a promise to be rejected use the .rejects matcher. If the promise is fulfilled, the test will automatically fail.
*/

function third() {
  var promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("third");
      reject("error in second");
    }, 2000);
  });
  return promise;
}
test("Promise to be rejected", () => {
  expect(first().then(third)).rejects.toBe("error");
});
