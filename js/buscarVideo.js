import { conectaApi } from "./conectaApi.js";

import constroiCard from "./mostrarVideos.js";

async function buscarVideo(evento) {

    evento.preventDefault();

    const dadosDePesquisa = document.querySelector("[data-pesquisa]").value;

    const busca = await conectaApi.buscaVideo(dadosDePesquisa);

    const lista = document.querySelector("[data-lista]");

    while(lista.firstChild) {

        lista.removeChild(lista.firstChild);

    }

    busca.forEach(elemento => lista.appendChild(constroiCard(elemento.titulo, elemento.descricao, elemento.url, elemento.imagem)));

    if (busca.length == 0) {

        lista.innerHTML = `<h2 class="mensagem__titulo">Não existem vídeos com esse termo</h2>`;
            
    }

}

const botaoDePesquisa = document.querySelector("[data-botao-pesquisa]");

botaoDePesquisa.addEventListener("click", evento => buscarVideo(evento));

/* //Aula 5.5 Tratando os erros: tratando o erro da função que busca os vídeos

import { conectaApi } from "./conectaApi.js";

import constroiCard from "./mostrarVideos.js";

async function buscarVideo(evento) {

    evento.preventDefault();

    const dadosDePesquisa = document.querySelector("[data-pesquisa]").value;

    const busca = await conectaApi.buscaVideo(dadosDePesquisa);

    const lista = document.querySelector("[data-lista]");

    while(lista.firstChild) {

        lista.removeChild(lista.firstChild);

    }

    busca.forEach(elemento => lista.appendChild(constroiCard(elemento.titulo, elemento.descricao, elemento.url, elemento.imagem)));
    
    // Otro tipo de validação:

    if (busca.length == 0) {
        
        // Valição feita de acordo com o tamanho da lista usando a condicional IF
        // Verificando se o tamanho da lista for igual a ZERO, que seria uma lista que retornou sem nenhum resultado
        // Se essa verificação for verdade, será inserido na UL, no elmento "lista", a mensagem via "innerHTML" informando que não existem vídeos com esse termo.

        lista.innerHTML = `<h2 class="mensagem__titulo">Não existem vídeos com esse termo</h2>`;
            // Caso a busca retorne com uma lista vazia, seria impresso no lugar da lista uma mensagem via "innerHTML"
    }

}

const botaoDePesquisa = document.querySelector("[data-botao-pesquisa]");

botaoDePesquisa.addEventListener("click", evento => buscarVideo(evento));
*/


/* //Aula 4.6 removendo filhos de um pai container

import { conectaApi } from "./conectaApi.js";

import constroiCard from "./mostrarVideos.js";

async function buscarVideo(evento) {

    evento.preventDefault();

    const dadosDePesquisa = document.querySelector("[data-pesquisa]").value;

    const busca = await conectaApi.buscaVideo(dadosDePesquisa);

    const lista = document.querySelector("[data-lista]");

    // lista.innerHTML = '';
        // Outra forma de limpar a lista sem precisar do recurso "While" para excluir filho a filho

    while(lista.firstChild) {
        // Fará um laço de repetição enquanto a condição for verdadeira e ficará executando o bloco de comando
        // A condição é de que enquanto EXISTIR um fristChild, será executado o bloco de comando
        // Ficará apagando o primeiro filho até lista até a lista ficar vazia

        lista.removeChild(lista.firstChild);
            // "lista.removeChild()" Esse comando irá remover o filho da lista
            // No caso, irá remover o primeiro filho da lista "(lista.firstChild)";

        // Ficará nesse looping, removendo o primeiro filho, até que a lista fique vazia
        // Quando a lista estiver vazia, a condição passará a ser falsa, pois não terá mais filhos e, por consequência, o primeiro filho
        // O "while" e o bloco de comando param de executar e vai para o próximo código

    }

    // Depois da lista vazia, será executado o "forEach" para criar a lista com o resultado da busca

    busca.forEach(elemento => lista.appendChild(constroiCard(elemento.titulo, elemento.descricao, elemento.url, elemento.imagem)));
        
    // Só é manipulada a lista do HTML e não a lista da API, então
    // Quando a página é recarregada, é feita o carregamento da páginca que executa
    // a função listaVideo a partir da lista do API, que não sofreu modificação

}

const botaoDePesquisa = document.querySelector("[data-botao-pesquisa]");

botaoDePesquisa.addEventListener("click", evento => buscarVideo(evento));
*/



