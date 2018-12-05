
// http://mathforcollege.com/nm/mws/gen/08ode/mws_gen_ode_txt_runge4th.pdf
X0 = 0;
Y0 = 1200;
toObtain = 480; //n
stepSize = 30; //h
method = "Kutta";

result = rk(X0, Y0, toObtain, stepSize, method);
console.log(result[result.length - 1])

function rk(X0, Y0, toObtain, stepSize, method) {
    const y = [Y0];
    const x = [X0];
    let k1;
    let k2;
    let k3;
    let k4;
    if (method == "Kutta") {
        for (var n = 1; n <= toObtain / stepSize; n++) {
            k1 = toSolve(x[x.length - 1], y[y.length - 1]);
            k2 = toSolve(x[x.length - 1] + stepSize / 3, y[y.length - 1] + (k1 * stepSize) / 3);
            k3 = toSolve(x[x.length - 1] + (stepSize * 2) / 3, y[y.length - 1] - (k1 * stepSize) / 3 + k2 * stepSize);
            k4 = toSolve(x[x.length - 1] + stepSize, y[y.length - 1] + stepSize * (k1 - k2) + k3 * stepSize);
            y.push(y[y.length - 1] + (stepSize * (k1 + 2 * k2 + 2 * k3 + k4)) / 6);
        }
        return y;
    } else if (method == "Runge") {
        for (var n = 1; n <= toObtain / stepSize; n++) {
            k1 = toSolve(x[x.length - 1], y[y.length - 1]);
            k2 = toSolve(x[x.length - 1] + stepSize / 2, y[y.length - 1] + (k1 * stepSize) / 2);
            k3 = toSolve(x[x.length - 1] + stepSize / 2, y[y.length - 1] + (k2 * stepSize) / 2);
            k4 = toSolve(x[x.length - 1] + stepSize, y[y.length - 1] + k3 * stepSize);
            y.push(y[y.length - 1] + (stepSize * (k1 + 3 * k2 + 3 * k3 + k4)) / 8);
        }
        return y;
    }
}

// y' = x + y 
function toSolve(x, y) {
    // return x+y;
    return -2.2067 * Math.pow(10, -12) * (Math.pow(y, 4) - 81 * Math.pow(10, 8));
}
