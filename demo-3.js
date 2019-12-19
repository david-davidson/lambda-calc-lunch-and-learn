require("./demo-2.js")

// -----------------------------------------------------------------------------
// Church booleans
// -----------------------------------------------------------------------------

/**
 * How are booleans used? Choosing between different code paths:
 *    `bool ? something : else`
 * Church booleans _encompass_ this logic, doing the work that a ternary or if-
 * statement would usually do.
 */

TRUE = onTrue => onFalse => onTrue
FALSE = onTrue => onFalse => onFalse

toBoolean = bool => bool(true)(false)
console.log("true:", toBoolean(TRUE))
console.log("false:", toBoolean(FALSE))

// -----------------------------------------------------------------------------
// So far, seems kinda trivial. How do we use these things?
// -----------------------------------------------------------------------------
















// !
// Signature: takes a Church boolean...
negate = bool =>
    // ...and returns a new one...
    onTrue =>
        onFalse =>
            bool(onFalse)(onTrue) // ... with args flipped!

console.log("!true:", toBoolean(negate(TRUE)))
console.log("!false:", toBoolean(negate(FALSE)))













// &&
and = bool1 =>
    bool2 =>
        bool1(bool2)(bool1)

/**
 * Why does this work?
 *  - Assume bool1 is true:
 *      It'll call its truthy first arg, so we can return the value of bool2,
 *      which becomes the value of the entire and expression
 *  - Assume bool1 is false:
 *      It'll call its falsey second arg. Cuz this is an and, we want to return
 *      false. We know that bool1 _is_ false, so we can just pass it as the
 *      second arg.
 */

console.log("true && false:", toBoolean(and(TRUE)(FALSE)))
console.log("false && true:", toBoolean(and(FALSE)(TRUE)))
console.log("false && false:", toBoolean(and(FALSE)(FALSE)))
console.log("true && true:", toBoolean(and(TRUE)(TRUE)))












// ||
or = bool1 =>
    bool2 =>
        bool1(bool1)(bool2)

/**
 * Why does this work?
 *  - Assume bool1 is true:
 *      Since one boolean is true, || should return true -- just return bool1,
 *      since we know it's true already
 *  - Assume bool1 is false:
 *      || can still return true if bool2 is true, or false if it's not! So, it
 *      all comes down to bool2 -- just return it directly
 */

console.log("true || false:", toBoolean(or(TRUE)(FALSE)))
console.log("false || true:", toBoolean(or(FALSE)(TRUE)))
console.log("false || false:", toBoolean(or(FALSE)(FALSE)))
console.log("true || true:", toBoolean(or(TRUE)(TRUE)))














// ==
equals = bool1 =>
    bool2 =>
        bool1(bool2)(negate(bool2))

/**
 * Why does this work?
 *  - Assume bool1 is true:
 *      It all comes down to whether bool2 is true as well. Since that's the case,
 *      we can just return bool2 directly
 *  - Assume bool1 is false:
 *      Again, it all comes down to whether bool2: if bool2 is also, false, equals
 *      returns true; if it's true, equals returns false. So, we can return the
 *      opposite of bool2!
 */

console.log("true == false:", toBoolean(equals(TRUE)(FALSE)))
console.log("false == true:", toBoolean(equals(FALSE)(TRUE)))
console.log("false == false:", toBoolean(equals(FALSE)(FALSE)))
console.log("true == true:", toBoolean(equals(TRUE)(TRUE)))
