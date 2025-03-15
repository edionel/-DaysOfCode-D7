function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    if (b === 0) {
        return "Error: División por cero";
    }
    return a / b;
}

function potenciar(a, b) {
    return Math.pow(a, b);
}

document.getElementById('sumar').addEventListener('click', function() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const resultado = sumar(num1, num2);
    document.getElementById('resultado').value = `${resultado}`;
});

document.getElementById('restar').addEventListener('click', function() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const resultado = restar(num1, num2);
    document.getElementById('resultado').value = `${resultado}`;
});

document.getElementById('multiplicar').addEventListener('click', function() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const resultado = multiplicar(num1, num2);
    document.getElementById('resultado').value = `${resultado}`;
});

document.getElementById('dividir').addEventListener('click', function() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const resultado = dividir(num1, num2);
    document.getElementById('resultado').value = `${resultado}`;
});

document.getElementById('potenciar').addEventListener('click', function() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const resultado = potenciar(num1, num2);
    document.getElementById('resultado').value = `${resultado}`;
});

document.getElementById('salir').addEventListener('click', function() {
  document.getElementById('num1').value = ""
  document.getElementById('num2').value = ""
  document.getElementById('resultado').value = "Hasta la próxima";
});
