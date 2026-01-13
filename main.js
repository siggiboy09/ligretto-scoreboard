// ===================
// =    VARIABLES    =
// ===================

let games = {};
// Games:
//   - Game
//     - Player_ID
//       - ID
//       - Name
//       - Score

// == SCREENS ==
const new_game_screen = document.getElementById("new_game_screen");
const game_selector_screen = document.getElementById("game_selector_screen");
const game_screen = document.getElementById("game_screen");
const game_over_screen = document.getElementById("game_over_screen");

// == ELEMENTS ==
const game_title = document.getElementById("game_title");
const player_cards = document.getElementById("player_cards");
const game_cards = document.getElementById("game_cards");

let current_game = "";

// ==============
// =    INIT    =
// ==============

function init() {
    if (localStorage.getItem("current_game")) {
        current_game = localStorage.getItem("current_game");
    };
    if (localStorage.getItem("games")) {
        games = JSON.parse(localStorage.getItem("games"));
    };
    
    if (current_game != "") {
        set_screen(game_screen);
        load_current_game();
    } 
    else if ( current_game == "" && Object.keys(games).length > 0) {
        open_games_screen();
    } else {
        set_screen(new_game_screen);
    };
};




// ==============
// =    GAME    =
// ==============

// == NEW GAME ==
function new_game() {
    let game_name = prompt_game_name()
    games[game_name] ??= {};
    current_game = game_name;
    game_title.innerText = current_game;

    let players = parseInt(prompt("How many players are going to play?", "4"));
    
    if (!(isNaN(players) || players == 0)) {
        for (i = 1; i <= players; i++) {
            let player_name = prompt_player_name(i);

            if (player_name.includes(" ")) {  
                player_id = player_name.replace(/ /g, "_");  
            }

            games[current_game][player_id] ??= {};
            games[current_game][player_id].id = player_id;
            games[current_game][player_id].name = player_name;
            games[current_game][player_id].score = 0;

            draw_player_card(player_id, player_name, 0);
        }
    };

    save();
    set_screen(game_screen);
};

// == LOAD CURRENT GAME ==
function load_current_game() {
    game_title.innerText = current_game;
    Object.keys(games[current_game]).forEach(player => {
        draw_player_card(games[current_game][player].id, games[current_game][player].name, games[current_game][player].score);
    });
}

function play_game(game) {
    console.log(game);
}

// == DELETE CURRENT GAME ==
function delete_current_game() {
    delete games[current_game];
    current_game = "";
    save();
    player_cards.innerHTML = "";
    set_screen(new_game_screen);
};

// == DELETE GAME ==
function delete_game(game) {
    delete games[game];
    save();
};

// == OPEN GAME SELECTOR SCREEN ==
function open_games_screen() {
    Object.keys(games).forEach(game => {
        draw_game_card(game);
    });

    set_screen(game_selector_screen);
    player_cards.innerHTML = "";
    current_game = ""
    save();
}




// =================
// =    PROMPTS    =
// =================

// == PROMPT PLAYER NAME ==
function prompt_player_name(player_ID) {
    let player_name = prompt("What is player " + player_ID + "'s name?", "Player " + player_ID);
    if (player_name != "" && player_name != null) {
        return player_name;
    } else {
        return "Player " + player_ID;
    };
};

// == PROMPT GAME NAME ==
function prompt_game_name() {
    let game_name = prompt("What should the game be called?");
    if (game_name != "" && game_name != null) {
        return game_name;
    } else {
        return "Game 1";
    };
};

// == PROMPT CHANGE SCORE ==
function prompt_change_score(player_id) {
    let score = parseInt(prompt("What to change " + games[current_game][player_id].name + " with?", "0"));
    if (!isNaN(score)) {
        return score
    } else {
        return 0;
    }
}

// == PROMPT CHANGE NAME ==
function prompt_change_name(player_id) {
    let player_name = prompt("What should the player be called?");
    if (player_name != "" && player_name != null) {
        return player_name;
    } else {
        return "Player 1";
    };
};




// ==============
// =    DATA    =
// ==============

// == SAVE GAME ==
function save() {
    localStorage.setItem("games", JSON.stringify(games));
    localStorage.setItem("current_game", current_game);
}


// == CHANGE SCORE ==
function change_score(player_id) {
    games[current_game][player_id.id].score += prompt_change_score(player_id.id);
    update_values()
    save()
};

// == CHANGE NAME ==
function change_name(player_id) {
    games[current_game][player_id.id].name = prompt_change_name(player_id.id);
    update_values()
    save()
}




// ============
// =    UI    =
// ============

// == CURRENT SCREEN ==
function set_screen(screen) {
    new_game_screen.style.display = "none";
    game_selector_screen.style.display = "none";
    game_screen.style.display = "none";
    game_over_screen.style.display = "none";

    screen.style.display = "block";

    save();
};

// == DRAW PLAYER CARD ==
function draw_player_card(player_id, player_name, player_score) {
    player_cards.insertAdjacentHTML("beforeend", "<div id='" + player_id + "' class='card border-2 rounded m-2 gap-2 p-2'><h2 id='" + player_id + "_name'>" + player_name + "</h2><p id='" + player_id + "_score'>" + player_score + "</p><button onClick='change_score(" + player_id + ")' class='btn btn-primary'>+/-</button><button onClick='change_name(" + player_id + ")' class='btn btn-primary'>change name</button></div>")
}

function draw_game_card(game) {
    game_cards.insertAdjacentHTML("beforeend", "<div id='" + game + "' class='card border-2 rounded m-2 gap-2 p-2'><h2>" + game + "</h2><button onclick='play_game(" + game + ")' class='btn btn-primary'>resume</button><button onclick='delete_game()' class='btn btn-danger'>delete</button></div>")
}

// == UPDATE VALUES ==
function update_values() {
    game_title.innerText = current_game;
    Object.keys(games[current_game]).forEach(player => {
        document.getElementById(player + "_name").innerText = games[current_game][player].name;
        document.getElementById(player + "_score").innerText = games[current_game][player].score;
    });
};