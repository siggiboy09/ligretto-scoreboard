// ==== VARIABLES ====

let games = {};
// Games:
//   - Game
//     - Player
//       - Name
//       - Score

const start_screen = document.getElementById("start_screen");
const game_selector_screen = document.getElementById("game_selector_screen");
const game_screen = document.getElementById("game_screen");
const game_over_screen = document.getElementById("game_over_screen");

let current_game = "";

// ==============
// =    INIT    =
// ==============

function init() {
    // TODO:
    //  add check for active game
    if (false) {
        // Load active game
        set_screen(game_screen);
    } else {
        // Show button to make a new one
        set_screen(start_screen);
    };
};

// ==============
// =    CORE    =
// ==============

// == NEW GAME ==
function new_game() {
    let game_name = prompt_game_name()
    games[game_name] ??= {};
    current_game = game_name;
    let players = parseInt(prompt("How many players are going to play?", "4"));
    
    if (!(isNaN(players) || players == 0)) {
        for (i = 1; i <= players; i++) {
            let player_name = prompt_player_name(i);
            games[game_name][player_name] ??= {};
            games[game_name][player_name].score = 0;
        }
    };
    
    set_screen(game_screen);
    
    console.log(games);
};

// == PROMPT FOR PLAYER NAME ==
function prompt_player_name(player_ID) {
    let player_name = prompt("What is player " + player_ID + "'s name?", "Player " + player_ID);
    if (player_name != "" && player_name != null) {
        return player_name;
    } else {
        return "Player " + player_ID;
    }
}

// == PROMPT FOR GAME NAME ==
function prompt_game_name() {
    let game_name = prompt("What should the game be called?");
    if (game_name != "" && game_name != null) {
        return game_name;
    } else {
        return "Game 1";
    }
}

// ============
// =    UI    =
// ============

// == CURRENT SCREEN ==
function set_screen(screen) {
    start_screen.style.display = "none";
    game_selector_screen.style.display = "none";
    game_screen.style.display = "none";
    game_over_screen.style.display = "none";

    screen.style.display = "block";
};

// == DRAW PLAYER CARD ==
function draw_player_card(player_name) {
    let div = new Element("div")
}