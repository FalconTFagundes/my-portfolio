document.addEventListener("DOMContentLoaded", function() {
    // carregando o header
    fetch("components/header.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("header").innerHTML = data;
        })
        .catch(error => console.error("Erro ao carregar o header:", error));

    // carregando o footer
    fetch("components/footer.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("footer").innerHTML = data;
        })
        .catch(error => console.error("Erro ao carregar o footer:", error));
});
