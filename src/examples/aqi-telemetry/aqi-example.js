//Includes
var overlayliveDevice = require('overlaylive-device-library');
var config = require('./device-config.js');


// 1. Setup the manager
var manager = new overlayliveDevice(config);


// 2. Describe used sensors - load them from array definition
manager.declareSensors([{
  'name': 'Temperature',
  'channel': 'channel_temperature',
  'unit': 'C'
}, {
  'name': 'Humidity',
  'channel': 'channel_humidity',
  'unit': '%'
}])



// 3. Connect to the Overlay.live platform
manager.start().then(function(){
  // Setup sensor watchs here
  setInterval(function() {
    console.log("Loooop");

  }, 500);
});
