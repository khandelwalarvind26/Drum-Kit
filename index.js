// document.querySelector(".set").addEventListener("click",function() {
//     var aud = new Audio("sounds/tom-1.mp3");
//     aud.play();
//     console.log(this.innertHTML);
// })


for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click",function() {
        // var aud = new Audio("sounds/tom-1.mp3");
        // aud.play();
        // this.style.color = "white";
        var buttonHTML = this.innerHTML;

        makeSound(buttonHTML);
        animate(buttonHTML);
    })
}

document.addEventListener("keydown",function(event) {
    var keyHTML = event.key;
    makeSound(keyHTML);
    animate (keyHTML);
    
})


function makeSound (key) {
    switch(key) {
        case 'w':
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
        break;

        case 'a':
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
        break;

        case 's':
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
        break;

        case 'd':
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
        break;

        case 'j':
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
        break;

        case 'k':
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
        break;

        case 'l':
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
        break;
    }
}

function animate(key) {
    var button = document.querySelector("."+key);
    button.classList.toggle("pressed");

    setTimeout(function() {
        button.classList.toggle("pressed");
    },100);
}