// Verificar se há dados previamente armazenados no localStorage
var viagens = localStorage.getItem("viagensData") ? JSON.parse(localStorage.getItem("viagensData")) : [];

function adicionarViagem() {
    var nome = document.getElementById("nome").value;
    var dataPagamento = document.getElementById("dataPagamento").value;
    var valor = document.getElementById("valor").value;

    // Adicionar os dados ao array
    viagens.push({ nome, dataPagamento, valor });

    // Armazenar os dados no localStorage
    localStorage.setItem("viagensData", JSON.stringify(viagens));

    // Limpar os campos do formulário
    document.getElementById("viagemForm").reset();
}

function irParaSegundaPagina() {
    // Redirecionar para a segunda página
    window.location.href = "segundaPagina.html";
}
