min = 0;
valueToObtain = 180.172; // can be used for volume in PFR
stepSize = 0.000001;

result = integrate(min, valueToObtain, stepSize);
console.log(result)

function integrate(min, valueToObtain, stepSize) {
  integral = min;
  i=0;
  while (integral < valueToObtain) {
    integral = integral + ((functionToUse(i) + functionToUse(i + stepSize)) / 2) * stepSize;
      i = i + stepSize;
  }
  return i;
}

function functionToUse(x) {
    return reactor_design_assignment_1_question_1(x);
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
    var T = 400 * x + 400; //K
    var k = Math.pow(10, -3) * T; // m3/(mol s)
    var FTotal = FAo * (5 / 2 - x); // mol/s
    var FA = FAo * (1 - x); // mol/s
    var FB = FAo * (1 - x); // mol/s
    var QT = (FTotal * R * T) / P; // m3/s
    var CA = FA / QT; //mol/m^3
    var CB = FB / QT; //mol/m^3
    return (FAo * 1) / (k * CA * CB);
}