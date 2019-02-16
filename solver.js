min = 0;
max = 1000000000;
error=0.0000000000001;

result = solveForX(min, max, error);

console.log("result= ", result)

function solveForX(min, max, error , method){
    var Left = error + 1;
    var Right = 0;
    var ave = (min + max) / 2;
        while ( Math.abs(Left-Right)>error){
            Left = LHS(ave);
            Right = RHS(ave);
            if (Left>Right){
                max = ave;
            } else {
                min = ave;
            }
            var ave = (min + max) / 2;
        }
    return ave;
}

function RHS(x) {
    return 9.18 - 3.43 * Math.log10(273.15+7.5)
}

function LHS(x) {
    return Math.log10(Math.log10(x+0.7));
}


function catalysis_eq_constant_LHS(x) {
  return 1.1405;
}

function catalysis_eq_constant_presure_LHS(x) {
    // aA + bB <-> cC + dD equimolar with no initial products
    const a = 1;
    const b = 1 / 3;
    const c = 2 / 3;
    const d = 0;
    const i = 0;
    const P = 4; //Bar

    SumV = d + c - (a + b);
    Nto = a + b + i;
    Nte = Nto + ((c + d) - (a + b)) * x;
    //   console.log("Pe= ", Pe);
    A = Math.pow((a * (1 - x)) / Nte, a);
    B = Math.pow((b * (1 - x)) / Nte, b);
    C = Math.pow((c * x) / Nte, c);
    D = Math.pow((d * x) / Nte, d);
    return ((C * D) / (A * B)) * Math.pow(P, SumV);
}

function catalysis_eq_constant_volume_LHS(x) {
    // aA + bB <-> cC + dD equimolar with no initial products
    const a = 1;
    const b = 1 / 3;
    const c = 2 / 3;
    const d = 0;
    const i = 1 / 3;
    const Po = 4; //Bar

    SumV = d + c - (a + b);
    Nto = a + b + i;
    Nte = Nto + ((c + d) - (a + b)) * x;
    Pe = (Nte / Nto) * Po;
    // console.log("Pe= ", Pe);
    A = Math.pow((a * (1 - x)) / Nte, a);
    B = Math.pow((b * (1 - x)) / Nte, b);
    C = Math.pow((c * x) / Nte, c);
    D = Math.pow((d * x) / Nte, d);
    return ((C*D) / (A*B)) * Math.pow(Pe, SumV);
}
