// Initialize scores
let [computer_score, user_score] = [0, 0];
const result_ref = document.getElementById("result");

// Define the choices object for game logic
const choices_object = {
    'rock': {
        'rock': 'draw',
        'scissor': 'win',
        'paper': 'lose'
    },
    'scissor': {
        'rock': 'lose',
        'scissor': 'draw',
        'paper': 'win'
    },
    'paper': {
        'rock': 'win',
        'scissor': 'lose',
        'paper': 'draw'
    }
};

// Function to handle the game logic
function checker(input) {
    const choices = ["rock", "paper", "scissor"];
    const num = Math.floor(Math.random() * 3);
    const computer_choice = choices[num];

    document.getElementById("comp_choice").innerHTML = 
        `Computer chose <span>${computer_choice.toUpperCase()}</span>`;

    document.getElementById("user_choice").innerHTML = 
        `You chose <span>${input.toUpperCase()}</span>`;

    const result = choices_object[input][computer_choice];

    switch (result) {
        case 'win':
            result_ref.style.cssText = "background-color: #cefdce; color: #689f38";
            result_ref.innerHTML = "YOU WIN";
            user_score++;
            break;
        case 'lose':
            result_ref.style.cssText = "background-color: #ffdde0; color: #d32f2f";
            result_ref.innerHTML = "YOU LOSE";
            computer_score++;
            break;
        default:
            result_ref.style.cssText = "background-color: #e5e5e5; color: #808080";
            result_ref.innerHTML = "DRAW";
            break;
    }

    // Update scores
    document.getElementById("computer_score").innerHTML = computer_score;
    document.getElementById("user_score").innerHTML = user_score;

    // Show the "Start New Game" button
    document.getElementById("new_game_button").style.display = 'block';
}

// Function to reset the game
function startNewGame() {
    // Clear the choices and result
    document.getElementById("user_choice").innerHTML = '';
    document.getElementById("comp_choice").innerHTML = '';
    result_ref.innerHTML = '';

    // Hide the "Start New Game" button
    document.getElementById("new_game_button").style.display = 'none';
}
