min = -1;
max = 1;
error=0.0000000000001;

result = solveForX(min, max, error,"bisection");

console.log("result= ", result)

function solveForX(min, max, error , method){
    var Left = error + 1;
    var Right = 0;
    var ave = (min + max) / 2;
    if(method === "bisection"){
        while ( Math.abs(Left-Right)>error){
            Left = catalysis_eq_constant_presure_LHS(ave);
            Right = RHS(ave);
            if (Left>Right){
                max = ave;
            } else {
                min = ave;
            }
            var ave = (min + max) / 2;
        }
    }
    return ave;
}

function RHS(x) {
    return 1.1405
}


function catalysis_eq_constant_presure_LHS(x) {
    // aA + bB <-> cC + dD equimolar with no initial products
    const a = 1;
    const b = 1 / 3;
    const c = 2 / 3;
    const d = 0;
    const i = 0;
    const P = 4; //Bar
    const R = 0.08314; //Bar * L /(Mol * K)
    const T = 450; // K

    SumV = d + c - (a + b);
    Nto = a + b + i;
    Nte = Nto + ((c + d) - (a + b)) * x;
    //   console.log("Pe= ", Pe);
    A = Math.pow((a * (1 - x)) / Nte, a);
    B = Math.pow((b * (1 - x)) / Nte, b);
    C = Math.pow((c * x) / Nte, c);
    D = Math.pow((d * x) / Nte, d);
    return ((C * D) / (A * B)) * Math.pow(P/(R*T), SumV);
}

function catalysis_eq_constant_volume_LHS(x) {
    // aA + bB <-> cC + dD equimolar with no initial products
    const a = 1;
    const b = 1 / 3;
    const c = 2 / 3;
    const d = 0;
    const i = 0;//1 / 3;
    const Po = 4; //Bar

    SumV = d + c - (a + b);
    Nto = a + b + i;
    Nte = Nto + ((c + d) - (a + b)) * x;
    Pe = (Nte / Nto) * Po;
    //   console.log("Pe= ", Pe);
    A = Math.pow((a * (1 - x)) / Nte, a);
    B = Math.pow((b * (1 - x)) / Nte, b);
    C = Math.pow((c * x) / Nte, c);
    D = Math.pow((d * x) / Nte, d);
    return ((C*D) / (A*B)) * Math.pow(Pe, SumV);
}
