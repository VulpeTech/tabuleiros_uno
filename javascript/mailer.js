const form = document.querySelector(".mensagem")
const inputName = document.querySelector(".name")
const inputEmail = document.querySelector(".email")
const inputPhone = document.querySelector(".phone")
const inputMessage = document.querySelector(".message")
const sendButton = document.querySelector(".button")

const sendEmail = async (e) => {
  e.preventDefault()

  try {
    const fields = {
      name: inputName.value,
      email: inputEmail.value,
      phone: inputPhone.value,
      message: inputMessage.value
    }


    await emailjs.send(
      "service_bkaihbt",
      "template_4e9vgfs",
      fields,
      "FdgsMCh7L-fELlSuP"
    )

    sendButton.classList.toggle("sended")
    inputName.value = ""
    inputEmail.value = ""
    inputPhone.value = ""
    inputMessage.value = ""
    alert("Email enviado com sucesso!")

  } catch (error) {
    alert("Houve um erro ao enviar o email")
  }
}


form.addEventListener("submit", sendEmail)
