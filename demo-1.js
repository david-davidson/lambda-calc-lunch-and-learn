// -----------------------------------------------------------------------------
// Church numerals
// -----------------------------------------------------------------------------
const _log = (...args) => {
    console.log(...args);
};

// Not "one," but "once":
ZERO = f => x => x
ONE = f => x => f(x)
TWO = f => x => f(f(x))
THREE = f => x => f(f(f(x)))

// We can easily prove this works:
toNumeral = num => num(val => val + 1)(0)
_log('Church numeral three => JS:', toNumeral(THREE))

// ...Or imagine a different "number reporter":
toPeriods = num => num(val => val + `.`)(``)
_log('Three, alternative reporter:', toPeriods(THREE))

