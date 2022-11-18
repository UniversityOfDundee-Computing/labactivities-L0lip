var amount = 0;

var tip;
var tip1;
var tip2;

function B0() {
    amount = 0
    $("#bill").html("£" + amount);
}

function B050() {
    amount = amount + 0.50;
    $("#bill").html("£" + amount);
}

function B1() {
    amount = amount + 1;
    $("#bill").html("£" + amount);
}

function B5() {
    amount = amount + 5;
    $("#bill").html("£" + amount);
}

function B10() {
    amount = amount + 10;
    $("#bill").html("£" + amount);
}

function B25() {
    amount = amount + 25;
    $("#bill").html("£" + amount);
}

function B50() {
    amount = amount + 50;
    $("#bill").html("£" + amount);
}

function B75() {
    amount = amount + 75;
    $("#bill").html("£" + amount);
}

function B100() {
    amount = amount + 100;
    $("#bill").html("£" + amount);
}

function T5() {
    tip = (amount / 100) * 5;
    tip = tip.toFixed(2);
    choice();
    $("#input").html("£" + tip);

}

function T10() {
    tip = (amount / 100) * 10;
    tip = tip.toFixed(2);
    choice();
    $("#input").html("£" + tip);
}

function T25() {
    tip = (amount / 100) * 25;
    tip = tip.toFixed(2);
    choice();
    $("#input").html("£" + tip);

}

function Tbig() {
    tip1 = (amount / 100) * 25;
    tip2 = (amount / 100) * 10 + 2;
    if (tip1 > tip2) {
        tip = tip1;
        tip = tip.toFixed(2);
        choice();
        $("#input").html("£" + tip);
    } else {
        tip = tip2;
        tip = tip.toFixed(2);
        choice();
        $("#input").html("£" + tip);
    }
}

function choice(){
    if (tip > 25){
        css25()
    } else {
        if (tip>10) {
            css10()
        } else {
            css5()
        }
    }
}

function css25(){
    $('#input').css('color', 'red');
    $('#input').css('background-color', 'green')
   
}

function css10(){
    $('#input').css('color', 'orange')
    $('#input').css('background-color', 'red')
}

function css5(){
    $('#input').css('color', 'green')
     $('#input').css('background-color', 'blue')
}