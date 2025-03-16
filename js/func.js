document.getElementById("toggle-dark-mode").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
    
    const icon = document.getElementById("toggle-dark-mode");
    if (document.body.classList.contains("dark-mode")) {
      icon.classList.replace("bxs-brightness-half", "bx-brightness-half");
    } else {
      icon.classList.replace("bx-brightness-half", "bxs-brightness-half");
    }
  });
  