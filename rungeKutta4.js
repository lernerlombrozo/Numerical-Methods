
// http://mathforcollege.com/nm/mws/gen/08ode/mws_gen_ode_txt_runge4th.pdf
X0 = 0;
Y0 = 0.56;
toObtain = 100; //n
stepSize = 0.5; //h
method = "Kutta";
economize  = false;

result = rk(X0, Y0, toObtain, stepSize, method, economize);
console.log(result)

function rk(X0, Y0, toObtain, stepSize, method = "Kutta", economize = true) {
    if (economize){
        console.log('eco')
        if (method == "Kutta") {
            return KuttaE(X0, Y0, toObtain, stepSize);  
        } else if (method == "Runge") {
            return RungeE(X0, Y0, toObtain, stepSize)
        }
    } else{
        console.log('!eco')
        if (method == "Kutta") {
            return Kutta(X0, Y0, toObtain, stepSize)
        } else if (method == "Runge") {
            return Runge(X0, Y0, toObtain, stepSize)
        }
    }
}

function Kutta(X0, Y0, toObtain, stepSize){
    const y = [Y0];
    const x = [X0];
    let k1;
    let k2;
    let k3;
    let k4;
    for (var n = 1; n <= toObtain / stepSize; n++) {
        k1 = toSolve(x[x.length - 1], y[y.length - 1]);
        k2 = toSolve(x[x.length - 1] + stepSize / 3, y[y.length - 1] + (k1 * stepSize) / 3);
        k3 = toSolve(x[x.length - 1] + (stepSize * 2) / 3, y[y.length - 1] - (k1 * stepSize) / 3 + k2 * stepSize);
        k4 = toSolve(x[x.length - 1] + stepSize, y[y.length - 1] + stepSize * (k1 - k2) + k3 * stepSize);
        y.push(y[y.length - 1] + (stepSize * (k1 + 2 * k2 + 2 * k3 + k4)) / 6);
        x.push(x[x.length - 1] + stepSize)
    }
    return y;
}

function KuttaE(X0, Y0, toObtain, stepSize) {
    var y = Y0;
    var x = X0;
    let k1;
    let k2;
    let k3;
    let k4;
    for (var n = 1; n <= toObtain / stepSize; n++) {
        k1 = toSolve(x, y);
        k2 = toSolve(x + stepSize / 3, y + (k1 * stepSize) / 3);
        k3 = toSolve(x + (stepSize * 2) / 3, y - (k1 * stepSize) / 3 + k2 * stepSize);
        k4 = toSolve(x + stepSize, y + stepSize * (k1 - k2) + k3 * stepSize);
        y = y + (stepSize * (k1 + 2 * k2 + 2 * k3 + k4)) / 6;
        x = x + stepSize;
    }
    return y;
}

function Runge(X0, Y0, toObtain, stepSize) {
    const y = [Y0];
    const x = [X0];
    let k1;
    let k2;
    let k3;
    let k4;
    for (var n = 1; n <= toObtain / stepSize; n++) {
        k1 = toSolve(x[x.length - 1], y[y.length - 1]);
        k2 = toSolve(x[x.length - 1] + stepSize / 2, y[y.length - 1] + (k1 * stepSize) / 2);
        k3 = toSolve(x[x.length - 1] + stepSize / 2, y[y.length - 1] + (k2 * stepSize) / 2);
        k4 = toSolve(x[x.length - 1] + stepSize, y[y.length - 1] + k3 * stepSize);
        y.push(y[y.length - 1] + (stepSize * (k1 + 3 * k2 + 3 * k3 + k4)) / 8);
        x.push(x[x.length - 1] + stepSize)
    }
    return y;
}

function RungeE(X0, Y0, toObtain, stepSize) {
    var y = Y0;
    var x = X0;
    let k1;
    let k2;
    let k3;
    let k4;
    for (var n = 1; n <= toObtain / stepSize; n++) {
        k1 = toSolve(x, y);
        k2 = toSolve(x + stepSize / 2, y + (k1 * stepSize) / 2);
        k3 = toSolve(x + stepSize / 2, y + (k2 * stepSize) / 2);
        k4 = toSolve(x + stepSize, y + k3 * stepSize);
        y = y + (stepSize * (k1 + 3 * k2 + 3 * k3 + k4)) / 8;
        x = x + stepSize;
    }
    return y;
}

// y' = x + y 
function toSolve(x, y) {
    const t = 393; //K
    const PH2 = 60; //Bar
    const Wcat = 0.75; //Kgcat/m^3iquid
    const KrKh = 16.4 * Math.pow(10, -4) * Math.exp(0.023 * (1 - 393 / t)); //mol/(gcat barH2 min)
    const Kg = 0.4 * Math.exp(Math.pow(8.569, -4) * (1 - 393 / t)); //1/molglucose
    r = (KrKh * Kg * y * PH2) / Math.pow((1 + Kg * y), 3)
    return -Wcat * r
}
