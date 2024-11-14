/* Return an object that has two methods called `increment` and `decrement`. 
    `increment` should increment a counter variable in closure scope and return it. 
    `decrement` should decrement the counter variable in closure scope and return it. */
console.log("### MY COUNTER FACTORY ###");
function counterFactory() {
    let counter = 0;
    return {
        increment: function () {
            counter++;
            return counter;
        },
        decrement: function () {
            counter--;
            return counter;
        }
    }
}
const myCounter = counterFactory();
console.log("Increment:", myCounter.increment());
console.log("Increment:", myCounter.increment());
console.log("Decrement:", myCounter.decrement());
console.log("Decrement:", myCounter.decrement());

/**
 * Should return a function that invokes `cb`. The returned function should only allow `cb` to be invoked `n` times.
    Returning null is acceptable if cb can't be returned
 */
console.log("\n### MY LIMIT FUNCTION CALL COUNT ###", "LIMIT IS TWICE!");
function limitFunctionCallCount(cb, n) {
    return function () {
        if (n > 0) {
            n--;
            return cb();
        } else {
            console.log("Limit for this functions call has been reached.");
            return null;
        }
    };
}
let limitHello = () => "Hello closure";
let limitedHello = limitFunctionCallCount(limitHello, 2);
console.log(limitedHello());
console.log(limitedHello());
console.log(limitedHello());


/**
 * Should return a function that invokes `cb`. A cache (object) should be kept in closure scope.
 * The cache should keep track of all arguments have been used to invoke this function.
 * If the returned function is invoked with arguments that it has already seen, then it should return the cached result and not invoke `cb` again.
 * `cb` should only ever be invoked once for a given set of arguments.
 */
console.log("\n### MY CACHED FUNCTION CALL ###");
function cacheFunction(cb) {
    let cache = {};
    return function (...args) {
        let key = JSON.stringify(args);
        if (cache[key]) {
            console.log("We already know this:");
            return cache[key];
        } else {
            let result = cb(...args);
            cache[key] = result;
            console.log("Stored a pair in cache: key=", key, "value=", result);
            return result;
        }
    };
}
const add = (a, b) => a + b;
let cachedAdd = cacheFunction(add);
console.log("1+2:", cachedAdd(1, 2));
console.log("1+2:", cachedAdd(1, 2)); // This should print the cached result from the first call to cachedAdd(2, 3) and not invoke add again.
console.log("2+3:", cachedAdd(2, 3));
console.log("2+3:", cachedAdd(2, 3)); // This should print the cached result from the first call to cachedAdd(2, 3) and not invoke add again.
console.log("1+2:", cachedAdd(1, 2)); // This should print the cached result from the first call to cachedAdd(1, 2) and not invoke add again.
