const form = document.querySelector(".mensagem");
const inputName = document.querySelector(".name");
const inputEmail = document.querySelector(".email");
const inputPhone = document.querySelector(".phone");
const inputMessage = document.querySelector(".message");
const sendButton = document.querySelector(".button");
const feedback = document.createElement("div");
feedback.className = "feedback";
form.appendChild(feedback);

const sendEmail = async (e) => {
  e.preventDefault();
  sendButton.textContent = "Enviando...";
  sendButton.disabled = true;

  try {
    const fields = {
      name: inputName.value,
      email: inputEmail.value,
      phone: inputPhone.value,
      message: inputMessage.value,
    };

    await emailjs.send(
      "service_k2u650e",
      "template_4e9vgfs",
      fields,
      "FdgsMCh7L-fELlSuP"
    );


    feedback.textContent = "Email enviado com sucesso!";
    feedback.style.color = "green";
    sendButton.textContent = "Enviar";
    sendButton.disabled = false;
    inputName.value = "";
    inputEmail.value = "";
    inputPhone.value = "";
    inputMessage.value = "";

  } catch (error) {

    feedback.textContent = "Erro ao enviar o email. Tente novamente.";
    feedback.style.color = "red";
    sendButton.textContent = "Enviar";
    sendButton.disabled = false;
  }
};

form.addEventListener("submit", sendEmail);
