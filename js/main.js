var counter1 = 0;
var counter2 = 0;
var counter3 = 0;
var counter4 = 0;
var counter5 = 0;
var counter6 = 0;
var counter7 = 0;
var counter8 = 0;

var players = 0;

var player1 = 'player1';
var player2 = 'player2';
var player3 = 'player3';
var player4 = 'player4';
var player5 = 'player5';
var player6 = 'player6';
var player7 = 'player7';
var player8 = 'player8';

function onload() {

};

function subtract(counter) {
    switch (counter) {
        case 1:
            counter1 -= parseInt(prompt("player1 minus: "));
            document.getElementById("counter1").innerHTML = counter1;
            break;

        case 2:
            counter2 -= parseInt(prompt("player2 minus: "));
            document.getElementById("counter2").innerHTML = counter2;
            break;

        case 3:
            counter3 -= parseInt(prompt("player3 minus: "));
            document.getElementById("counter3").innerHTML = counter3;
            break;

        case 4:
            counter4 -= parseInt(prompt("player4 minus: "));
            document.getElementById("counter4").innerHTML = counter4;
            break;

        case 5:
            counter5 -= parseInt(prompt("player5 minus: "));
            document.getElementById("counter5").innerHTML = counter5;
            break;

        case 6:
            counter6 -= parseInt(prompt("player6 minus: "));
            document.getElementById("counter6").innerHTML = counter6;
            break;

        case 7:
            counter7 -= parseInt(prompt("player7 minus: "));
            document.getElementById("counter7").innerHTML = counter7;
            break;

        case 8:
            counter8 -= parseInt(prompt("player8 minus: "));
            document.getElementById("counter8").innerHTML = counter8;
            break;
    }

    console.log(counter, counter1, counter2, counter3, counter4);
};

function add(counter) {
    switch (counter) {
        case 1:
            counter1 += parseInt(prompt("player1 plus: "));
            document.getElementById("counter1").innerHTML = counter1;
            break;

        case 2:
            counter2 += parseInt(prompt("player2 plus: "));
            document.getElementById("counter2").innerHTML = counter2;
            break;

        case 3:
            counter3 += parseInt(prompt("player3 plus: "));
            document.getElementById("counter3").innerHTML = counter3;
            break;

        case 4:
            counter4 += parseInt(prompt("player4 plus: "));
            document.getElementById("counter4").innerHTML = counter4;
            break;

        case 5:
            counter5 += parseInt(prompt("player5 plus: "));
            document.getElementById("counter5").innerHTML = counter5;
            break;

        case 6:
            counter6 += parseInt(prompt("player6 plus: "));
            document.getElementById("counter6").innerHTML = counter6;
            break;

        case 7:
            counter7 += parseInt(prompt("player7 plus: "));
            document.getElementById("counter7").innerHTML = counter7;
            break;

        case 8:
            counter8 += parseInt(prompt("player8 plus: "));
            document.getElementById("counter8").innerHTML = counter8;
            break;
    }

    console.log(counter, counter1, counter2, counter3, counter4);
};

function save() {
    localStorage.setItem("counter1", counter1);
    localStorage.setItem("counter2", counter2);
    localStorage.setItem("counter3", counter3);
    localStorage.setItem("counter4", counter4);
    localStorage.setItem("counter5", counter5);
    localStorage.setItem("counter6", counter6);
    localStorage.setItem("counter7", counter7);
    localStorage.setItem("counter8", counter8);
}

function load() {
    counter1 = localStorage.getItem("counter1");
    counter2 = localStorage.getItem("counter2");
    counter3 = localStorage.getItem("counter3");
    counter4 = localStorage.getItem("counter4");
    counter5 = localStorage.getItem("counter5");
    counter6 = localStorage.getItem("counter6");
    counter7 = localStorage.getItem("counter7");
    counter8 = localStorage.getItem("counter8");

    document.getElementById("counter1").innerHTML = counter1;
    document.getElementById("counter2").innerHTML = counter2;
    document.getElementById("counter3").innerHTML = counter3;
    document.getElementById("counter4").innerHTML = counter4;
    document.getElementById("counter5").innerHTML = counter5;
    document.getElementById("counter6").innerHTML = counter6;
    document.getElementById("counter7").innerHTML = counter7;
    document.getElementById("counter8").innerHTML = counter8;
}

