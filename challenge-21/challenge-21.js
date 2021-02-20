(function(window, document){
    'use strict';
    /*
    O desafio de hoje será um pequeno projeto: um cronômetro!
    As regras para criação do cronômetro são as seguintes:
    1. Crie um arquivo index.html e adicione esse script a ele;
    2. Crie um campo `input` do tipo `text`, e inicie-o com um valor 0 (zero).
    Ele será o nosso cronômetro;
    3. Crie 3 botões para as ações do cronômetro: Start, Stop e Reset;
    4. Ao clicar em Start, o valor do campo deve ser incrementado de 1 em 1, a
    cada segundo;
    5. Ao clicar em Stop, o cronômetro deve parar de contar;
    6. Ao clicar em Reset, o cronômetro deve zerar e parar de contar.
    
    Utilize o atributo data-js para nomear o campo e os botões. Você pode
    usar o nome que achar melhor, desde que ele seja semântico, ou seja, o nome
    dado ao elemento HTML deve definir o que o elemento é ou o que ele faz.
    */
    var $cronometro = document.querySelector('[data-js="cronometro"]');
    var $start = document.querySelector('[data-js="start"]');
    var $stop = document.querySelector('[data-js="stop"]');
    var $reset = document.querySelector('[data-js="reset"]');
    var contaTempo;
    $start.addEventListener('click', iniciaCronometro, false); //QUANDO CHAMAR UMA FUNÇÃO EXTERNA, NÃO COLOCAR OS PARENTESIS PARA INVOCAR, POIS SÓ QUEREMOS A EXECUÇÃO DELA A PARTIR DO CLIQUE, PORTANDO SÓ COLOCAMOS O NOME DA FUNÇÃO COMO REFERÊNCIA.
    $stop.addEventListener('click', paraCronometro, false);
    $reset.addEventListener('click', resetaCronometro, false);

    function iniciaCronometro(){
        $start.disabled = true;
        $cronometro.value = +$cronometro.value + 1;
        contaTempo = setTimeout(iniciaCronometro, 1000)
    }

    function paraCronometro(){
        $start.disabled = false;
        clearTimeout(contaTempo);
    }

    function resetaCronometro(){
        paraCronometro();
        $cronometro.value = 0;
    }
})(window, document);