/* //Aula 4.5 Importanto e reutilizando a função

import { conectaApi } from "./conectaApi.js";

import constroiCard from "./mostrarVideos.js";
    // "import" da função do arquivo "./mostrarVideos.js"
    // Veja que para importar a função é colocado o nome direto da função, não colocando entre as chaves.

async function buscarVideo(evento) {

    evento.preventDefault();

    const dadosDePesquisa = document.querySelector("[data-pesquisa]").value;

    const busca = await conectaApi.buscaVideo(dadosDePesquisa);

    const lista = document.querySelector("[data-lista]");
        // Pega novamente o elemento lista para que ele seja usado e manipulado.
        // Irá guardar nessa constante LOCAL tudo que estiver dentro do elemento "data-lista"
        // Só é manipulada a lista do HTML e não a lista da API, então
        // Quando a página é recarregada, é feita uma nova listagem a partir da lista do API

    busca.forEach(elemento => lista.appendChild(constroiCard(elemento.titulo, elemento.descricao, elemento.url, elemento.imagem)));
        // Para cara elemento encontrado dentro da lista " busca" será executado a função importada "constroiCard" para criar o Card e será feito o "appendChild" para colocá-lo dentro da lista.
        // A lista retorna o objeto com as informações que são necessárias para criar o card de cada vídeo;
        // Essa informações são passadas dentro do parâmetro que chama a função e na ordem dos parâmetos esperados pela função

}

const botaoDePesquisa = document.querySelector("[data-botao-pesquisa]");

botaoDePesquisa.addEventListener("click", evento => buscarVideo(evento));
*/



/* //Aula 4.4 Pegando o termo da pesquisa e conectando com a função que fará a busca

import { conectaApi } from "./conectaApi.js";

async function buscarVideo(evento) {
        // Cria uma Função Assíncrona, pois ela irá executar outra função que fará um "fetch" e que precisa esperar uma promessa 
        // Essa função irá pegar o termo da pesquisa e irá chamar a função "buscaVideo" colocando com parâmentro nessa função o termo pesquisado 

    evento.preventDefault();
        // O chamado irá receber o evento e irá executar o "preventDefault"
        // Irá inibir a ação padrão do envio do formulário aconteça, que é o carregamento da página sem que nada aconteça e seja mostrado algo

    const dadosDePesquisa = document.querySelector("[data-pesquisa]").value;
        // Quando for dado o click no elemento do botão de pesquisa, será executada a função buscarVideo
        // Quando essa função for executada, irá buscar no INPUT do HTML o valor buscado, o termo buscado.

    const busca = await conectaApi.buscaVideo(dadosDePesquisa);
        // A constante "busca" irá  receber a lista JSON com a resultado da busca realizada

    console.log(busca);
        // Verificadno no console.log se retornava o termo buscado no INPUT
}

const botaoDePesquisa = document.querySelector("[data-botao-pesquisa]");
    // A constante "botaoDePesquisa" irá receber o elemento do botão de pesquisa

botaoDePesquisa.addEventListener("click", evento => buscarVideo(evento));
    // Adicioando ao elemento um addEventListener para escutar o evento "click"
    // Quando ele ouvir o click, ele irá executar a função "buscaVideo"
    // A função leva como parâmetro o evento para que possa criar dentro da função que iniba a ação padrão de quando é feita busca 

*/