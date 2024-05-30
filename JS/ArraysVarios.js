var pintores = ['picaso', 'velazquez', 'van gogh', 'dali'];
var incluyeDali = pintores.includes('dali');
console.log(incluyeDali);

var  numeros = [10, 6, 8, 9];
var Cumplelacondicion = numeros.every((num) => {
    return num > 5;
});
console.log(Cumplelacondicion);