// FOR
var arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
   console.log(arr[i]);
}

function encontrarletrap(string){
   var letras = string.split('');

   for (let i = 0; i < letras.length; i++) {
      if (letras[i] === 'p') {
         console.log('si contiene a p');
      }
   }
}

encontrarletrap('pescado');
encontrarletrap('pendejo')


var arr = [];

while (arr.length < 5) {
   arr.push('BOOM');
}

console.log(arr);
