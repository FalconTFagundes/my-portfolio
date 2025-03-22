document.getElementById("toggle-dark-mode").addEventListener("click", function () {

  document.body.classList.toggle("dark-mode");


  const icon = document.getElementById("toggle-dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    icon.classList.replace("bxs-brightness-half", "bx-brightness-half");
    // salvando a preferência no localStorage
    localStorage.setItem("theme", "dark");
  } else {
    icon.classList.replace("bx-brightness-half", "bxs-brightness-half");

    localStorage.setItem("theme", "light");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const savedTheme = localStorage.getItem("theme");

  // se for "dark", aplica o modo escuro
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    const icon = document.getElementById("toggle-dark-mode");
    icon.classList.replace("bxs-brightness-half", "bx-brightness-half");
  } else {
    // se não for "dark", não aplica
    document.body.classList.remove("dark-mode");
    const icon = document.getElementById("toggle-dark-mode");
    icon.classList.replace("bx-brightness-half", "bxs-brightness-half");
  }
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