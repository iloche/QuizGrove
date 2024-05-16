// 🍄⭐🍄⭐🍄⭐🍄⭐🍄⭐🍄⭐🍄⭐🍄⭐🍄⭐🍄⭐🍄⭐🍄⭐🍄⭐🍄⭐🍄⭐

// ⭐ // // // // //  Déclaration de variables // // // // // // // // // /🍄

// 🍄⭐🍄⭐🍄⭐🍄⭐🍄⭐🍄⭐🍄⭐🍄⭐🍄⭐🍄⭐🍄⭐🍄⭐🍄⭐🍄⭐🍄⭐


let categoriesWrapper = document.querySelector(".categories"),
    elements = document.querySelectorAll(".hidden")

// 🎀⭐🎀⭐🎀⭐🎀⭐🎀⭐🎀⭐🎀⭐🎀⭐🎀⭐🎀⭐🎀⭐🎀⭐🎀⭐🎀⭐🎀⭐🎀 

// ⭐ // // // // // // // // Fonctions // // // // // // // // // // // // ⭐

// 🎀⭐🎀⭐🎀⭐🎀⭐🎀⭐🎀⭐🎀⭐🎀⭐🎀⭐🎀⭐🎀⭐🎀⭐🎀⭐🎀⭐🎀⭐🎀 

// Liste des catégories
const categories = [
  "Animaux", "Arts", "Cinema", "Culture", "Gastronomie", "Géographie", "Histoire", "Informatique", "Internet", "Litterature", "Loisirs", "Musique", "Sciences", "Sports"
];

// Liste des niveaux de difficulté
const difficulties = ["debutant", "confirme", "expert"];

// Fonction pour récupérer les questions par catégorie et niveau de difficulté
function displayCategories() {
  // Parcourir les catégories et les niveaux de difficulté et récupérer les questions
  categories.forEach(category => {
    difficulties.forEach(difficulty => {
      fetch(`https://api.openquizzdb.org/?key=CMZ7U55A9Q&lang=fr&choice=4&categ=${category}`)
        .then(response => response.json())
        .then(data => {
          // Traitez les données récupérées ici
          console.log(data);
          
          // Vérifie si la catégorie a déjà été affichée
          if (!document.getElementById(category)) {
            categoriesWrapper.innerHTML += 
              `
              <div class="categoriesBox" id="${category}">
                  <h3 class="categoriesName">${category}</h3>
              </div>
              `;
          }
        })
        .catch(error => console.error(`Erreur lors de la récupération des questions`, error));
    });
  });
}

// // Appelez la fonction pour afficher les catégories
// displayCategories();

// easyscroll
function easyscroll(){
  elements.forEach((element, index) => {
      if((window.scrollY + window.innerHeight) > (element.offsetTop +(element.offsetHeight/2))){
        setTimeout(() => {
          element.classList.add("visible")
        }, index * 300)
       }     
   })
}
easyscroll()

// 🏵️⭐🏵️⭐🏵️⭐🏵️⭐🏵️⭐🏵️⭐🏵️⭐🏵️⭐🏵️⭐🏵️⭐🏵️⭐🏵️⭐🏵️⭐🏵️⭐🏵️  

// ⭐ // // // // // // // Évenements // // // // // // // // // // // //⭐

// 🏵️⭐🏵️⭐🏵️⭐🏵️⭐🏵️⭐🏵️⭐🏵️⭐🏵️⭐🏵️⭐🏵️⭐🏵️⭐🏵️⭐🏵️⭐🏵️⭐🏵️ 

////////////////////////////////////////////////////////////////////

window.addEventListener('scroll', function(){
  easyscroll()
})

//////////////////////////////////////////////////////////////////

let burger = document.querySelector('.burger'),
    rightTopBar = document.querySelector('.right-topBar');
// console.log(burger, navigation);

burger.addEventListener('click', () => {
    burger.classList.toggle("active");
    rightTopBar.classList.toggle("active");
    }
)

////////////////////////////////////////////////////////////////////////////////


document.addEventListener('DOMContentLoaded', function() {
    const cookie = document.querySelector(".cookie");
    const accept = document.querySelector(".accept");
    const refuse = document.querySelector(".refuse");
  
    // Afficher le pop-up
    cookie.style.display = 'block';
  
    // Gérer l'événement du bouton Accepter
    accept.addEventListener('click', function() {
        // Définir le cookie de consentement
        Cookies.set('consent', 'true');
        console.log('Consentement accepté');
        cookie.style.display = 'none'; 
    });
  
    // Gérer l'événement du bouton Refuser
    refuse.addEventListener('click', function() {
        Cookies.set('consent', 'false');
        console.log('Consentement refusé');
        cookie.style.display = 'none'; 
    });
  
    // Vérifier si l'utilisateur a déjà donné son consentement
    const consent = Cookies.get('consent');
    if (consent === 'true'|| consent === 'false') {
        cookie.style.display = 'none';
    }

    //Bouton Back to Top
    const backToTopButton = document.getElementById('backToTopBtn');
  
    window.addEventListener('scroll', function() {
      if (window.scrollY > 300) { // Affichez le bouton une fois que l'utilisateur a fait défiler vers le bas de 300 pixels
        backToTopButton.style.display = 'block';
      } else {
        backToTopButton.style.display = 'none';
      }
    });
  
    backToTopButton.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  });

////////////////////////////////////////////////////////////////////////////////

  document.addEventListener("DOMContentLoaded", function() {
    // Simule un délai de chargement
    setTimeout(function() {
        document.getElementById('loading-screen').style.display = 'none';
        document.getElementById('content').style.display = 'block';
        document.body.style.overflow = 'auto'; // Réactive le défilement une fois le chargement terminé
    }, 3000); 
});

////////////////////////////////////////////////////////////////

document.addEventListener("DOMContentLoaded", function() {
  const swiper = new Swiper('.testimonials.slider', {
      autoplay: {
          delay: 3000,
      },
  });
});

///////////////////////////////////////////////////////////////////

document.getElementById('signup-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Empêche l'envoi du formulaire par défaut
  // Optionnel: vous pouvez ajouter ici une validation supplémentaire si nécessaire
  window.location.href = '/jeu.html'; // Redirection vers jeu.html
});

