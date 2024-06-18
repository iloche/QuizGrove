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

<<<<<<< HEAD
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
=======
// ///////////////////////////////////////////////////////////////////

document.getElementById('signup-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Empêche l'envoi du formulaire par défaut
  // Optionnel: vous pouvez ajouter ici une validation supplémentaire si nécessaire
  window.location.href = '/jeu.html'; // Redirection vers jeu.html
});

// ////////////////////////////////////////////////////////////


// const questions = [
//   { question: "What is the capital of France?", answers: ["Paris", "Berlin", "Madrid", "Rome"], correct: 0, anecdote: "Paris is known as the 'City of Light'." },
//   { question: "What is 2 + 2?", answers: ["3", "4", "5", "6"], correct: 1, anecdote: "2 + 2 is a basic arithmetic operation." },
//   { question: "Quel est le plus grand océan de la planète Terre ?", answers: ["Océan Atlantique", "Océan Indien", "Océan Arctique", "Océan Pacifique"], correct: 3, anecdote: "L'océan Pacifique est le plus grand et le plus profond des océans du monde, couvrant plus de 63 millions de miles carrés." }
// ];

// let currentQuestion = 0;
// let score = 0;
// let level = 1;
// const maxLevel = 5;

// function loadQuestion() {
//   console.log('loadQuestion called');
//   const q = questions[currentQuestion];
//   console.log('Current question:', q.question);
//   document.getElementById('question').textContent = q.question;
//   const answersDiv = document.getElementById('answers');
//   answersDiv.innerHTML = '';
//   q.answers.forEach((answer, index) => {
//       const li = document.createElement('li');
//       li.textContent = answer;
//       li.onclick = () => checkAnswer(index);
//       answersDiv.appendChild(li);
//   });
// }

// function checkAnswer(selected) {
//   console.log('checkAnswer called with selected:', selected);
//   const correctAnswer = questions[currentQuestion].correct;
//   const correctAnswerText = questions[currentQuestion].answers[correctAnswer];
//   const anecdoteText = questions[currentQuestion].anecdote;

//   console.log('Correct answer:', correctAnswerText);
//   console.log('Anecdote:', anecdoteText);

//   document.getElementById('correct-answer').textContent = "Bonne réponse : " + correctAnswerText;
//   document.getElementById('correct-answer').style.display = 'block';
//   document.getElementById('anecdote').textContent = "Anecdote : " + anecdoteText;
//   document.getElementById('anecdote').style.display = 'block';

//   if (selected === correctAnswer) {
//       score++;
//       console.log('Correct answer selected. Score:', score);
//       updateProgress();
//   }

//   if (currentQuestion < questions.length - 1) {
//       currentQuestion++;
//       setTimeout(() => {
//           document.getElementById('correct-answer').style.display = 'none';
//           document.getElementById('anecdote').style.display = 'none';
//           loadQuestion();
//       }, 2000); // Wait 2 seconds before loading the next question
//   } else {
//       alert("Quiz Completed!");
//       resetQuiz();
//   }
// }

// function updateProgress() {
//   console.log('updateProgress called');
//   const progress = (score / (questions.length * level)) * 100;
//   document.getElementById('progress').style.width = progress + '%';
//   console.log('Progress:', progress);
//   if (progress >= 100) {
//       levelUp();
//   }
// }

// function levelUp() {
//   console.log('levelUp called');
//   if (level < maxLevel) {
//       level++;
//       score = 0;
//       currentQuestion = 0;
//       document.getElementById('level').textContent = level;
//       alert("Level Up! You are now at level " + level);
//       loadQuestion();
//   } else {
//       alert("Congratulations! You have reached the maximum level!");
//   }
// }

// function resetQuiz() {
//   console.log('resetQuiz called');
//   currentQuestion = 0;
//   score = 0;
//   level = 1;
//   document.getElementById('progress').style.width = '0%';
//   document.getElementById('level').textContent = level;
//   loadQuestion();
// }

// // Ensuring that the function runs after the DOM is fully loaded
// window.onload = () => {
//   console.log('window.onload called');
//   loadQuestion();
// }

///////////////////////////////////////////////////////

// document.addEventListener("DOMContentLoaded", function() {
//   const userProfile = {
//       informationsPersonnelles: {
//           nomUtilisateur: "Joueur123",
//           avatar: "avatar.png",
//           statut: "Prêt pour une nouvelle aventure!"
//       },
//       detailsCompte: {
//           email: "joueur123@example.com",
//           dateInscription: "2023-01-15",
//       },
//       statistiquesDeJeu: {
//           niveau: 42,
//           xp: 12345,
//       }
//   };

//   // Remplir les informations du profil
//   document.getElementById("username").textContent = userProfile.informationsPersonnelles.nomUtilisateur;
//   document.getElementById("avatar").src = userProfile.informationsPersonnelles.avatar;

