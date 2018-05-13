var overlayliveDevice = require('../../lib/overlaylive-device.js');
//var overlayliveDevice = require('overlaylive-device-library');
var config = require('./device-config.js'); // Load the device configuration
var manager = new overlayliveDevice(config); // Setup the library

manager.declareSensor({
  channel: 'sensor1', // [*] The channel the sensor will publish data
  name: 'Temperature', // [*] The default sensor name
  unit: 'C', // The sensor type (temperature, voltage, etc)
  type: 'Temperature',
  manufacturer: 'Xyala Labs', // The sensor manufacturer
  version: '1.0', // The sensor version
  hardware: '1.0' // Additional hardware informations
});

manager.declareCommand('YOOO', function() {
  // Your device code goes here
  console.log('Hello');
  var computedVar = 'Hello';
  return computedVar;
});


manager.start().then(function(){
  // Setup sensor watchs here
  setInterval(function() {
    // Custom code here to retreive the sensor value
    var temperature = getTemperature();
    console.log('loop');

    // Publish the value to the Overlay.live platform
    manager.publish('sensor1', temperature);

  }, 500);
});

function getTemperature() {
  var max = 90;
  var min = 50;
  return Math.random() * (max - min) + min;
}
