/* script mensagem whatsapp */

function sendToWhatsApp() {
  let message = document.getElementById("message").value.trim();
  let phoneNumber = "5533991414767"; // Substitua pelo seu número (código do país + número)
  
  if (message === "") {
      alert("Digite uma mensagem antes de enviar!");
      return;
  }

  let url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
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
      title: `Processando... Em instantes, você será redirecionado para o meu ${destino}`,
      icon: "success",
      draggable: true,
      timer: 2000,
      timerProgressBar: true, 
      willClose: () => {
      
        window.open(linkDestino, '_blank');
      }
    });
  }