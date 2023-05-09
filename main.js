var nombre = "Oscar"

function apellido() {
    console.log("Paz León");
}

console.log(nombre);
apellido();

//Debuger
function restarDos(num){
    return num-2;
}

function calcular(){
    const sumarTotal = 4+5;
    return restarDos(sumarTotal)
}

debugger;
calcular();