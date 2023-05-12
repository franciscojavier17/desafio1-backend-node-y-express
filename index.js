const { registrar, leer } = require ('./operaciones.js');
const argumentos = process.argv.slice(2);

if(argumentos[0] != null) {

    if(argumentos[0] === 'registrar') {
        if(argumentos.length === 6 ){
            registrar(argumentos);
        } else {
            tip();
        }
    }

    if(argumentos[0] === 'leer') {
        leer();
    }
}