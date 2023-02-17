const isInRange = require('./checkRange');

function batteryIsOk(temperature, soc, chargeRate) {
  const checkTemperature = isInRange(temperature, 0, 45);
  const checkSoc = isInRange(soc, 20, 80);
  const checkChargeRate = isInRange(chargeRate, 0, 0.8);


  return {
    temperatureBreach: !checkTemperature,
    socBreach: !checkSoc,
    chargeRateBreach: !checkChargeRate,
  };
}
module.exports = batteryIsOk;
