const form = document.querySelector("#form");
const nome = document.querySelector("#nome");
const email = document.querySelector("#email");
const mensagem = document.querySelector("#mensagem");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    if(nome.value === ""){
        alert("Por favor, preencha seu nome")
        return;
    }
    if(email.value === "" || !isEmailValid(email.value)){
        alert("Por favor, preencha seu email")
        return;
    }
    if(mensagem.value === ""){
        alert("Por favor, digite a sua mensagem")
        return;
    }

    form.submit();
});

function isEmailValid(email){
    const emailRegex = new RegExp(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-z]{2,}$/
    )

    if(emailRegex.test(email)){
        return true
    }
    return false;
}