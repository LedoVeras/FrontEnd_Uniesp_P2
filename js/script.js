var loginLogoutLink = document.getElementById("loginLogout");
    
if (currentAccount === null) {
  // Se a conta for nula, exibe "Login"
  loginLogoutLink.innerHTML = "Login";
} else {
  // Se a conta não for nula, exibe "Logout"
  loginLogoutLink.innerHTML = "Logout";
}