 var dicionario = {'admin':'admin', 'user1':'1234', 'nickname64':'289043'};
 var success = document.getElementById("success");
 var warning = document.getElementById("warning");
 var danger = document.getElementById("danger");

 const botao = document.getElementById("login");
 botao.addEventListener("click",login);

 function login(){
    let user = document.getElementById("user").value;
    let password = document.getElementById("password").value;
    success.classList.add("d-none");
    warning.classList.add("d-none");
    danger.classList.add("d-none");
    if(user=="" || password==""){
      warning.classList.remove("d-none");
    } else{
      if(dicionario[user]){
        if(dicionario[user]==password){
          //alert("Login realizado com sucesso");
          success.classList.remove("d-none");
        } else{
          danger.classList.remove("d-none");
        }
      } else{
        danger.classList.remove("d-none");
      }
    }
 }

