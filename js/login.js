
//volta para a tela inicial caso na memória ele esteja logado
if(currentAccount != null) {
    window.location.href = "index.html";
}


$(document).ready(function() {
    $("#cadastroForm").submit(function(event) {
        event.preventDefault();

        createAccount();
    });
});

$(document).ready(function() {
    $("#loginForm").submit(function(event) {
        event.preventDefault();

        loginAccount();
    });
});


function getJson(){
    return {
        nome:  $("#nome").val(),
        email: $("#email").val(),
        senha: $("#senha").val(),
    };
}

function createAccount()
{
    var dadosJSON = getJson();

    saveAccount(dadosJSON);

    alert("Conta criada com sucesso!");
    window.location.href = "login.html";
}

function loginAccount()
{
    var dadosJSON = getJson();

    if(containsEmail(dadosJSON)){
        var account = getAccountByEmail(dadosJSON.email);
        if(account.senha === dadosJSON.senha){

            setCurrentAccount(account)
            window.location.href = "index.html";
        }else{
            alert("Senha incorreta!");
        }
    }else {
        alert("Conta não encontrada");
    }
}
