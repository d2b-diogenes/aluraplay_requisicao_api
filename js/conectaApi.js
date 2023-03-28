async function listaVideos() {
    
    const conexao = await fetch("http://localhost:3000/videos");

    const conexaoConvertida = await conexao.json();

    return conexaoConvertida;

}

async function criaVideos(titulo, descricao, url, imagem) {

    const conexao = await fetch("http://localhost:3000/video", {

        method: "POST",

        headers: {
            
            "Content-type": "application/json"

        },
        body: JSON.stringify({

            titulo: titulo,
            descricao: `${descricao} mil visualizações`,
            url: url,
            imagem: imagem

        })
            
    });

    if (!conexao.ok) {

        throw new Error("Não foi possível enviar o vídeo");

    }

    const conexaoConvertida = await conexao.json();

    return conexaoConvertida;

}

async function buscaVideo(termoDaBusca) {

    const conexao = await fetch (`http://localhost:3000/videos?q=${termoDaBusca}`);
    
    const conexaoConvertida = await conexao.json();

    return conexaoConvertida; 

}

export let conectaApi = {

    listaVideos,
    criaVideos,
    buscaVideo

}

/* // Aula 5.2 tratando os erros. Tratando o erro da função que lista os vídeos

async function listaVideos() {
    
    const conexao = await fetch("http://localhost:3000/videos");

    const conexaoConvertida = await conexao.json();

    return conexaoConvertida;

}

async function criaVideos(titulo, descricao, url, imagem) {

    const conexao = await fetch("http://localhost:3000/video", {


        method: "POST",

        headers: {
            
            "Content-type": "application/json"

        },
        body: JSON.stringify({

            titulo: titulo,
            descricao: `${descricao} mil visualizações`,
            url: url,
            imagem: imagem

        })
            
    });

    if (!conexao.ok) {
        // Verifica se a constante "conexao" está OK
        // Caso do conexão NÃO esteja OK, o retorno é FALSO, mas 
        // a EXCLAMAÇÃO tornará a proposição VERDADEIRA para que seja executado o bloco de comando dentro do IF
        // pois se quer que seja criado o ERRO no caso da "conexao" não esteja OK

        throw new Error("Não foi possível enviar o vídeo");
            // Esse código "joga" um ERRO caso da constante "conexao" não esteja OK
            // Essa ERRO é jogado junto um erro dentro dele.

    }

        // Cria/Joga um ERRO para o caso da constente "conexao" não receber a lista da API com a nova lista com o novo item inserido

    const conexaoConvertida = await conexao.json();

    return conexaoConvertida;

}

async function buscaVideo(termoDaBusca) {

    const conexao = await fetch (`http://localhost:3000/videos?q=${termoDaBusca}`);
    
    const conexaoConvertida = await conexao.json();

    return conexaoConvertida; 

}

export let conectaApi = {

    listaVideos,
    criaVideos,
    buscaVideo

}
*/


/* //Aula 4.1 Buscando video na página

async function listaVideos() {
    
    const conexao = await fetch("http://localhost:3000/videos");

    const conexaoConvertida = await conexao.json();

    return conexaoConvertida;

}

async function criaVideos(titulo, descricao, url, imagem) {

    const conexao = await fetch("http://localhost:3000/videos", {

        method: "POST",

        headers: {
            
            "Content-type": "application/json"

        },
        body: JSON.stringify({

            titulo: titulo,
            descricao: `${descricao} mil visualizações`,
            url: url,
            imagem: imagem

        })
            
    });

    const conexaoConvertida = await conexao.json();

    return conexaoConvertida;

}

async function buscaVideo(termoDaBusca) {

    const conexao = await fetch (`http://localhost:3000/videos?q=${termoDaBusca}`);
        // A URL colocada tem uma estrutura para pesquisa, ela irá buscar no banco o tempo buscado
        // "http://localhost:3000/videos" link da URL que aponta para o banco
        // "?" Perguntando para URL
        // "q" A QUERY perguntanda na URL
        // "=" O termo que se está pergunando com a QUERY
    
    const conexaoConvertida = await conexao.json();
        // Converto o retorno para o arquivo JSON

    return conexaoConvertida;
        // Retorno a lista JSON com a lista que retornou da busca 

}

export let conectaApi = {

    listaVideos,
    criaVideos,
    buscaVideo
        //Nova função assíncrona que irá  buscar na lista o termo e irá retornar o(s) vídeo(s) achados com aquele termo

}

// Outras formas de pesquisar
    // http://localhost:3000/usuario?q=Camila
            // Depois da URL "http://localhost:3000/" é preciso acessar o objeto. No caso, "usuario"
            // Depois de acessar o objeto, será possível acessar a lista do objeto e procurar pelo termo "Camila" em qualquer prorpriedade

    // http://localhost:3000/usuario?nome=Camila Fernanda Machado Alves
            // Com esse link será possível entrar na lista de objeto e procurar no valor do propriedade "nome"  do objeto o termo buscado

*/


