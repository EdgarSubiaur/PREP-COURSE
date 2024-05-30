var libro = {autor: 'borges', genero: 'policial', año: '1990'};
var tienepropiedad = libro.hasOwnProperty('autor');
console.log(tienepropiedad);

var todaslaspropiedades = Object.keys(libro);
console.log(todaslaspropiedades);

var mundo = {continentes: 7, paises: 195, oceanos:5};
for (var prop in mundo) {
    console.log('esta es la propiedad:' + prop);
    console.log('este es el valor:' + mundo[prop]);
}

var mascota = {
    animal: 'perro',
    raza: 'boxer',
    amistoso: true,
    dueña: 'olivia',
    info: function () {
        console.log('mi perro es un ' + this.raza);
    },
};

mascota.info();