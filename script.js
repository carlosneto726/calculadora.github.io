/*
========== Coisas que tem que ter na calculadora ========== 
Somar: ok
Subtrair: ok
Multiplicar: ok
Dividir: ok
Exponenciar: ok
Radicar: 
Modo Cientifico: 
Calcular equações:
Historico: 
Light Mode / Dark Mode:
Label com calculo em tempo real:
*/

var number = document.getElementById("number");

var indexPow
var indexDiv
var indexMul
var indexSub
var indexAdd



function limpar() {
    number.innerHTML = "0";
}

function addChar(num) {
    if (parseInt(number.innerHTML) == 0) {
        number.innerHTML = num.innerHTML
    } else {
        number.innerHTML += num.innerHTML
    }
}

function polarizar() {
    if (number.innerHTML.startsWith("-")) {
        number.innerHTML = number.innerHTML.slice(1);
    } else {
        number.innerHTML = "-" + number.innerHTML;
    }
}

function apagar() {
    if (number.innerHTML === "0" || number.innerHTML.length == 1) {
        number.innerHTML = "0"
    } else {
        number.innerHTML = number.innerHTML.substring(0, number.innerHTML.length - 1)
    }
}


function calcular() {
    var problem = number.innerHTML
    var output

    if (problem.includes("^")) {
        pow = number.innerHTML.split("^");
        output = power(parseFloat(pow[0]), parseFloat(pow[1]));

    } else if (problem.includes("*")) {
        mul = number.innerHTML.split("*");
        output = multiply(parseFloat(mul[0]), parseFloat(mul[1]));

    } else if (problem.includes("/")) {
        div = number.innerHTML.split("/");
        output = divide(parseFloat(div[0]), parseFloat(div[1]));

    } else if (problem.includes("+")) {
        add = number.innerHTML.split("+");
        output = plus(parseFloat(add[0]), parseFloat(add[1]));

    } else if (problem.includes("-")) {
        sub = number.innerHTML.split("-");
        output = subtract(parseFloat(sub[0]), parseFloat(sub[1]));
    }
    number.innerHTML = output

}

// 1º
function power(n1, n2) {
    return n1 ** n2
}

function sqrt(n) {
    return n ** 0.5
}

// 2º
function multiply(n1, n2) {
    return n1 * n2
}

function divide(n1, n2) {
    return n1 / n2
}

// 3º
function plus(n1, n2) {
    return n1 + n2

}

function subtract(n1, n2) {
    return n1 - n2

}
