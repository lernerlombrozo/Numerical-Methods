min = -1000;
max = 1000;
error=0.0001;

result = solveForX(min, max, error,"bisection");

console.log(result)

function solveForX(min, max, error , method){
    if(method === "bisection"){
        var ave = (min-max)/2
        LHS(min)
        RHS(min)
    }
}

function LHS(x){
    //Math.pow(x/(1-x),2)
    return x*x*x - 3*x*x - 3*x -4
}

function RHS(x) {
    return 0
    // dHR = 100000;
    // R = 8.314;
    // To = 400;
    // 85* Math.exp(dHR/R*(1/To+100*x+1/To))
}