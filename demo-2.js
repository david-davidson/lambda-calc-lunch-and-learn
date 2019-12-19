require("./demo-1.js")
const _log = (...args) => {
    // console.log(...args);
};

// -----------------------------------------------------------------------------
// Arithmetic
// -----------------------------------------------------------------------------

// Signature: takes a Church numeral...
addOne = num =>
    // ...and returns a new Church numeral:
    f =>
        x => {
            const numSofar = num(f)(x);
            return f(numSofar);
        }
/**
 * Note how this works:
 *  - num(f)(x) evaluates the number (which invokes f num times)
 *  - f(num(f)(x)) invokes f once more
 */

FOUR = addOne(THREE)
_log("From `addOne`, four:", toNumeral(FOUR))










// -----------------------------------------------------------------------------
// Generic addition
// -----------------------------------------------------------------------------

// Signature: takes two Church numerals...
add = num1 =>
    num2 =>
        // ...and returns a new one:
        f =>
            x => {
                const valFromNum2 = num2(f)(x);
                return num1(f)(valFromNum2);
            }
/**
 * Note how this works:
 *  - As before, num2(f)(x) evaluates num2 (which invokes f num2 times)
 *  - ...then, we pass it not to num1, but to num1(f). That is, num2(f)(x)
 *      returns the "x" (initial value) to pass to num1(f)
 */

SEVEN = add(FOUR)(THREE)
_log("From `add`, seven:", toNumeral(SEVEN))











// -----------------------------------------------------------------------------
// Multiplication
// -----------------------------------------------------------------------------

const multiply = num1 =>
    num2 =>
        f =>
            x =>
                num1(num2(f))(x)
/**
 * Note how this works:
 *  - Both num1 and num2 expect their first arg to be a function
 *  - For num2, that first arg is f -- num2(f), _once invoked_, will call f num2
 *      times
 *  - For num1, that first arg is num2(f): _once invoked_, this'll call num2(f)
 *      num1 times, aka call f num1 * num2 times
 *  - Finally, invoking with x kicks the whole thing off
 */

const TWELVE = multiply(FOUR)(THREE)
_log("From `multiply`, twelve:", toNumeral(TWELVE))


// -----------------------------------------------------------------------------
// Subtraction
// -----------------------------------------------------------------------------

// Left as an exercise for the reader ;)
