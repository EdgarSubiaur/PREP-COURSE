function viajar(destino) {
    if (destino === 'Brasil') {
        return('Girar a la izquierda'); 
    } else if (destino === 'Argentina') {
        return('Gire a la derecha');
    } else {
       return('Estamos perdidos');
    }
}

viajar('Brasil');
viajar('Argentina');
viajar('Nada');


function PuedeManejar (edad) {
    if(edad >= 18) {
        console.log(true)
    } else {
        console.log(false)
    }
}

PuedeManejar(5);