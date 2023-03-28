import { conectaApi } from "./conectaApi.js";

const lista = document.querySelector("[data-lista]");

export default function constroiCard(titulo, descricao, url, imagem) {

    const video = document.createElement("li");
    video.className = "videos__item";

    video.innerHTML = `
        <iframe width="100%" height="72%" src="${url}"
        title="YouTube video player" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe>
        <div class="descricao-video">
        <img src="${imagem}" alt="logo canal alura">
        <h3>${titulo}</h3>
        <p>${descricao}</p>
        </div>
    `;

    return video;

}

async function listaVideo () {

    try {

        const listaAPi = await conectaApi.listaVideos();

        listaAPi.forEach(elemento => {

            lista.appendChild(constroiCard(elemento.titulo, elemento.descricao, elemento.url, elemento.imagem));
            
        });
    } catch {

        lista.innerHTML = `<h2 class="mensagem__titulo">Não foi possível carregar a lista de vídeo</h2>`

    }

}

listaVideo ();

/* // Aula 5.2 tratando os erros. Tratando o erro da função que  lista os vídeos

import { conectaApi } from "./conectaApi.js";

const lista = document.querySelector("[data-lista]");

export default function constroiCard(titulo, descricao, url, imagem) {

    const video = document.createElement("li");
    video.className = "videos__item";

    video.innerHTML = `
        <iframe width="100%" height="72%" src="${url}"
        title="YouTube video player" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe>
        <div class="descricao-video">
        <img src="${imagem}" alt="logo canal alura">
        <h3>${titulo}</h3>
        <p>${descricao}</p>
        </div>
    `;

    return video;

}

async function listaVideo () {

    try {
        // Vai tentar conectar com a API para tentar imprimir na tela. Se não acontecer, vai entrar no "catch"
            
        const listaAPi = await conectaApi.listaVideos();

        listaAPi.forEach(elemento => {

            lista.appendChild(constroiCard(elemento.titulo, elemento.descricao, elemento.url, elemento.imagem));
            
        });
    } catch {
        // Se não conseguir imprimir na tela, irá dar erro e irá cair no "catch"
        // O "catch" pega o erro e faz algo

        lista.innerHTML = `<h2 class="mensagem__titulo">Não foi possível carregar a lista de vídeo</h2>`

    }

}

listaVideo ();
*/

/*
// Aula 4.5 exportando a função par que ela possa ser reutilizada

import { conectaApi } from "./conectaApi.js";

const lista = document.querySelector("[data-lista]");

export default function constroiCard(titulo, descricao, url, imagem) {
    // Foi inserido o termo "export default" para que essa função possa ser exportada e reutiliza em outros códigos de outros arquivos

    
    const video = document.createElement("li");
    video.className = "videos__item";

    video.innerHTML = `
        <iframe width="100%" height="72%" src="${url}"
        title="YouTube video player" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe>
        <div class="descricao-video">
        <img src="${imagem}" alt="logo canal alura">
        <h3>${titulo}</h3>
        <p>${descricao}</p>
        </div>
    `;

    return video;

}

async function listaVideo () {

    const listaAPi = await conectaApi.listaVideos();

    listaAPi.forEach(elemento => {

        lista.appendChild(constroiCard(elemento.titulo, elemento.descricao, elemento.url, elemento.imagem));
           
    });

}

listaVideo ();
*/



/* // Aula 2.6

import { conectaApi } from "./conectaApi.js";

const lista = document.querySelector("[data-lista]");


//function constroiCard(elemento) {
 function constroiCard(titulo, descricao, url, imagem) {

    const video = document.createElement("li");
    video.className = "videos__item";
    // video.innerHTML = `
    // <iframe width="100%" height="72%" src="${elemento.url}"
    // title="YouTube video player" frameborder="0"
    // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    // allowfullscreen></iframe>
    // <div class="descricao-video">
    // <img src="${elemento.imagem}" alt="logo canal alura">
    // <h3>${elemento.titulo}</h3>
    // <p>${elemento.descricao}</p>
    // </div>
    // `;

    video.innerHTML = `
        <iframe width="100%" height="72%" src="${url}"
        title="YouTube video player" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe>
        <div class="descricao-video">
        <img src="${imagem}" alt="logo canal alura">
        <h3>${titulo}</h3>
        <p>${descricao}</p>
        </div>
    `;

    return video;

}

async function listaVideo () {

    const listaAPi = await conectaApi.listaVideos();

    listaAPi.forEach(elemento => {
        // Depois que a constante "listaApi" receber a lista,
        // O "forEach()" irá criar para cada elemento um card
        // A função constroiCard(elemento) leva como parâmetro o "elemento" para criar um card para ele.

        //lista.appendChild(constroiCard(elemento));
        lista.appendChild(constroiCard(elemento.titulo, elemento.descricao, elemento.url, elemento.imagem));
            // Será criado o card para cada elemento e
            // cada elemento/card será inserido via "appendChild" dentr da lista  
            
    });

}

listaVideo ();
    // Chama a função "listaVideo()" para que ela execute a função que irá inserir os novos vídeos derivados da lista

*/


/* // Aula 2.5

import { conectaApi } from "./conectaApi.js";
    // Importando a variável "conectaApi" do arquivo "conectaApi.js" para ser usado via o arquivo "mostraVideo.js"
    // Agora é possível usar a viriável "conectaApi" e consumir as funções dentro dela.

const lista = document.querySelector("[data-lista]");
    // Estou inserindo na constante "lista" o elemento "lista" do documento HTML onde os "li"s irão ser inseridos

function constroiCard() {
    //Função criada para construir cada card. Cada card é composto pelo vídeo, títul e visualizações

    const video = document.createElement("li");
    video.className = "videos__item";
    video.innerHTML = `
        <iframe width="100%" height="72%" src="https://www.youtube.com/embed/pA-EgOaF23I"
        title="YouTube video player" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe>
        <div class="descricao-video">
        <img src="./img/logo.png" alt="logo canal alura">
        <h3>Qual é o melhor hardware para programação com Mario Souto</h3>
        <p>236 mil visualizações</p>
        </div>
    `;

    return video;

}

async function listaVideo () {
    // É criada uma NOVA função para que quando ela for chamada, seja chamda a função "listaVideos()" do arquivo "conectaApi"
    // A constante "lista" recebará a lista JSON como retorno da função "listaVideos()" do arquivo "conectaApi"
    // Ela precisa ser assíncrona, pois ela precisa esperar o retorno da função do "conectaApi.listaVideo()"

    const listaAPi = await conectaApi.listaVideos();
        // A contante "listaApi" irá receber o retorno Json com a lista
        // A chamada da função tem que ser um processo assíncrono devido a função chamada está fazendo um "fetch"

}
*/
