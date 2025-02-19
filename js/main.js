


var Perso = document.querySelector(".Perso");
var Obstacles = document.querySelector(".Obstacles");
var Score = 0; 

function Sauter() {
    if (!Perso.classList.contains("animation")) {
        Perso.classList.add('animation');
    }
    setTimeout(function(){
        Perso.classList.remove('animation');
    }, 500);
};

var Verification = setInterval(function(){

    var PersoTop = parseInt(window.getComputedStyle(Perso).getPropertyValue("top"));
    var ObstaclesLeft = parseInt(window.getComputedStyle(Obstacles).getPropertyValue("left"));

    if (ObstaclesLeft <20 && ObstaclesLeft >=-10 && PersoTop >= 120) {
        Obstacles.style.animation = "none";
        clearInterval(Verification); 
        alert("Vous Avez Perdu. Votre score est: " + Score);
    }else {
        Score++;
        document.getElementById("Score").textContent = "Score: " + Score;
    }
}, 100); 
