/**
 * Created by sunzhenxuan on 2017/3/24.
 */
var SerialPort = require('serialport');
var port = new SerialPort('/dev/tty-usbserial1',{
    baudrate: 57600
});

port.on('open', function() {
    port.write('main screen turn on', function(err) {
        if (err) {
            return console.log('Error on write: ', err.message);
        }
        console.log('message written');
    });
});

// open errors will be emitted as an error event
port.on('error', function(err) {
    console.log('Error: ', err.message);
})


SerialPort.list(function (err, ports) {
    ports.forEach(function(port) {
        console.log('comName'+port.comName);
        console.log('pnpId'+port.pnpId);
        console.log('manufacturer'+port.manufacturer);
    });
});