// 🍄⭐🍄⭐🍄⭐🍄⭐🍄⭐🍄⭐🍄⭐🍄⭐🍄⭐🍄⭐🍄⭐🍄⭐🍄⭐🍄⭐🍄⭐

// ⭐ // // // // //  Déclaration de variables // // // // // // // // // /🍄

// 🍄⭐🍄⭐🍄⭐🍄⭐🍄⭐🍄⭐🍄⭐🍄⭐🍄⭐🍄⭐🍄⭐🍄⭐🍄⭐🍄⭐🍄⭐

// function display(){
//     fetch(`https://api.openquizzdb.org/?key=CMZ7U55A9Q&choice=4&anec=1&wiki=1`)
//     .then(response => response.json())
//     .then(data => {
//       console.log(data);
//     })
//     .catch(error => {console.log("Erreur lors de la récup des données :", error);
//   })
// }

// display()



// 🎀⭐🎀⭐🎀⭐🎀⭐🎀⭐🎀⭐🎀⭐🎀⭐🎀⭐🎀⭐🎀⭐🎀⭐🎀⭐🎀⭐🎀⭐🎀 

// ⭐ // // // // // // // // Fonctions // // // // // // // // // // // // ⭐

// 🎀⭐🎀⭐🎀⭐🎀⭐🎀⭐🎀⭐🎀⭐🎀⭐🎀⭐🎀⭐🎀⭐🎀⭐🎀⭐🎀⭐🎀⭐🎀 







// 🏵️⭐🏵️⭐🏵️⭐🏵️⭐🏵️⭐🏵️⭐🏵️⭐🏵️⭐🏵️⭐🏵️⭐🏵️⭐🏵️⭐🏵️⭐🏵️⭐🏵️  

// ⭐ // // // // // // // Évenements // // // // // // // // // // // //⭐

// 🏵️⭐🏵️⭐🏵️⭐🏵️⭐🏵️⭐🏵️⭐🏵️⭐🏵️⭐🏵️⭐🏵️⭐🏵️⭐🏵️⭐🏵️⭐🏵️⭐🏵️ 

let burger = document.querySelector('.burger'),
    rightTopBar = document.querySelector('.right-topBar');
console.log(burger, navigation);

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
  });

  document.addEventListener('DOMContentLoaded', function() {
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