//   document.getElementById("email").textContent = userProfile.detailsCompte.email;
//   document.getElementById("registration-date").textContent = userProfile.detailsCompte.dateInscription;
//   document.getElementById("last-login").textContent = userProfile.detailsCompte.derniereConnexion;

//   document.getElementById("level").textContent = userProfile.statistiquesDeJeu.niveau;
//   document.getElementById("xp").textContent = userProfile.statistiquesDeJeu.xp;

// });

// Liste des chemins d'accès vers les avatars prédéfinis
const predefinedAvatars = [
  "images/st_small_507x507-pad_600x600_f8f8f8.u4-removebg-preview.png",
  "images/st_small_507x507-pad_600x600_f8f8f8.u7__1_-removebg-preview.png",
  "images/st_small_507x507-pad_600x600_f8f8f8.u7__2_-removebg-preview.png",
  "images/st_small_507x507-pad_600x600_f8f8f8.u7-removebg-preview.png"
];

function changeAvatar() {
  // Créer une boîte de dialogue personnalisée pour afficher les avatars disponibles
  const dialog = document.createElement("div");
  dialog.classList.add("avatar-dialog");

  // Ajouter un titre à la boîte de dialogue
  const title = document.createElement("h3");
  title.textContent = "Choisissez un avatar :";
  dialog.appendChild(title);

  // Ajouter chaque avatar à la boîte de dialogue
  for (let i = 0; i < predefinedAvatars.length; i++) {
      const avatarPath = predefinedAvatars[i];

      // Créer une image représentant l'avatar
      const avatarImg = document.createElement("img");
      avatarImg.src = avatarPath;
      avatarImg.alt = "Avatar " + (i + 1);

      // Ajouter un gestionnaire d'événements pour changer l'avatar lors du clic
      avatarImg.addEventListener("click", function() {
          // Mettre à jour l'avatar affiché avec l'avatar sélectionné
          document.getElementById("avatar").src = avatarPath;
          // Fermer la boîte de dialogue
          document.body.removeChild(dialog);
          alert("Avatar changé avec succès !");
      });

      // Ajouter l'image de l'avatar à la boîte de dialogue
      dialog.appendChild(avatarImg);
  }

  // Ajouter la boîte de dialogue à la page
  document.body.appendChild(dialog);
}

function changeUsername() {
  const newPseudo = prompt("Entrez votre nouveau pseudo :");
    
  // Vérifier si l'utilisateur a saisi un pseudo valide
  if (newPseudo !== null && newPseudo.trim() !== "") {
      // Mettre à jour le nom d'utilisateur affiché sur la page avec le nouveau pseudo
      document.getElementById("username").textContent = newPseudo;
      showMessage("Pseudo changé avec succès !", "success");
  } else {
      // Afficher un message d'erreur si aucun pseudo n'a été saisi
      showMessage("Veuillez saisir un pseudo valide.", "error");
  }
}

// Fonction pour ouvrir une boîte de dialogue modale
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.style.display = "block";
}

// Fonction pour fermer une boîte de dialogue modale
function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.style.display = "none";
}

// Fonction pour changer le pseudo
function changePseudo() {
  const newPseudo = document.getElementById("newPseudoInput").value;
  
  // Mettre à jour le pseudo affiché sur la page avec le nouveau pseudo
  document.getElementById("username").textContent = newPseudo;
  closeModal("changePseudoModal");
}

// Fonction pour afficher un message
function showMessage(message, type) {
  const messageDiv = document.getElementById("message");
  messageDiv.textContent = message;
  messageDiv.className = type; // Ajoutez une classe CSS pour styliser le message
  setTimeout(() => {
      messageDiv.textContent = ""; // Efface le message après quelques secondes
      messageDiv.className = ""; // Efface la classe pour réinitialiser le style
  }, 3000); // Affiche le message pendant 3 secondes
}

/////////////////////////////////////////////////////////////////////////////////////

function resetAccount() {
  // Afficher une boîte de dialogue de confirmation
  const confirmation = confirm("Êtes-vous sûr de vouloir réinitialiser votre compte ? Cette action est irréversible.");

  // Vérifier si l'utilisateur a confirmé la réinitialisation du compte
  if (confirmation) {
      // Réinitialiser toutes les informations du compte à leurs valeurs par défaut
      document.getElementById("username").textContent = "Nom d'utilisateur";
      document.getElementById("avatar").src = "avatar.png";
      document.getElementById("status").textContent = "Statut personnalisé";
      document.getElementById("email").textContent = "exemple@example.com";
      document.getElementById("registration-date").textContent = "2023-01-15";
      document.getElementById("level").textContent = "1";
      document.getElementById("xp").textContent = "0";

      // Afficher un message de succès
      alert("Compte réinitialisé avec succès !");
  } else {
      // Afficher un message d'annulation si l'utilisateur n'a pas confirmé la réinitialisation
      alert("Réinitialisation du compte annulée.");
  }
}
>>>>>>> e4f9ee39fbc6c6eefd30dabaeec0ec012e3ceeb7
