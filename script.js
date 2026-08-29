console.log("Welcome to Ziad's Portfolio!");

const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach(function(card) {

    card.addEventListener("mouseenter", function() {
        card.style.transform = "translateY(-10px)";
    });

    card.addEventListener("mouseleave", function() {
        card.style.transform = "translateY(0)";
    });

});