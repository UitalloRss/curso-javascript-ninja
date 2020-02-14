/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var variavel = [2, true, 'Uítalo', undefined, 5.87];
/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function retornaArray(variavel){
    return variavel;
}
/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
retornaArray(variavel[1]);
/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function retornaIndiceDeArray(array, indice){
    return array[indice];
}
/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var outroArray = [28, false, 'Pietra', 0, 5.99];
/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
retornaIndiceDeArray(outroArray, 0);
retornaIndiceDeArray(outroArray, 1);
retornaIndiceDeArray(outroArray, 2);
retornaIndiceDeArray(outroArray, 3);
retornaIndiceDeArray(outroArray, 4);

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book(nomeDoLivro){
    var livros = { 
        'Capitães de Areia': {
            quantidadeDePaginas: 253,
            autor: 'Jorge Amado',
            editora: 'Palo Alto'
        },
        'Dom Casmurro': {
            quantidadeDePaginas: 368,
            autor: 'Machado de Assis',
            editora: 'Grandes Obras'
        },
        'Grande Sertão veredas': {
            quantidadeDePaginas: 299,
            autor: 'Guimarães Rosa',
            editora: 'Scipione'
        }

    };

    if (!nomeDoLivro){
        return livros;
    }

    return livros[nomeDoLivro];
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log (book());
/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
console.log ('O livro Capitães de Areia tem ' + book('Capitães de Areia').quantidadeDePaginas + ' páginas!');

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log ('O autor do livro Grande Sertão veredas é ' + book('Grande Sertão veredas').autor + '.');
/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log('o livro Dom Casmurro foi publicado pela editora ' + book('Dom Casmurro').editora + '.');