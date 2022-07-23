function insert (num) {
let numero = document.getElementById('tst-resultado').innerHTML;
document.getElementById('tst-resultado').innerHTML = numero + num;

}

function clean () {
document.getElementById('tst-resultado').innerHTML = "";


}

function back () {
let resultado = document.getElementById('tst-resultado').innerHTML;

document.getElementById('tst-resultado').innerHTML = resultado.substring(0, resultado.length -1);


}


function calcular () {
    let resultado = document.getElementById('tst-resultado').innerHTML;
    if(resultado) {
        document.getElementById('tst-resultado').innerHTML = eval(resultado);
    }
    else {
        document.getElementById('tst-resultado').innerHTML = "Digite um número"

    }
}