const text = "Welcome to Velmora , explore more for Features..!";
let index = 0;

function typeEffect() {
    if (index < text.length) {
        document.getElementById("animatedText").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 50);
    }
}

window.onload = typeEffect;

