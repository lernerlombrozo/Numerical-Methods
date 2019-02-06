min = -1;
max = 1;
error=0.00000001;

result = solveForX(min, max, error,"bisection");

console.log(result)

function solveForX(min, max, error , method){
    var Left = error + 1;
    var Right = 0;
    var ave = (min + max) / 2;
    if(method === "bisection"){
        while ( Math.abs(Left-Right)>error){
            Left = LHS(ave)
            Right = RHS(ave)
            if (Left>Right){
                max = ave;
            } else {
                min = ave;
            }
            var ave = (min + max) / 2;
            console.log(ave)
        }
    }
    return ave;
}

function LHS(x){
    //Math.pow(x/(1-x),2)
    // return x * x * x - 3 * x * x - 3 * x - 4
    d=4/3-2/3*x
    return Math.pow((2/3*x/d),2/3)/Math.pow((1/3*(1-x)/d),1/3)/((1-x)/d)/Math.pow((1-1/2*x)*4,2/3)
}

function RHS(x) {
    return 1.1405
    // dHR = 100000;
    // R = 8.314;
    // To = 400;
    // 85* Math.exp(dHR/R*(1/To+100*x+1/To))
}