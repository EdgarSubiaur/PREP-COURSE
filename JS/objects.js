//Acceder-Asignar
var deportes = {
    conBalon: ['Futbol', 'Basketball', 'Golf'],
    sinBalon: ['Boxeo', 'Surf', 'Trekking'],
 };
 var persona = { nombre: 'Lucas', edad: 26, estudios: { esProgramador: true } };

 persona.nombre = 'martin';
 persona.edad = '32';

 console.log(persona.nombre);
 console.log(persona.edad);

 //Crear-Borrar
 var autos = {};
 autos.marcas = ['ford', 'audi', 'ferrari'];
 delete autos.marcas;
 console.log(autos);

 //Guardar
 var misfunciones = {
    saludar: function () {
        console.log('hola');
    },
 };

 misfunciones.saludar();