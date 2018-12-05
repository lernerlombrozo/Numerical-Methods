

X0 = 0;
Y0 = 0;
toObtain = 0.5; //n
stepSize = 0.1; //h

result = euler(X0, Y0, toObtain, stepSize);
console.log(result[result.length-1])

function euler(X0, Y0, toObtain, stepSize){
    const y = [Y0];
    const x = [X0];
    for(var n=1; n<=toObtain/stepSize; n++){
        y.push(y[y.length-1] + stepSize * toSolve(x[x.length-1], y[y.length-1]));
        x.push(x[x.length-1] + stepSize);
    }
    return y;
}

// y' = x + y 
function toSolve(x, y){
    // return x+y;
    return 15 - 3*y;
}

