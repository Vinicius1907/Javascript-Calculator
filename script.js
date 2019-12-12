function insertValor(num){
    document.getElementById('visor').value += num;
}

function resetarValor(){
    document.getElementById('visor').value = '';
}

function calculo(){
    let resultado = 0;
    resultado = document.getElementById('visor').value;
    document.getElementById('visor').value = '';
    document.getElementById('visor').value = eval(resultado);
}