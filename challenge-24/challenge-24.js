(function(window, document){
'use strict'
  /*
  Nossa calculadora agora está funcional! A ideia desse desafio é modularizar
o código, conforme vimos na aula anterior. Quebrar as responsabilidades
em funções, onde cada função faça somente uma única coisa, e faça bem feito.

- Remova as duplicações de código;
- agrupe os códigos que estão soltos em funções (declarações de variáveis,
  listeners de eventos, etc);
  - faça refactories para melhorar esse código, mas de forma que o mantenha com a
  mesma funcionalidade.
  */
 
 var $telaCalculadora = document.querySelector('[data-js="tela-calculadora"]');
 var $resetaCalculadora = document.querySelector('[data-js="reset"]');
 var $numeros = document.querySelectorAll('[data-js="numeros"]');
 var $operacoes = document.querySelectorAll('[data-js="operacoes"]');
 var $btnigual = document.querySelector('[data-js="igual"]');

  function inicializar(){
      iniciarEventos();
  }

  function iniciarEventos(){
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
  }

  function handleClick(){
    if($telaCalculadora.value[0] === '0'){
        $telaCalculadora.value = '';
    }
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
      var operations = getOperations();
      var lastItem = number.split('').pop();
      return operations.some(function(operator){
          return operator === lastItem;
      });
  }

  function getOperations(){
      return Array.prototype.map.call($operacoes ,function(operador){
          return operador.value;
      });
  }

  function removeItemSeEleForOperacao(string){
      if(verificaSeUltimoItemEhOperador(string)){
          return string.slice(0, -1);
      }
      return string;
  }

  function handleClickEqual(){
      $telaCalculadora.value = removeItemSeEleForOperacao($telaCalculadora.value);
      var tudoOQueEstaNaTela = $telaCalculadora.value.match(getRegexOperations());
      var resultado = tudoOQueEstaNaTela.reduce(tratamentoDosValores);
      $telaCalculadora.value = resultado;
  }

  function getRegexOperations(){
      return new RegExp('\\d+[' + getOperations().join('') + ']?', 'g');
  }
  
  function calculadora(valor1, valor2, operador){
      switch(operador){
          case '+':
              return Number(valor1) + Number(valor2);
          case '-':
              return Number(valor1) - Number(valor2);
          case '*':
              return Number(valor1) * Number(valor2);
          case '/':
              return Number(valor1) / Number(valor2);
      }
  }

  function tratamentoDosValores(acumulado, atual){
      var primeiroValor = acumulado.slice(0, -1);
      var operador = acumulado.split('').pop();
      var outroValor = removeItemSeEleForOperacao(atual);
      var outroOperador = verificaSeUltimoItemEhOperador(atual) ? atual.split('').pop(): '';
      return calculadora(primeiroValor, outroValor, operador) + outroOperador;
  }

  inicializar();
})(window, document);