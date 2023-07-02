//FORM

let btnEnviarFormulario = document.querySelector("#btnEnviarFormulario")

function enviarForm() {

    let inputName = document.querySelector("#inputName").value
    let inputComment = document.querySelector("#inputComment").value
    let inputEmail = document.querySelector("#inputEmail").value

    const inputNameStr = JSON.stringify(inputName)
    const inputCommentStr = JSON.stringify(inputComment)
    const inputEmailStr = JSON.stringify(inputEmail)

    localStorage.setItem("inputName", inputNameStr)
    localStorage.setItem("inputComment", inputCommentStr)
    localStorage.setItem("inputEmail", inputEmailStr)

    document.querySelector("#inputName").value = ""
    document.querySelector("#inputComment").value = ""
    document.querySelector("#inputEmail").value = ""
}

btnEnviarFormulario.addEventListener('click', function() {
    enviarForm()
});


