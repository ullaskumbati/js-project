console.log("1. [Call Stack] JS Bundle executes: Parsing entry point index.js");

// 1. Macrotask (e.g., simulated network request or lazy load timer)
setTimeout(() => {
  console.log("5. [Macrotask Queue] setTimeout: Initial data fetch callback fires");
}, 0);

// 2. Microtask (e.g., React's internal microtask scheduling or resolved Promise)
Promise.resolve().then(() => {
  console.log("3. [Microtask Queue] Promise.then: React flushes queued state updates");
});

// 3. More Synchronous Code on the Call Stack
console.log("2. [Call Stack] React builds initial Virtual DOM and commits to real DOM");


// CallStack is basically a excution chamber where the code executes in steps whcih is over watched by evenyt loop
// 1 . It executes all single threaded synchronous code if it hits setTimeout(adds it to macrotask queue), if it hits promise.resolve.then()(adds it to microtask queue)
// 2. after executing synchronous single thread code event loop checks microtask queue then it brings it to callstack and exsceutes it.
// 3. after exceuting microtask queue macrotask queue is checked and code in it is brough to call stack through event loop and it is executed

// Here is the exact architectural hierarchy you just mapped out:
// The Browser Engine (The CEO): Takes charge, parses the HTML shell, builds the initial real DOM structure (<div id="root"></div>), and coordinates everything.
// The JavaScript Engine / V8 (The Technical Director): Once the bundle is fetched, V8 steps in, creates the Global Execution Context to set up the environment, and fires up the Call Stack (the execution chamber).
// The Event Loop (The Operations Manager): Assigned to stand guard over the execution chamber, ensuring that synchronous code runs first, followed strictly by the Microtask and Macrotask queues.