function reset() {
    counter1 = 0;
    counter2 = 0;
    counter3 = 0;
    counter4 = 0;
    counter5 = 0;
    counter6 = 0;
    counter7 = 0;
    counter8 = 0;

    

    localStorage.setItem("counter1", counter1);
    localStorage.setItem("counter2", counter2);
    localStorage.setItem("counter3", counter3);
    localStorage.setItem("counter4", counter4);
    localStorage.setItem("counter5", counter5);
    localStorage.setItem("counter6", counter6);
    localStorage.setItem("counter7", counter7);
    localStorage.setItem("counter8", counter8);

    document.getElementById("counter1").innerHTML = counter1;
    document.getElementById("counter2").innerHTML = counter2;
    document.getElementById("counter3").innerHTML = counter3;
    document.getElementById("counter4").innerHTML = counter4;
    document.getElementById("counter5").innerHTML = counter5;
    document.getElementById("counter6").innerHTML = counter6;
    document.getElementById("counter7").innerHTML = counter7;
    document.getElementById("counter8").innerHTML = counter8;

    player1 = 'player1';
    player2 = 'player2';
    player3 = 'player3';
    player4 = 'player4';
    player5 = 'player5';
    player6 = 'player6';
    player7 = 'player7';
    player8 = 'player8';

    document.getElementById("player1").innerHTML = player1;
    document.getElementById("player2").innerHTML = player2;
    document.getElementById("player3").innerHTML = player3;
    document.getElementById("player4").innerHTML = player4;
    document.getElementById("player5").innerHTML = player5;
    document.getElementById("player6").innerHTML = player6;
    document.getElementById("player7").innerHTML = player7;
    document.getElementById("player8").innerHTML = player8;
}

function changePlayers() {
    players = parseInt(prompt("how many players are there? "))
    switch (players) {
        case 8:
            document.getElementById("divcounter8").style.display = "block";
            document.getElementById("divcounter7").style.display = "block";
            document.getElementById("divcounter6").style.display = "block";
            document.getElementById("divcounter5").style.display = "block";
            document.getElementById("divcounter4").style.display = "block";
            document.getElementById("divcounter3").style.display = "block";
            break;

        case 7:
            document.getElementById("divcounter8").style.display = "none";
            document.getElementById("divcounter7").style.display = "block";
            document.getElementById("divcounter6").style.display = "block";
            document.getElementById("divcounter5").style.display = "block";
            document.getElementById("divcounter4").style.display = "block";
            document.getElementById("divcounter3").style.display = "block";
            break;

        case 6:
            document.getElementById("divcounter8").style.display = "none";
            document.getElementById("divcounter7").style.display = "none";
            document.getElementById("divcounter6").style.display = "block";
            document.getElementById("divcounter5").style.display = "block";
            document.getElementById("divcounter4").style.display = "block";
            document.getElementById("divcounter3").style.display = "block";
            break;

        case 5:
            document.getElementById("divcounter8").style.display = "none";
            document.getElementById("divcounter7").style.display = "none";
            document.getElementById("divcounter6").style.display = "none";
            document.getElementById("divcounter5").style.display = "block";
            document.getElementById("divcounter4").style.display = "block";
            document.getElementById("divcounter3").style.display = "block";
            break;

        case 4:
            document.getElementById("divcounter8").style.display = "none";
            document.getElementById("divcounter7").style.display = "none";
            document.getElementById("divcounter6").style.display = "none";
            document.getElementById("divcounter5").style.display = "none";
            document.getElementById("divcounter4").style.display = "block";
            document.getElementById("divcounter3").style.display = "block";
            break;

        case 3:
            document.getElementById("divcounter8").style.display = "none";
            document.getElementById("divcounter7").style.display = "none";
            document.getElementById("divcounter6").style.display = "none";
            document.getElementById("divcounter5").style.display = "none";
            document.getElementById("divcounter4").style.display = "none";
            document.getElementById("divcounter3").style.display = "block";
            break;

        case 2:
            document.getElementById("divcounter8").style.display = "none";
            document.getElementById("divcounter7").style.display = "none";
            document.getElementById("divcounter6").style.display = "none";
            document.getElementById("divcounter5").style.display = "none";
            document.getElementById("divcounter4").style.display = "none";
            document.getElementById("divcounter3").style.display = "none";
    }
}

function changeName(id) {
    switch (id) {
        case 1:
            player1 = prompt("Please enter a name for player1");
            document.getElementById("player1").innerHTML = player1;
            break;

        case 2:
            player2 = prompt("Please enter a name for player2");
            document.getElementById("player2").innerHTML = player2;
            break;

        case 3:
            player3 = prompt("Please enter a name for player3");
            document.getElementById("player3").innerHTML = player3;
            break;

        case 4:
            player4 = prompt("Please enter a name for player4");
            document.getElementById("player4").innerHTML = player4;
            break;
        
        case 5:
            player5 = prompt("Please enter a name for player5");
            document.getElementById("player5").innerHTML = player5;
            break;

        case 6:
            player6 = prompt("Please enter a name for player6");
            document.getElementById("player6").innerHTML = player6;
            break;

        case 7:
            player7 = prompt("Please enter a name for player7");
            document.getElementById("player7").innerHTML = player7;
            break;

        case 8:
            player8 = prompt("Please enter a name for player8");
            document.getElementById("player8").innerHTML = player8;
            break;
    };
};