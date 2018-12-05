
// http://mathforcollege.com/nm/mws/gen/08ode/mws_gen_ode_txt_runge2nd.pdf
X0 = 0;
Y0 = 1200;
toObtain = 480; //n
stepSize = 30; //h
method = "Ralston";

result = rk(X0, Y0, toObtain, stepSize, method);
console.log(result[result.length - 1])

function rk(X0, Y0, toObtain, stepSize, method) {
    const y = [Y0];
    const x = [X0];
    let k1;
    let k2;
    if(method =="heun"){
        for (var n = 1; n <= toObtain / stepSize; n++) {
            k1 = toSolve(x[x.length - 1], y[y.length - 1]);
            k2 = toSolve(x[x.length - 1] + stepSize, y[y.length - 1] + k1 * stepSize);
            y.push(y[y.length - 1] + stepSize*(k1 + k2)/2);
        }
        return y;
    } else if (method =="Midpoint"){
        for (var n = 1; n <= toObtain / stepSize; n++) {
            k1 = toSolve(x[x.length - 1], y[y.length - 1]);
            k2 = toSolve(x[x.length - 1] + stepSize/2, y[y.length - 1] + k1 * stepSize/2);
            y.push(y[y.length - 1] + stepSize * k2);
        }
        return y;
    } else if (method == "Ralston") {
        for (var n = 1; n <= toObtain / stepSize; n++) {
            k1 = toSolve(x[x.length - 1], y[y.length - 1]);
            k2 = toSolve(x[x.length - 1] + stepSize*3/4, y[y.length - 1] + k1 * stepSize*3/4);
            y.push(y[y.length - 1] + stepSize * (k1 + 2*k2) / 3);
        }
        return y;
    }
    
}

// y' = x + y 
function toSolve(x, y) {
    // return x+y;
    return -2.2067 * Math.pow(10, -12) * (Math.pow(y, 4) - 81 * Math.pow(10, 8));
}

