
//volta para a tela inicial caso na memória ele esteja logado
if(currentAccount == null) {
    alert("você precisa estar logado para acessar contatos")
    window.location.href = "login.html";
}

var contatos = []
var data = localStorage.getItem('contatos')

if (data) {
    contatos = JSON.parse(data);
}


$(document).ready(function() {
    $("#contactForm").submit(function(event) {
        event.preventDefault();

        createContact();
    });
});



function getJson(){
    return {
        nome:  currentAccount["nome"] ,
        email: currentAccount["email"],
        contactText: $("#contact").val()
    };
}

function saveContact(contactJSON) {
    contatos.push(contactJSON)
    localStorage.setItem('contatos', JSON.stringify(contatos));
}

function createContact()
{
    var dadosJSON = getJson();
    console.log(dadosJSON)

    saveContact(dadosJSON);

    alert("Contato enviado com sucesso");
    //window.location.href = "login.html";
}


// Função para adicionar uma nova linha à tabela
function adicionarLinha(nome, email, contato) {
  var tabela = $("#tabela").getElementsByTagName('tbody')[0];
  var novaLinha = tabela.insertRow(tabela.rows.length);
  
  var celulaNome = novaLinha.insertCell(0);
  var celulaEmail = novaLinha.insertCell(1);
  var celulaContato = novaLinha.insertCell(2);
  
  // Adiciona os dados às células
  celulaNome.innerHTML = nome;
  celulaEmail.innerHTML = email;
  celulaContato.innerHTML = contato;
}


// function loginAccount()
// {
//     var dadosJSON = getJson();

//     if(containsEmail(dadosJSON)){
//         var account = getAccountByEmail(dadosJSON.email);
//         if(account.senha === dadosJSON.senha){

//             setCurrentAccount(account)
//             window.location.href = "index.html";
//         }else{
//             alert("Senha incorreta!");
//         }
//     }else {
//         alert("Conta não encontrada");
//     }
// }
