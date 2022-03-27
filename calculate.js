function insert (num) { // Função Inserir Texto 
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num   // Insere a String + Parametro
}

function clean () { // Função limpar texto
    document.getElementById('resultado').innerHTML = '' 
}

function back () { // Função Limpar 1 a 1
    var resultado = document.getElementById('resultado').innerHTML
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1); // Substring irá exerce a função de apagar 1 caractere por vez
}

function calcular () { // Função Calcular 
    var resultado = document.querySelector('p#resultado').innerHTML

    if (resultado) {
        document.querySelector('p#resultado').innerHTML =  eval(resultado) // Se houver Numero = Calcular
    }else{
        return null // Se não houver, retorna nulo.
    }
}