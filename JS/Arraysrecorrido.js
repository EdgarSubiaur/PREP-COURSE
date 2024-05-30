var numeros = [1, 2, 3, 4];
numeros.forEach((num) => {
if (num===3){
    console.log(num);
}
});

var masuno = numeros.map((num) =>{
    return num + 1;
});
console.log(masuno);