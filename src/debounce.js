/**
 * Debounce is a common technique used in Web Application,
 * in most cases using lodash solution would be a good choice.
 * could you implement your own version of basic debounce()?
 * In case you forgot, debounce(func, delay) will returned a debounced function, which delays the invoke.
 * Here is an example.
 * Before debouncing we have a series of calling like
 * ─ A ─ B ─ C ─ ─ D ─ ─ ─ ─ ─ ─ E ─ ─ F ─ G
 * After debouncing at wait time of 3 dashes
 * ─ ─ ─ ─ ─ ─ ─ ─ D ─ ─ ─ ─ ─ ─ ─ ─ ─ G
 * notes
 * please follow above spec. the behavior might not be exactly the same as lodash.debounce()
 * because window.setTimeout and window.clearTimeout are not accurate in browser environment,
 * they are replaced to other implementation when judging your code.
 * They still have the same interface, and internally keep track of the timing for testing purpose.
 * Something like below will be used to do the test.
*/

function debounce(callbackFn, delayInMS, immediate = false) {
    let intervalID = null;
    let immediatelyCalled = false;
    return function(...args) {
        if (immediate && !immediatelyCalled) {
            callbackFn(this, args);   
            immediatelyCalled = true;
        } else {
            if (intervalID) {
                window.clearTimeout(intervalID); //clear previous interval create a new one
            }

            intervalID = window.setTimeout(() => {
                callbackFn(this, args);
                window.clearTimeout(intervalID);
                intervalID = null;
            }, delayInMS);
        }
    }
}

function printNameAge(name, age) {
    console.log('My name is : ', name, ' and age is : ', age); // passed arguments
    console.log('THIS NAME : ', this.name, ' and THIS AGE ', this.age); // binded this has these arguments
}

const deouncedPrintNameAge = debounce(printNameAge, 4000); //4000ms delay
deouncedPrintNameAge('Name 1', 25);
deouncedPrintNameAge('Name 2', 25);
deouncedPrintNameAge('Name 3', 30);
setTimeout(() => deouncedPrintNameAge('Keshav Kaushik'), 3500);

const contextObject = {
    name: 'Different Name',
    age: 'Different Age',
};

contextObject.printName = debounce(printNameAge, 4000); //4000ms delay
contextObject.printName();