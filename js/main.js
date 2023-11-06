let counter1 = 0
let counter2 = 0
let counter3 = 0
let counter4 = 0

function subtract(counter) {
    switch (counter) {
        case 1:
            counter1--;
            document.getElementById("counter1").innerHTML = counter1;
            break;

        case 2:
            counter2--;
            document.getElementById("counter2").innerHTML = counter2;
            break;

        case 3:
            counter3--;
            document.getElementById("counter3").innerHTML = counter3;
            break;

        case 4:
            counter4--;
            document.getElementById("counter4").innerHTML = counter4;
            break;
    }

    console.log(id, counter, counter1, counter2, counter3, counter4);
};

function add(counter) {
    switch (counter) {
        case 1:
            counter1++;
            document.getElementById("counter1").innerHTML = counter1;
            break;

        case 2:
            counter2++;
            document.getElementById("counter2").innerHTML = counter2;
            break;

        case 3:
            counter3++;
            document.getElementById("counter3").innerHTML = counter3;
            break;

        case 4:
            counter4++;
            document.getElementById("counter4").innerHTML = counter4;
            break;
    }

    console.log(id, counter, counter1, counter2, counter3, counter4);
};

function save() {
    localStorage.setItem("counter1", counter1);
    localStorage.setItem("counter2", counter2);
    localStorage.setItem("counter3", counter3);
    localStorage.setItem("counter4", counter4);
}

function load() {
    counter1 = localStorage.getItem("counter1");
    counter2 = localStorage.getItem("counter2");
    counter3 = localStorage.getItem("counter3");
    counter4 = localStorage.getItem("counter4");

    document.getElementById("counter1").innerHTML = counter1;
    document.getElementById("counter2").innerHTML = counter2;
    document.getElementById("counter3").innerHTML = counter3;
    document.getElementById("counter4").innerHTML = counter4;
}

function reset() {
    counter1 = 0;
    counter2 = 0;
    counter3 = 0;
    counter4 = 0;

    localStorage.setItem("counter1", counter1);
    localStorage.setItem("counter2", counter2);
    localStorage.setItem("counter3", counter3);
    localStorage.setItem("counter4", counter4);

    document.getElementById("counter1").innerHTML = counter1;
    document.getElementById("counter2").innerHTML = counter2;
    document.getElementById("counter3").innerHTML = counter3;
    document.getElementById("counter4").innerHTML = counter4;
}
