// Recuperar os dados armazenados no localStorage
var viagensData = localStorage.getItem("viagensData");
var viagens = viagensData ? JSON.parse(viagensData) : [];

// Preencher a tabela com os dados das viagens
var tabelaViagens = document.getElementById("tabelaViagens");

viagens.forEach(function (viagem, index) {
    var row = tabelaViagens.insertRow();
    var cellNome = row.insertCell(0);
    var cellDataPagamento = row.insertCell(1);
    var cellValor = row.insertCell(2);
    var cellAcao = row.insertCell(3);

    cellNome.innerHTML = viagem.nome;
    cellDataPagamento.innerHTML = viagem.dataPagamento;
    cellValor.innerHTML = viagem.valor;

    // Adicionar botão para excluir a linha
    var btnExcluir = document.createElement("button");
    btnExcluir.textContent = "Excluir";
    btnExcluir.onclick = function() {
        exibirPromptSenha(index); // Passar o índice da linha
    };
    cellAcao.appendChild(btnExcluir);
});

// Função para exibir prompt de senha
function exibirPromptSenha(index) {
    var senha = prompt("Digite a senha para excluir a viagem:");

    // Verificar a senha (em um ambiente real, a validação deve ocorrer no lado do servidor)
    if (senha === "48596251") {
        limparDados(index);
    } else {
        alert("Senha incorreta. Ação cancelada.");
    }
}

// Função para excluir a linha e atualizar os dados
function limparDados(index) {
    // Remover a viagem do array
    viagens.splice(index, 1);

    // Atualizar o localStorage com o novo array
    localStorage.setItem("viagensData", JSON.stringify(viagens));

    // Recarregar a página para refletir as mudanças na tabela
    location.reload();

    alert("Pagamento excluída com sucesso!");
}
