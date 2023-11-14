// Initialisation de Tabby
const tabs = new Tabby('[data-tabs]');

// Fonction pour ajouter des animations
const addAnimation = (tabContent) => {
    // Supprimer toutes les classes d'animation précédentes
    tabContent.classList.remove('animate__animated', 'animate__fadeIn');


    // Ajouter les classes d'animation
    tabContent.classList.add('animate__animated', 'animate__bounceInRight');
}

// Écouter les changements d'onglet
document.querySelectorAll('[data-tabby-toggle]').forEach(tab => {
    tab.addEventListener('click', (event) => {
        // Trouver le contenu d'onglet correspondant
        const tabContent = document.querySelector(tab.getAttribute('href'));

        // Appliquer l'animation
        addAnimation(tabContent);
        
    });
});

//selection du button contact externe a ul//
const externalTrigger =document.getElementById("ext-btn");
//ajout d'un gestionnaire d'element//
externalTrigger.addEventListener('click', () => {
    //Sélection de l'onglet cible
    const targetContact = document.querySelector('[href="#contact"]');

    //Je simule un clic sur l'onglet ciblé (contact)
    targetContact.click();

    const tabContent = document.querySelector(targetContact.getAttribute('href'));
    //Appliquer l'annimation
    addAnimation(tabContent);
})