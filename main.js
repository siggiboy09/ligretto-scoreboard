// ===================
// =    VARIABLES    =
// ===================

let games = {};

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

// == LOAD CURRENT GAME ==
function load_current_game() {
    player_cards.innerHTML = "";
    game_title.innerText = current_game;
    Object.keys(games[current_game]).forEach(player => {
        draw_player_card(games[current_game][player].id, games[current_game][player].name, games[current_game][player].score);
    });
    set_screen(game_screen);
}

function play_game(game) {
    console.log(game);
    current_game = game;
    load_current_game();
}

// == OPEN GAME SELECTOR SCREEN ==
function open_games_screen() {
    game_cards.innerHTML = "";
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
    let game_name = prompt("What should the round be called?");
    if (game_name != "" && game_name != null) {
        return game_name;
    } else {
        return "Game 1";
    };
};

// == PROMPT CHANGE SCORE ==
function prompt_change_score() {
    let score = parseInt(prompt("What to add or remove with?", "0"));
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
        return games[current_game][player_id].name;
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
    games[current_game][player_id].score += prompt_change_score(player_id);
    update_values();
    save();
};

// == CHANGE NAME ==
function change_name(player_id) {
    games[current_game][player_id].name = prompt_change_name(player_id);
    update_values();
    save();
}

// == DELETE CURRENT GAME ==
function delete_current_game() {
    delete games[current_game];
    current_game = "";
    save();
    player_cards.innerHTML = "";
    if (games == {}) {
        set_screen(new_game_screen);
    } else {
        set_screen(game_selector_screen);
    }
};

// == DELETE GAME IN LIST ==
function delete_game_in_list(game) {
    delete games[game];

    if (games == {}) {
        set_screen(new_game_screen);
    } else {
        open_games_screen();
    }
}

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

    const card = document.createElement("div");
    card.className = "card border-2 rounded m-2 gap-2 p-2";
    card.id = player_id;

    const h2 = document.createElement("h2");
    h2.id = player_id + "_name";
    h2.textContent = player_name;

    const score = document.createElement("p");
    score.id = player_id + "_score";
    score.textContent = player_score;

    const change_score_button = document.createElement("button");
    change_score_button.className = "btn btn-primary";
    change_score_button.innerText = "+/-";
    change_score_button.onclick = () => change_score(player_id);

    const change_name_button = document.createElement("button");
    change_name_button.className = "btn btn-primary";
    change_name_button.innerText = "Change name";
    change_name_button.onclick = () => change_name(player_id);

    card.append(h2, score, change_score_button, change_name_button);
    player_cards.append(card);
}

// == DRAW GAME CARDS ==
function draw_game_card(game) {

    const card = document.createElement("div");
    card.className = "card border-2 rounded m-2 gap-2 p-2";
    card.id = game;

    const h2 = document.createElement("h2");
    h2.textContent = game;

    const resume_button = document.createElement("button");
    resume_button.className = "btn btn-primary";
    resume_button.textContent = "resume";
    resume_button.onclick = () => play_game(game);

    const delete_button = document.createElement("button");
    delete_button.className = "btn btn-danger";
    delete_button.textContent = "delete";
    delete_button.onclick = () => delete_game_in_list(game);

    card.append(h2, resume_button, delete_button);
    game_cards.append(card);
}

// == UPDATE VALUES ==
function update_values() {
    game_title.innerText = current_game;
    Object.keys(games[current_game]).forEach(player => {
        document.getElementById(player + "_name").innerText = games[current_game][player].name;
        document.getElementById(player + "_score").innerText = games[current_game][player].score;
    });
};