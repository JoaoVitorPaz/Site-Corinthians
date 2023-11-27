var database = require("../database/config")

function autenticar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucao = `
        SELECT usuario.id, usuario.nome, usuario.email, NickName.nickName
        FROM usuario
        LEFT JOIN NickName ON usuario.id = NickName.fkID
        WHERE usuario.email = '${email}' AND usuario.senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function cadastrar(nome, email, nick, senha,) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email,nick, senha);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
    INSERT INTO usuario (nome, email, senha) VALUES ('${nome}', '${email}', '${senha}');
`;

var instrucao2 = `
    INSERT INTO NickName (nickName, fkID) VALUES ('${nick}', ?);
`;

console.log("Executando a instrução SQL de usuário: \n" + instrucao);

return database.executar(instrucao)
    .then((resultadoUsuario) => {

        const idUsuarioInserido = resultadoUsuario.insertId;
        instrucao2 = instrucao2.replace('?', idUsuarioInserido);

        console.log("Executando a instrução SQL de nick: \n" + instrucao2);

        return database.executar(instrucao2);
    })
    .then(() => {
        console.log("Usuário e nick inseridos com sucesso.");
    })
    .catch((erro) => {
        console.error("Erro ao executar as consultas:", erro);
        throw erro;
    });
}




function quiz(pontuacao, idUsuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", pontuacao, idUsuario);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO quiz (pontuação, fkUsuario) VALUES ('${pontuacao}', '${idUsuario}'); 
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


module.exports = {
    autenticar,
    cadastrar,
    quiz
};