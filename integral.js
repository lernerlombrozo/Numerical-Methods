//integrals

min=0;
max=0.59629;
steps=1000;
method="ave";

result=integrate(min, max, steps, method);
console.log(result)

function integrate(min,max,step,method){
    if (["max","min","ave","right","left"].indexOf(method)==-1){
        return('method should be "max", "min", "ave", "right" or "left"')
    }
    step = (max - min) / steps;
    integral=0;
    if (method == "max") {
      for (var i = min; i < max; i = i + step) {
        integral = integral + Math.max(functionToUse(i), functionToUse(i + step)) * step;
      }
      return integral;
    } else if (method == "min") {
      for (var i = min; i < max; i = i + step) {
        integral = integral + Math.min(functionToUse(i), functionToUse(i + step)) * step;
      }
      return integral;
    } else if (method == "ave") {
      for (var i = min; i < max; i = i + step) {
        integral = integral + (functionToUse(i)+ functionToUse(i + step))/2 * step;
      }
      return integral;
    } else if (method == "right") {
        for (var i = min; i < max; i = i + step) {
            integral = integral + functionToUse(i + step)* step;
        }
        return integral;
    } else if (method == "left") {
        for (var i = min; i < max; i = i + step) {
            integral = integral + functionToUse(i) * step;
        }
        return integral;
    }
}

function functionToUse(x){
    return reactor_design_assignment_1_question_4prof(x);
}

function reactor_design_assignment_1_question_1(x) {
    const R = 0.0821 / 1000; //atm * m3/ (mol * K)
    const P = 1; //atm
    const T = 273 + 60; //K
    const FAo = 2; //mol/s
    const k = Math.pow(10, -4) // m3/(mol s)
    var FTotal = FAo * (5 - x); // mol/s
    var FA = FAo * (1 - x); // mol/s
    var FB = FAo * (2 - x); // mol/s
    var QT = FTotal * R * T / P;// m3/s
    var CA = FA / QT; //mol/m^3
    var CB = FB / QT; //mol/m^3
    return FAo * 1 / (k * CA * CB)
}

function reactor_design_assignment_1_question_4(x) {
  const R = 8.314; //Pa*m3/(mol K)
  const P = 100000; //Pa
  const FAo = 40; //mol/s
  var T = 400*x+400; //K
  var k = Math.pow(10, -3) * T; // m3/(mol s)
  var FTotal = FAo * (5/2 - x); // mol/s
  var FA = FAo * (1 - x); // mol/s
  var FB = FAo * (1 - x); // mol/s
  var QT = (FTotal * R * T) / P; // m3/s
  var CA = FA / QT; //mol/m^3
  var CB = FB / QT; //mol/m^3
  return (FAo * 1) / (k * CA * CB);
}