const resultado = document.querySelector('.result');
const confirmation = document.querySelector ('.equal');

function insert(value){
    resultado.innerHTML += value;

}

function clean(){
    resultado.innerHTML = '' ;
}

function backspace(){
    if(resultado.textContent){
        let result = document.getElementById('resultado').innerHTML
        resultado.innerHTML = result.substring (0, result.length -1);
    }

}

function confirmButton(){
    if(resultado.textContent != 'Error'){
        document.getElementById("resultado").innerHTML = eval(resultado.innerHTML)
    }
}