var palabra = 'henri';
var palabraseparada = palabra.split('');
palabraseparada.pop();
palabraseparada.push('y');

var palabraarreglada = palabraseparada.join('');
console.log(palabraarreglada);
