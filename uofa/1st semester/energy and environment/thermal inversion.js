//m
heightReleased=40;
//ºC/km
airTempChange=3.5;
//ºC/km
pollutantTempChange = -6.5;
//ºC
airTemp=15;
//ºC
pollutantReleaseTemp = 25;

//Km
heightOfPollutant =
  (pollutantReleaseTemp -
    airTemp +
    pollutantTempChange * (-heightReleased / 1000)) /
  (airTempChange - pollutantTempChange);
console.log(heightOfPollutant+ "km");