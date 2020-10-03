const readline = require('readline');
const ln = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

ln.question("Insert expression to calculate:", (expression) => {
    const result = bubbleSort((sanitizeExp(expression).split('')));
    console.log(result);
    ln.close();
});

function sanitizeExp(expression) {
    const regexp = /[^0-9^*\/()\-+.]/g
    return expression.replace(regexp, '');
}

let bubbleSort = (inputArr) => {
    let len = inputArr.length;
    let lastNum ;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (inputArr[j] > inputArr[j + 1]) {
                let tmp = inputArr[j];
                let minVal = tmp.concantenate()
                break;
            }
        }
    }
    return inputArr;
};

calculateMin(val, inputArr)