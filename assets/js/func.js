document.addEventListener("DOMContentLoaded", function() {
  // Carregar o conteúdo do header
  fetch("/my-portfolio/components/header.html")
    .then(response => response.text())
    .then(data => {
      // Inserir o conteúdo no elemento com a classe 'header'
      document.querySelector(".header").innerHTML = data;

      // Após o header ser injetado, adicionar o evento ao botão de modo escuro
      const toggleButton = document.getElementById("toggle-dark-mode");
      toggleButton.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");

        const icon = document.getElementById("toggle-dark-mode");
        if (document.body.classList.contains("dark-mode")) {
          icon.classList.replace("bxs-brightness-half", "bx-brightness-half");
        } else {
          icon.classList.replace("bx-brightness-half", "bxs-brightness-half");
        }
      });
    })
    .catch(error => {
      console.error("Erro ao carregar o header:", error);
    });
});


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