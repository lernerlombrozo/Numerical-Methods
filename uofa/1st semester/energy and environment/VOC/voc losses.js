var fuel={
    //Molecular Weight in g/mol
    mw: 120,//8*12+18,
    //Densities in g/L
    density : {
        liquid: 625, //750,
        gas: 5,
    },
    // Vapor pressure in kPa
    vaporPressure: 40,//100,
}
// gasoline expense in L/year
var flue = 60;//250000*365;
//temperature in K
var T= 273+25;
//Gas constant in Pa*m^3/mol*k
const R = 8.314;


// initializing variable
var vaporsPerPeriod = {
    liquid: 0,
    solid: 0,
}
// vapor concentration in g/L
var vaporConcentration=fuel.vaporPressure*fuel.mw/R/T;
console.log("vapor concentration is: ",vaporConcentration, "g/L")

// vapor flue in g/year
vaporsPerPeriod.solid=vaporConcentration*flue;
console.log("vapors: ", vaporsPerPeriod.solid, "g/year");

// vapor flue in L/year
vaporsPerPeriod.liquid = vaporsPerPeriod.solid/fuel.density.liquid;
console.log("vapors: ", vaporsPerPeriod.liquid, "L/year");