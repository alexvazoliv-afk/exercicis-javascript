let pi = 3.14;
let a = 2;
//tipus string
let salutacio = "Hello world";

//bolean
let flag = true;

let nada = null;


let suma = pi + a;
let mult = pi * a;
let poten = pi **2;

console.log(poten);

console.log(typeof flag);


let num = "10";
console.log("La variable num es " + typeof num);
console.log(a + num);

//cast de string a int

let numero = parseInt(10);
console.log("La variable numero es " + typeof numero);

if(pi > 3){
    console.log("Pi es mayor que 3");
}else if(pi > 3.1){
    console.log("Menor a 3,1 ");
    
}else{
    console.log("No es mas grande que 4");
}


let b = 2 + 2;
switch(b){
    case 1:
        console.log("Es igual a 1");
        break;
    case 2:
        console.log("Es igual a 2")
        break;
    case 3:
        console.log("Es igual a 3");
        break;
    case 4:
        console.log("Es igual a 4")
        break;
    default:
        console.log("No corresponde a ninguno de los valores")
}

//operdars ternaris
var vocal = (10<3)? 'a':'b';
console.log(vocal);

for (let k = 0; k < 10; k++){
    console.log(k);
}

for (let k = 0; k < 10; k++) {
    if (k % 2 === 0 && k > 0) {
        console.log(k);
    }
}

for (let k = 0; k < 5; k++) {
    if (k == 1) {
        continue;
    }else{
        console.log(`esto es la k: ${k}`);
    }
    
}

console.log("BREAK");

for (let k = 0; k < 10; k++) {
        console.log(`esto es la k: ${k}`);
        break;
    
}

//bucles
var i = 50;
while (i>0) {
    console.log(i);
    i=i-5;//i=i-1
    
}

//do while
console.log("DO WHILE");
i=-2;
do {
    console.log(i);
    i--;
} while (i>0);

const campNota = document.getElementById("nota");
const botoComprovar = document.getElementById("comprovar");
const resultat = document.getElementById("resultat");

botoComprovar.addEventListener("click", () => {
    const nota = Number(campNota.value);

    if (campNota.value === "" || nota < 0 || nota > 10) {
        resultat.textContent = "Introdueix una nota entre 0 i 10.";
    } else if (nota < 5) {
        resultat.textContent = "Suspès";
    } else if (nota < 7) {
        resultat.textContent = "Aprovat";
    } else if (nota < 9) {
        resultat.textContent = "Notable";
    } else {
        resultat.textContent = "Excel·lent";
    }
});
