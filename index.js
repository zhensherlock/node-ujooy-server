/**
 * Created by sunzhenxuan on 2017/3/24.
 */
var SerialPort = require('serialport');
var port = new SerialPort('COM1',{
    baudrate: 57600
});

port.on('open', function() {
    console.log('COM1 open success');
});

// open errors will be emitted as an error event
port.on('error', function(err) {
    console.log('Error: ', err.message);
});

// SerialPort.list(function (err, ports) {
//     ports.forEach(function(port) {
//         console.log('comName'+port.comName);
//         console.log('pnpId'+port.pnpId);
//         console.log('manufacturer'+port.manufacturer);
//     });
// });
var express = require('express');
var app = express();

var server = require('http').createServer(app);

var io = require('socket.io')(server);

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
    res.sendfile('index.html');
});
io.on('connection', function(client){
    client.on('write', function(data){
        console.log('COM1 write ' + data);
        port.write(data, function(err) {
            if (err) {
                return console.log('Error on write: ', err.message);
            }
        });
    });
    client.on('disconnect', function(){});
});
io.on('error', function(data) {
    console.log("error");
});
server.listen(3000);