/* //Aula 3.2

async function listaVideos() {
    
    const conexao = await fetch("http://localhost:3000/videos");

    const conexaoConvertida = await conexao.json();

    return conexaoConvertida;

}

async function criaVideos(titulo, descricao, url, imagem) {
    // A função irá receber as informações para que possa ser enviado via JSON e inserido na lista de vídeos

    const conexao = await fetch("http://localhost:3000/videos", {
        // O método/requisição é o GET quado é olocado apenas o parâmetro obrigatório, a URL dentro do "fetch" e não colocando mais nada
        // Para declarar outros tipos de métodos/requisições é colocar uma vírcula depois da URL e dentro dos parênteses do "fetch" abri chaves e inserir dentro delas as requisições. 
        // Dentr das chaves é passado o objeto que vai conter o método, 

        method: "POST",
            // Dentro dos parênteses é colocado o tipo de método
        headers: {
            // Abre as chaves, pois dentro vai ter um conjunto de configurações
            
            "Content-type": "application/json"
                // O "Content-type" dentro do "headers" serve para especificar o tipo de arquivo que está sendo enviado
                // No caso, "application/json" específica, quando o arquivo recebido é um JSON, no "Content-type" 
        },
        body: JSON.stringify({
            // É colocado os dados que se quer cadastrar nessa requisição
            // É enviado um objeto de valoes em forma String
            // O "JSON.stringfy" vai transformar em uma String para que possa ser enviado

            titulo: titulo,
            descricao: `${descricao} mil visualizações`,
            url: url,
            imagem: imagem
        })
            
    });

    const conexaoConvertida = await conexao.json();

    return conexaoConvertida;

}

export let conectaApi = {

    listaVideos,
    criaVideos
        //Nova função que irá fazer uam conexação API que irá adicionar novos vídeos na lista

}
*/


/* //Aula 2.2

async function listaVideos() {
    // O termo "async" antes da função declara que a função é Assíncrona. 
    // Essa função irá criar e retonar lista com as informações dos vídeos que serão listados

    const conexao = await fetch("http://localhost:3000/videos");
        // Em conjunto com o "async", o "await" irá retornar um promessa que algo irá acontecer enquanto execução do restante do código.
        // A promessa pode ser resolvida ou rejeitada, se for resolvida, irá retronar o que foi buscado no fetch
        // No "fetch" é fornecido uma URL

    //console.log(conexao);
        // A constante recebe as informações da URL, mas não é o arquivo JSON, arquivo necessário para pegar as informações

    const conexaoConvertida = await conexao.json();

    //console.log(conexaoConvertida);
        // A constante recebe um arquivo JSON
        // Um objeto, JSON = JavaScript Object Notation

    return conexaoConvertida;
        // Onde essa função for chamada, irá retornar a lista JSON.

}

    // Vai exportar o que está sendo pedido ali, 
    // vai exportar uma variável chamada "conectaApi" , que vai receber um objeto com uma lista de funções
    // e quando precisa é só chamar a função necessária.

export let conectaApi = {

    listaVideos

}
*/