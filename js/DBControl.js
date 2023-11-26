


var accountsData = [];
var currentAccount = null;

loadDataFromLocalStorage()

function saveAccount(data) {
    // Verifica se o e-mail já está presente nos dados
    var emailExists = containsEmail(data)

    if (!emailExists) {
        // Se o email nao estiver nos dados
        accountsData.push(data);
        saveDataToLocalStorage();
    } else {
        // Se o e-mail estiver nos dados
        console.log("Erro: O e-mail já está registrado.");
    }
}

function getAccounts() {
    loadDataFromLocalStorage();
    return accountsData;
}

// Função para salvar dados no Local Storage
function saveDataToLocalStorage() {
    localStorage.setItem('accountsData', JSON.stringify(accountsData));
}

function setCurrentAccount(account) {
    currentAccount = account
    localStorage.setItem('currentAccount', JSON.stringify(account));
}

// Função para carregar dados do Local Storage
function loadDataFromLocalStorage() {
    console.log(localStorage)
    var storedData = localStorage.getItem('accountsData');
    if (storedData) {
        accountsData = JSON.parse(storedData);
    }
    storedData = localStorage.getItem('currentAccount');
    if (storedData) {
        currentAccount = JSON.parse(storedData);
    }
}



function containsEmail(data){
    return accountsData.some(function(account) {
        return account.email === data.email;
    });
}

function getAccountByEmail(email){
    return accountsData.find(function(account) {
        return account.email === email;
    });
}