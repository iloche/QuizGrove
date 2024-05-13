// 🍄⭐🍄⭐🍄⭐🍄⭐🍄⭐🍄⭐🍄⭐🍄⭐🍄⭐🍄⭐🍄⭐🍄⭐🍄⭐🍄⭐🍄⭐

// ⭐ // // // // //  Déclaration de variables // // // // // // // // // /🍄

// 🍄⭐🍄⭐🍄⭐🍄⭐🍄⭐🍄⭐🍄⭐🍄⭐🍄⭐🍄⭐🍄⭐🍄⭐🍄⭐🍄⭐🍄⭐








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