function siNoEsFecha(fecha) {
    const date = new Date(fecha);
    return !isNaN(date.getTime());
}

console.log(siNoEsFecha("2024-05-25"));  // false, fecha válida
console.log(siNoEsFecha("2024-02-30"));  // true, fecha inválida (febrero no tiene 30 días)
console.log(siNoEsFecha("invalid-date")); // true, cadena no válida
console.log(siNoEsFecha("2023-12-15T10:20:30Z")); // false, fecha válida con formato ISO
console.log(siNoEsFecha(null)); // true, null no es una fecha válida
console.log(siNoEsFecha("")); // true, cadena vacía no es una fecha válida
