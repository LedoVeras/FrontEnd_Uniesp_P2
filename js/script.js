

$(document).on('click', '#logout', function () {
    logoutAccount();
});


function logoutAccount(){
    console.log("man")
    setCurrentAccount(null);
    window.location.href = "login.html";
}

