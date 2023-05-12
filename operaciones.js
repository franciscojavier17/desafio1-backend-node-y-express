const fs = require('fs');

const registrar = (argumentos) => {
    const content =fs.readFileSync('citas.json');
    const citas = JSON.parse(content)
    citas.push(
        {
            nombre: argumentos[1],
            edad: argumentos[2],
            tipo: argumentos[3],
            color: argumentos[4],
            enfermedad: argumentos[5]
        }
    );
    fs.writeFileSync('citas.json', JSON.stringify(citas));
};

const leer = () => {
    const content = JSON.parse(fs.readFileSync('citas.json', 'utf8'));
    console.log(content);
};

module.exports = { registrar, leer };