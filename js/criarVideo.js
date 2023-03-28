import { conectaApi } from "../js/conectaApi.js";

const formulario = document.querySelector("[data-formulario]");

async function criarVideo(evento) {

    evento.preventDefault();

    const titulo = document.querySelector("[data-titulo]").value;
    const descricao = Math.floor(Math.random() *10).toString();
    const url = document.querySelector("[data-url]").value;
    const imagem = document.querySelector("[data-imagem]").value;

    try {

        await conectaApi.criaVideos(titulo, descricao, url, imagem);

        window.location.href = "../pages/envio-concluido.html";
        
    }

    catch(e) {
        
        alert(e);

    }

}

formulario.addEventListener("submit", evento => criarVideo(evento));

/* // Aula 5.2 tratando os erros: tratando o erro da função que lista os vídeos

import { conectaApi } from "../js/conectaApi.js";

const formulario = document.querySelector("[data-formulario]");

async function criarVideo(evento) {

    evento.preventDefault();

    const titulo = document.querySelector("[data-titulo]").value;
    const descricao = Math.floor(Math.random() *10).toString();
    const url = document.querySelector("[data-url]").value;
    const imagem = document.querySelector("[data-imagem]").value;

    try {
        // Antes de criar o vídeo é feito o tratamendo para pegar o ERRO

        await conectaApi.criaVideos(titulo, descricao, url, imagem);

        window.location.href = "../pages/envio-concluido.html";
        
    }
        // Para o "catch" funcionar é necessário criar uma verificação para quando o erro ocorrer
        // Quando esse erro ocorrer será "jogado"/"criado" um ERRO para que "catch" possa pegar
        // Para essa Aula, o erro verificado é se há algum erro na constante "conexao", que recebe a lista da API

    catch(e) {
        // Nesse formado o "catch" pega o ERRO e apresente a mensagem que vem do ERRO,
        // Pois o ERRO é inserido dentro do parâmentro
        
        alert(e);
            // Será aberta uma janela de conversação que irá apresentar a mensagem que vem do ERRO via o parâmetro recebido pelo "catch"

    }

    // catch {
    //     // Nesse formado o "catch" pega o ERRO e apresente a mensagem criada dentro do próprio "catch"
        
    //     formulario.innerHTML = `<h2 class="formulario__titulo">Erro ao adicionar o vídeo</h2>`
    //         // Irá aprensentar na tela a mensagem criada dentro do próprio "catch"

    // }

}

formulario.addEventListener("submit", evento => criarVideo(evento));
*/



/* // Aula 3.6 Conectando o formulário com a requisição POST = Capta os dados do fomulário e manda para a API

import { conectaApi } from "../js/conectaApi.js";
    // Faz o "import" da constante conectaApi que têm as funções para serem consumidas
    // do "from" arquivo "conectaApi.js"

const formulario = document.querySelector("[data-formulario]");

async function criarVideo(evento) {
    // A função irá esperar as promossas serem resolvidas da API
    // Por esse motiv, a função precisa também ser declarada como "async" para que a função passe a ser também assíncrona. 

    evento.preventDefault();

    const titulo = document.querySelector("[data-titulo]").value;
    const descricao = Math.floor(Math.random() *10).toString();
    const url = document.querySelector("[data-url]").value;
    const imagem = document.querySelector("[data-imagem]").value;

    await conectaApi.criaVideos(titulo, descricao, url, imagem);
        // Depois de fazer o import do "conectaApi.js",
        // será possível usar as funções que estão dentro da constante Array 
        // Uma das funções dentro do Array é o ".criaVideos"
        // O ".criaVideos" irá executar a função e irá fazer a requisão POST, que irá enviar via JSON os dados recebidos no formulário para a API
        // É preciso colocar o "await" para que espere a respota da promessa chamada pela função importada ".criaVideos"
        // Obs.: É interessante conferir se os parâmetros estão na mesma sequência que a função espera receber cada parâmetro 

    window.location.href = "../pages/envio-concluido.html";
        // Dando um feedback para o usuário saiba que o vídeo foi cadastrado com sucesso.
        // Será redirecionada a página quando o cadastro for concluído com sucesso.

}

formulario.addEventListener("submit", evento => criarVideo(evento));
*/



/* // Aula 3.4 criando a função que irá pegar os valores do formulário ao ser enviado

const formulario = document.querySelector("[data-formulario]");

function criarVideo(evento) {

    evento.preventDefault();
        // O chamado irá receber o evento e irá executar o "preventDefault"
        // irá previnir que a ação padrão do envio do formulário aconteça, que é o carregamento da página e não será possível ver nada

    const url = document.querySelector("[data-url]").value;
    const titulo = document.querySelector("[data-titulo]").value;
    const imagem = document.querySelector("[data-imagem]").value;
        // É colocado o '.value' para que a constante receba o valor do elemento selecionado;
    const descricao = Math.floor(Math.random() *10).toString();
        // A descrição irá receber automaticamente o valor que será mostrando
        // "Math.random()" irá gerar um número aleatório entre 0 e 1, não incluirá o 1, com várias casa decimais.
        // "Math.random() * 10" será multiplicado por 10 para que o valor seja entre 0 e 10, não incluirá o 10.
        // "Math.floor()" irá pegar o resultado de "Math.random() * 10" e irá arredondar para baixo e irá retonar um inteiro

}

formulario.addEventListener("submit", evento => criarVideo(evento));
*/