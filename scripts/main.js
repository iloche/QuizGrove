// 🍄⭐🍄⭐🍄⭐🍄⭐🍄⭐🍄⭐🍄⭐🍄⭐🍄⭐🍄⭐🍄⭐🍄⭐🍄⭐🍄⭐🍄⭐

// ⭐ // // // // //  Déclaration de variables // // // // // // // // // /🍄

// 🍄⭐🍄⭐🍄⭐🍄⭐🍄⭐🍄⭐🍄⭐🍄⭐🍄⭐🍄⭐🍄⭐🍄⭐🍄⭐🍄⭐🍄⭐

let elements = document.querySelectorAll(".hidden")

// 🎀⭐🎀⭐🎀⭐🎀⭐🎀⭐🎀⭐🎀⭐🎀⭐🎀⭐🎀⭐🎀⭐🎀⭐🎀⭐🎀⭐🎀⭐🎀 

// ⭐ // // // // // // // // Fonctions // // // // // // // // // // // // ⭐

// 🎀⭐🎀⭐🎀⭐🎀⭐🎀⭐🎀⭐🎀⭐🎀⭐🎀⭐🎀⭐🎀⭐🎀⭐🎀⭐🎀⭐🎀⭐🎀 

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

// ////////////////////////////////////////////////////////////////

document.addEventListener("DOMContentLoaded", function() {
  const swiper = new Swiper('.testimonials.slider', {
      autoplay: {
          delay: 3000,
      },
  });
});

// ////////////////////////////////////////////////////////////////

window.addEventListener('scroll', function(){
  easyscroll()
})

document.getElementById('scrollToCategories').addEventListener('click', function(event) {
  event.preventDefault();
  document.getElementById('categories').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('scrollToDifficulties').addEventListener('click', function(event) {
  event.preventDefault();
  document.getElementById('difficulties').scrollIntoView({ behavior: 'smooth' });
});
