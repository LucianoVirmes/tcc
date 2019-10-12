const SerialPort = require('serialport');
const Readline = require('@serialport/parser-readline');
const port = new SerialPort('/dev/ttyUSB0', { baudRate: 9600, autoOpen: false });
const parser = port.pipe(new Readline({ delimiter: '\n' }));

export default class {

    async conectar() {
        port.open();

        const data = await new Promise(function (resolve, reject) {
            parser.on('data', data => {
                resolve(data);
            });
        });
        port.close();
        return data;
    }


    listarPortas() {
        SerialPort.list(function (err, ports) {
            ports.forEach(function (port) {
                console.log(port.comName);
                console.log(port.pnpId);
                console.log(port.manufacturer);
            });
        });
    }

    async verificarConexao(portName) {
        const conectado = await new Promise(function (resolve, reject) {
            SerialPort.list((err, ports) => {
                console.log(portName)
                resolve(ports.some(port => port.comName === portName));
            });
        });
        console.log(conectado)
        return conectado;
    }

}