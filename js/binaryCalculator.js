// Buttons

var btn0 = document.querySelector('#btn0');
var btn1 = document.querySelector('#btn1');
var btnClr = document.querySelector('#btnClr');
var btnEql = document.querySelector('#btnEql');
var btnSum = document.querySelector('#btnSum');
var btnSub = document.querySelector('#btnSub');
var btnMul = document.querySelector('#btnMul');
var btnDiv = document.querySelector('#btnDiv');

// Result Container

var res = document.querySelector('#result-text');

res.innerHTML = '';

// Initializing operator and operaton status
var operator;
var operationFinished = Boolean(false);

// Number and Clear Buttons Functions

btn0.addEventListener('click', function (e) {
    // Render text if operation is unfinished
    if (!operationFinished) res.innerHTML += '0';
})

btn1.addEventListener('click', function (e) {
    // Render text if operation is unfinished
    if (!operationFinished) res.innerHTML += '1';
})

btnClr.addEventListener('click', function (e) {
    // Reseting result and vars
    res.innerHTML = '';
    operator = '';
    operationFinished = false;
})

// Assigning functions to operators

btnSum.addEventListener('click', function (e) {
    // checking if result contaner already has an operator
    var includeSum = Boolean(res.innerHTML.includes('+'));
    var includeSub = Boolean(res.innerHTML.includes('-'));
    var includeDiv = Boolean(res.innerHTML.includes('/'));
    var includeMul = Boolean(res.innerHTML.includes('*'));

    var hasAnything = Boolean(includeDiv || includeMul || includeSub || includeSum);

    if (!hasAnything && !operationFinished && res.innerHTML.length > 0) {
        res.innerHTML += '+';
        operator = '+';
    }
})

btnSub.addEventListener('click', function (e) {
    // checking if result contaner already has an operator
    var includeSum = Boolean(res.innerHTML.includes('+'));
    var includeSub = Boolean(res.innerHTML.includes('-'));
    var includeDiv = Boolean(res.innerHTML.includes('/'));
    var includeMul = Boolean(res.innerHTML.includes('*'));

    var hasAnything = Boolean(includeDiv || includeMul || includeSub || includeSum);

    if (!hasAnything && !operationFinished && res.innerHTML.length > 0) {
        res.innerHTML += '-';
        operator = '-';
    }
})

btnMul.addEventListener('click', function (e) {
    // checking if result contaner already has an operator
    var includeSum = Boolean(res.innerHTML.includes('+'));
    var includeSub = Boolean(res.innerHTML.includes('-'));
    var includeDiv = Boolean(res.innerHTML.includes('/'));
    var includeMul = Boolean(res.innerHTML.includes('*'));

    var hasAnything = Boolean(includeDiv || includeMul || includeSub || includeSum);

    if (!hasAnything && !operationFinished && res.innerHTML.length > 0) {
        res.innerHTML += '*';
        operator = '*';
    }
})

btnDiv.addEventListener('click', function (e) {
    // checking if result contaner already has an operator
    var includeSum = Boolean(res.innerHTML.includes('+'));
    var includeSub = Boolean(res.innerHTML.includes('-'));
    var includeDiv = Boolean(res.innerHTML.includes('/'));
    var includeMul = Boolean(res.innerHTML.includes('*'));

    var hasAnything = Boolean(includeDiv || includeMul || includeSub || includeSum);

    if (!hasAnything && !operationFinished && res.innerHTML.length > 0) {
        res.innerHTML += '/';
        operator = '/';
    }
})

btnEql.addEventListener('click', function (e) {
    // checking if result contaner already has an operator
    var includeSum = Boolean(res.innerHTML.includes('+'))
    var includeSub = Boolean(res.innerHTML.includes('-'))
    var includeDiv = Boolean(res.innerHTML.includes('/'))
    var includeMul = Boolean(res.innerHTML.includes('*'))

    var hasAnything = Boolean(includeDiv || includeMul || includeSub || includeSum)

    if (!operationFinished && hasAnything) {
        // getting operator's index
        var index = res.innerHTML.indexOf(operator)

        // storing data to make operation
        var part1 = res.innerHTML.substr(0, index)
        var part2 = res.innerHTML.substr(index + 1, res.innerHTML.length)

        if (part2.length > 0) {
            // get normal value of binary
    
            var textPart1 = parseInt(part1, 2)
            var textPart2 = parseInt(part2, 2)
    
            // make the operation using eval to replace operator with the operation sign (+, -, /, *)
            var finalResult = eval(`${textPart1} ${operator} ${textPart2}`)
    
            // convert operation result to binary
            var theBest = finalResult.toString(2)
    
            // render result in DOM
            res.innerHTML = theBest
    
            // will force user to use Clear button, blocking additional entries
            operationFinished = true
        }
    }
})
