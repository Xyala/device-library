var overlayliveDevice = require('../lib/overlaylive-device.js');

// 1. Setup the manager
var manager = new overlayliveDevice();

// 2. Describe used sensors one by one :
manager.declareSensor({
  'name': 'Temperature',
  'channel': 'temperature'
});
manager.declareSensor({
  'name': 'Voltage',
  'channel': 'voltage'
});

// ... or load them from an array definition :
manager.declareSensors([{
  'name': 'Altitude',
  'channel': 'altitude'
}, {
  'name': 'Speed',
  'channel': 'speed'
}])

// 3. Connect to the Overlay.live platform
manager.start().then(function(){
  // Setup sensor watchs here
  setInterval(function() {
    // Custom code here to retreive the sensor value
    var temperature = getTemperature();

    // Publish the value to the Overlay.live platform
    manager.publish('Temperature', temperature);

  }, 500);
});

function getTemperature() {
  var max = 90;
  var min = 50;
  return Math.random() * (max - min) + min;
}