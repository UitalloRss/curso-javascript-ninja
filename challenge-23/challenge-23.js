(function(window, document){
'use strict'    
/*
Vamos desenvolver mais um projeto. A ideia é fazer uma mini-calculadora.
As regras são:

- Deve ter somente 1 input, mas não deve ser possível entrar dados nesse input
diretamente;
- O input deve iniciar com valor zero;
- Deve haver 10 botões para os números de 0 a 9. Cada botão deve ser um número;
- Deve haver 4 botões para as operações principais: soma (+), subtração(-),
multiplicação(x) e divisão(÷);
- Deve haver um botão de "igual" (=) que irá calcular os valores e um botão "CE"
que irá limpar o input, deixando-o com valor 0;

- A cada número pressionado, o input deve atualizar concatenando cada valor
digitado, como em uma calculadora real;
- Ao pressionar um botão com uma das 4 operações, deve aparecer o símbolo da
operação no input. Se o último caractere no input já for um símbolo de alguma
operação, esse caractere deve ser substituído pelo último pressionado.
Exemplo:
- Se o input tem os valores: "1+2+", e for pressionado o botão de
multiplicação (x), então no input deve aparecer "1+2x".
- Ao pressionar o botão de igual, o resultado do cálculo deve ser mostrado no
input;
- Ao pressionar o botão "CE", o input deve ficar zerado.
*/
var $telaCalculadora = document.querySelector('[data-js="tela-calculadora"]');
var $resetaCalculadora = document.querySelector('[data-js="reset"]');
var $numeros = document.querySelectorAll('[data-js="numeros"]');
var $operacoes = document.querySelectorAll('[data-js="operacoes"]');
var $btnigual = document.querySelector('[data-js="igual"]')

Array.prototype.forEach.call($numeros, function(button){
    button.addEventListener('click', handleClick, false);
    console.log(button);
})

Array.prototype.forEach.call($operacoes, function(button){
    button.addEventListener('click', addOperacoes, false);
    console.log(button);
})

$btnigual.addEventListener('click', handleClickEqual, false);

$resetaCalculadora.addEventListener('click', resetaTela, false);

function handleClick(){
    $telaCalculadora.value += this.value;
}

function addOperacoes(){
    $telaCalculadora.value = removeItemSeEleForOperacao($telaCalculadora.value);
    $telaCalculadora.value += this.value;
}

function resetaTela(){
    $telaCalculadora.value = 0;
}

function verificaSeUltimoItemEhOperador(number){
    var operations = ['+', '-', '*', '/'];
    var lastItem = number.split('').pop();
    return operations.some(function(operator){
        return operator === lastItem;
    });
}

function removeItemSeEleForOperacao(number){
    if(verificaSeUltimoItemEhOperador(number)){
        return number.slice(0, -1);
    }
    return number;
}

function handleClickEqual(){
    $telaCalculadora.value = removeItemSeEleForOperacao($telaCalculadora.value);
    var tudoOQueEstaNaTela = $telaCalculadora.value.match(/\d+[+/*-]?/g);
    var resultado = tudoOQueEstaNaTela.reduce(function(acumulado, atual){
        var primeiroValor = acumulado.slice(0, -1);
        var operador = acumulado.split('').pop();
        var outroValor = removeItemSeEleForOperacao(atual);
        var outroOperador = verificaSeUltimoItemEhOperador(atual) ? atual.split('').pop(): '';
        switch(operador){
            case '+':
                return (Number(primeiroValor) + Number(outroValor)) + outroOperador;
            case '-':
                return (Number(primeiroValor) - Number(outroValor)) + outroOperador;
            case '*':
                return (Number(primeiroValor) * Number(outroValor)) + outroOperador;
            case '/':
                return (Number(primeiroValor) / Number(outroValor)) + outroOperador;
        }
    });
    $telaCalculadora.value = resultado;
    console.log(resultado);
}



})(window, document);