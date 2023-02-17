const assert = require('chai').assert;
const batteryIsOk = require('../bms-monitor');

const allIsGood = {temperatureBreach: false, socBreach: false, chargeRateBreach: false};
let result;
describe('Testing', function() {
  it('Everything is Good', function() {
    result = batteryIsOk(25, 70, 0.7);
    assert.deepEqual(result, allIsGood);
  });
});


describe('Temperature', function() {
  // it('Temperature is too low', function() {
  //   result = batteryIsOk(-25, 70, 0.7);
  //   assert.equal(result.temperatureBreach, true);
  // });

  // it('Temperature is too High', function() {
  //   result = batteryIsOk(95, 70, 0.7);
  //   assert.equal(result.temperatureBreach, true);
  // });

  // it('Temperature is fine ', function() {
  //   result = batteryIsOk(15, 70, 0.7);
  //   assert.equal(result.temperatureBreach, false);
  // });

  it('Temperature is fine ', function() {
    result = batteryIsOk(15, 70, 0.7);
    assert.equal(result.temperatureBreach, false);
    result = batteryIsOk(45, 70, 0.7);
    assert.equal(result.temperatureBreach, false);
    result = batteryIsOk(44.9, 70, 0.7);
    assert.equal(result.temperatureBreach, false);
  });
});
