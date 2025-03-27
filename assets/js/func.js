/* script mensagem whatsapp */

function sendToWhatsApp() {
  let message = document.getElementById("message").value.trim();
  let phoneNumber = "5533991414767"; // Substitua pelo seu número (código do país + número)

  if (message === "") {
    Swal.fire({
      icon: "error",
      title: "Mensagem Vazia",
      text: "Digite alguma mensagem antes de enviar!"
    });
    return;
  } else {
    Swal.fire({
      icon: "success",
      title: "Enviando Mensagem..",
      text: "Redirecionando você para o WhatsApp",
      timer: 1500,
    }).then(() => {
      let url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
      window.open(url, "_blank");
    });
  }

}

function erroDisabledButton() {
  Swal.fire({
    icon: "error",
    title: "Indisponível",
    text: "Seção em desenvolvimento!"
  });
}

function successTransition(destino, event) {
  event.preventDefault();

  const linkDestino = event.currentTarget.getAttribute('href');

  Swal.fire({
    title: `Processando.. você será redirecionado para o meu ${destino}`,
    icon: "success",
    draggable: true,
    timer: 2000,
    timerProgressBar: true,
    willClose: () => {

      window.open(linkDestino, '_blank');
    }
  });
}

function successTransitionRecursos(destino, event){
  event.preventDefault();

  const linkDestino = event.currentTarget.getAttribute('href');

  Swal.fire({
    title: `Processando.. você será redirecionado para a página do ${destino}`,
    icon: "success",
    draggable: true,
    timer: 2000,
    timerProgressBar: true,
    willClose: () => {

      window.open(linkDestino, '_blank');
    }
  });
}

/* modal ver mais da aba SOBRE MIM */

// Seleciona todos os botões "Ver mais"
document.querySelectorAll(".btnVerMais").forEach(button => {
  button.addEventListener("click", function() {
    // Acha a modal correspondente ao botão clicado
    const modal = this.closest(".container-fluid").querySelector(".modal");
    if (modal) {
      modal.style.display = "block";
    }
  });
});

// Fecha a modal ao clicar no botão "x"
document.querySelectorAll(".close-btn").forEach(button => {
  button.addEventListener("click", function() {
    this.closest(".modal").style.display = "none";
  });
});

// Fecha a modal ao clicar fora dela
window.addEventListener("click", function(event) {
  document.querySelectorAll(".modal").forEach(modal => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});


