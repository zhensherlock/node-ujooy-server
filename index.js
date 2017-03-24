/**
 * Created by sunzhenxuan on 2017/3/24.
 */
var serialPort = require("serialport");
serialPort.list(function (err, ports) {
    ports.forEach(function(port) {
        console.log(port.comName);
        console.log(port.pnpId);
        console.log(port.manufacturer);
    });
});