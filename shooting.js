// http://mathforcollege.com/nm/mws/gen/08ode/mws_gen_ode_txt_runge4th.pdf
X0 = 5;
Y0 = 0.0038731;
X02 = 8; //sometimes you will have DX0 instead
Y02 = 0.003077; //sometimes you will have DY0 instead
DX0 = X0;
DY0 = (Y02 - Y0)/(X02 - X0);
toObtain = X02; //n
stepSize = 0.75; //h
result = shooting(X0, Y0, DX0, DY0, toObtain, stepSize);
// console.log(result[result.length - 1]);

function shooting(X0, Y0, DX0, DY0, toObtain, stepSize) {
    const y = [Y0];
    const x = [X0];
    const dy = [DY0];
    for (var n = 1; n <= (toObtain-X0) / stepSize; n++) {
        y.push(y[y.length - 1] + stepSize * derivate(x[x.length - 1], dy[dy.length - 1])); //good
        dy.push(dy[dy.length - 1] + stepSize * toSolve(x[x.length - 1], dy[dy.length - 1]));
        x.push(x[x.length - 1] + stepSize);
    }
    // console.log(x)
    // console.log(dy);
    console.log(x)
    return y;
}

//  (d^2y/dx^2) + (1/x)*(dy/dx) - (y/x^2) = 0
//  (dy/dx) = w  -> to solve
//  (dw/dx) + (1/x)*w - (y/x^2) = 0 -> to solve
//  (dw/dx) = - (1/x)*w + (y/x^2) -> to solve

// u
function toSolve(x, y) {
    //  (dw/dx) = - (1/x)*w + (y/x^2) -> to solve
    return -y / x + y / (x * x)
}

//w
function derivate(x, y){
    //  (dy/dx) = w  -> derivative
    return y
}
