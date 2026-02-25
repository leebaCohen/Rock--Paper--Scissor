
const resultBox = document.getElementById('resultBox');
const resultText = document.getElementById('resultText');
const playAgainBtn = document.querySelector('button[type="button"]');
const images = document.querySelectorAll('.choice-img');


function play(userChoice, event) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    
    
    let result = "";
    if (userChoice === computerChoice) {
        result = "It's a tie!";
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        result = "You win!";
    } else {
        result = "Computer wins!";
    }

   
    resultText.innerHTML = `You chose <b>${userChoice}</b>. Computer chose <b>${computerChoice}</b>.<br>${result}`;
    resultBox.style.display = 'block';

    
    if (event && event.currentTarget) {
        images.forEach(img => img.style.border = "none");
        event.currentTarget.style.border = "4px solid orange"; 
    }
}


images.forEach(function(img) {
    img.addEventListener('click', function(event) {
        var choice = img.getAttribute('alt').toLowerCase();
        play(choice, event);
    });
});

document.addEventListener('keydown', function(event) {
    var key = event.key.toLowerCase();    
    if (key === 'r') { play('rock'); }
    if (key === 'p') { play('paper'); }
    if (key === 's') { play('scissors'); }
});

playAgainBtn.addEventListener('click', function() {
    resultBox.style.display = 'none';
    images.forEach(function(img) {
        img.style.border = "none";
    });
    
    console.log("Game Reset");
});