module.exports = {
    "parserOptions": {
        "ecmaVersion": 2017
    },
    "env": {
        "es6": true
    },
    plugins: ["lambda-calculus"],
    rules: {
        "lambda-calculus/no-booleans": 2,
        "lambda-calculus/no-numbers": 2
    }
};
