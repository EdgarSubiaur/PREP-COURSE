var comidas = {};
var diferenciadenotaciones = function (propuno, propdos) {
    comidas[propuno] = ['frutas', 'vegetañes'];
    comidas[propdos] = ['hamburguesa', 'papas fritas'];
};
diferenciadenotaciones('saludable', 'nosaludable');
console.log(comidas);