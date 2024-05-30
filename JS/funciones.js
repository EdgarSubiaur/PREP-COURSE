function CuidadoConElConsoleLog (nombre) {
    console.log (nombre);
    return (nombre);
}

function OtraFuncion() {
    return (
    "El nombre retornado pro la funcion 'CuidadoConElConsoleLog' es: " +
    CuidadoConElConsoleLog('Edgar')
    );
}

function CuidadoConElReturn(nombre) {
    return nombre;
    console.log(nombre);
}
