var mqtt = require('mqtt');
var options = {
  username: 'alice',
  password: 'secret',
};
var client  = mqtt.connect('mqtt://localhost', options);
 
client.on('connect', function () {
  console.log('connected');
  client.subscribe(options.username);
  client.publish(options.username, 'Hello mqtt#' + Math.round(Math.random() * 1000));
});
 
client.on('message', function (topic, message) {
  // message is Buffer
  console.log(message.toString());
  // client.end();
});
