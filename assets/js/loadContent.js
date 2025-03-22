document.addEventListener("DOMContentLoaded", function() {
    // Determinar o caminho com base no diretório atual
    const pathToComponents = window.location.pathname.includes("/pages/") ? "../components/" : "components/";

    // Carregar o header
    fetch(pathToComponents + "header.html")
        .then(response => response.text())
        .then(data => {
            document.querySelectorAll(".header").forEach(element => {
                element.innerHTML = data;
            });
        })
        .catch(error => console.error("Erro ao carregar o header:", error));

    // Carregar o footer
    fetch(pathToComponents + "footer.html")
        .then(response => response.text())
        .then(data => {
            document.querySelectorAll(".footer").forEach(element => {
                element.innerHTML = data;
            });
        })
        .catch(error => console.error("Erro ao carregar o footer:", error));
});
