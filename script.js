// Fonction pour télécharger le CV
function downloadCV() {
    window.location.href = "cv-hawa.pdf";  // Assurez-vous que le fichier est bien à cet emplacement
}

// Fonction pour télécharger les projets
function downloadProject(type) {
    let files = {
        "html-css": "projets/html-css.zip",
        "javascript": "projets/javascript.zip",
        "php": "projets/php.zip",
        "c": "projets/c.zip"
    };

    if (files[type]) {
        window.location.href = files[type];
    } else {
        alert("Fichier non disponible !");
    }
}

// Effet Smooth Scroll pour une navigation fluide
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});