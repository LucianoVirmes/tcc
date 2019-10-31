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

    async verificarConexao(portName) {
        const conectado = await new Promise(function (resolve, reject) {
            SerialPort.list((err, ports) => {
                resolve(ports.some(port => port.comName === portName));
            });
        });
        return conectado;
    }

}